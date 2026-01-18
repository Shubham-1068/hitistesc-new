import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    githubUrl: {
      type: String,
      required: [true, 'GitHub URL is required'],
      unique: true,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    collegeName: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
    },
    experienceLevel: {
      type: String,
      required: [true, 'Experience level is required'],
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
    },
    agreeToCodeOfConduct: {
      type: Boolean,
      required: true,
    },
    receiveEventCommunications: {
      type: Boolean,
      default: false,
    },
    registrationId: {
      type: String,
      unique: true,
    },
    idCardUrl: {
      type: String,
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model('Registration', registrationSchema);
