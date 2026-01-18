import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Registration from '@/lib/models/Registration';

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { email, githubUrl } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required for duplicate check' },
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
          available: false,
          message: `An account with email "${email}" is already registered. Please use a different email address.`,
        },
        { status: 200 }
      );
    }

    // Check if GitHub URL already exists (only if provided)
    if (githubUrl && githubUrl.trim()) {
      const existingGithub = await Registration.findOne({
        githubUrl: githubUrl.toLowerCase(),
      });

      if (existingGithub) {
        return NextResponse.json(
          {
            available: false,
            message: `This GitHub URL is already registered. Please use a different GitHub URL or leave it blank.`,
          },
          { status: 200 }
        );
      }
    }

    // No duplicates found
    return NextResponse.json(
      {
        available: true,
        message: 'Email and GitHub URL are available',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Duplicate check error:', error);
    return NextResponse.json(
      { error: 'Failed to check for duplicates. Please try again.' },
      { status: 500 }
    );
  }
}
