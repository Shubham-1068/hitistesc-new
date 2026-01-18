import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Registration from '@/lib/models/Registration';
import { appendToGoogleSheet } from '@/lib/google-sheets';

function generateRegistrationId() {
  const date = new Date();
  const timestamp = date.getTime().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `OSP-${date.getFullYear()}-${timestamp}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      githubUrl,
      linkedinUrl,
      collegeName,
      year,
      experienceLevel,
      agreeToCodeOfConduct,
      receiveEventCommunications,
    } = body;

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'githubUrl',
      'experienceLevel',
      'agreeToCodeOfConduct',
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate Code of Conduct agreement
    if (!agreeToCodeOfConduct) {
      return NextResponse.json(
        { error: 'You must agree to the Code of Conduct' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation - just check if not empty (frontend handles formatting)
    if (!phone || phone.trim().length === 0) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmail = await Registration.findOne({
      email: email.toLowerCase(),
    });
    if (existingEmail) {
      return NextResponse.json(
        {
          error: 'Email already registered. Please use a different email.',
          registrationId: existingEmail.registrationId,
        },
        { status: 400 }
      );
    }

    // Check if GitHub URL already exists (if provided)
    if (githubUrl && githubUrl.trim()) {
      const existingGithub = await Registration.findOne({
        githubUrl: githubUrl.toLowerCase(),
      });
      if (existingGithub) {
        return NextResponse.json(
          {
            error: 'This GitHub URL is already registered. Please use a different GitHub URL.',
            registrationId: existingGithub.registrationId,
          },
          { status: 400 }
        );
      }
    }

    // Generate registration ID
    const registrationId = generateRegistrationId();

    // Create registration
    const registration = new Registration({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      githubUrl: githubUrl?.trim() || '',
      linkedinUrl: linkedinUrl?.trim() || '',
      collegeName: collegeName?.trim() || '',
      year: year || '',
      experienceLevel,
      agreeToCodeOfConduct,
      receiveEventCommunications: receiveEventCommunications || false,
      registrationId,
    });

    await registration.save();

    // Append to Google Sheets
    if (process.env.GOOGLE_SPREADSHEET_ID && process.env.GOOGLE_SHEET_RANGE) {
      try {
        const values = [
          [
            registrationId,
            fullName,
            email,
            phone,
            githubUrl || '',
            linkedinUrl || '',
            collegeName || '',
            year || '',
            experienceLevel,
            agreeToCodeOfConduct ? 'Yes' : 'No',
            receiveEventCommunications ? 'Yes' : 'No',
            new Date().toISOString(),
          ],
        ];

        await appendToGoogleSheet(
          process.env.GOOGLE_SPREADSHEET_ID,
          process.env.GOOGLE_SHEET_RANGE,
          values
        );
      } catch (sheetsError) {
        console.error('Warning - Error appending to Google Sheets:', sheetsError);
        // Don't fail the registration if sheets fails
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful! Your ID card will be generated shortly.',
        registrationId,
        data: {
          id: registration._id,
          fullName: registration.fullName,
          email: registration.email,
          collegeName: registration.collegeName,
          experienceLevel: registration.experienceLevel,
          githubUrl: registration.githubUrl,
          registrationId: registration.registrationId,
          registeredAt: registration.registeredAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        { error: `${field.charAt(0).toUpperCase() + field.slice(1)} already registered` },
        { status: 400 }
      );
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(', ');
      return NextResponse.json(
        { error: `Validation error: ${messages}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Registration failed',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const registrationId = searchParams.get('registrationId');

    await connectToDatabase();

    let registration;

    if (email) {
      registration = await Registration.findOne({ email: email.toLowerCase() });
    } else if (registrationId) {
      registration = await Registration.findOne({ registrationId });
    } else {
      return NextResponse.json(
        { error: 'Email or registration ID parameter required' },
        { status: 400 }
      );
    }

    if (!registration) {
      return NextResponse.json(
        { error: 'Registration not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: registration,
    });
  } catch (error: any) {
    console.error('Error fetching registration:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch registration',
        message: error.message,
      },
      { status: 500 }
    );
  }
}
