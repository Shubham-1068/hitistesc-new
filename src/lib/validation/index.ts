import * as z from "zod";
import DOMPurify from "dompurify";
// ============================================================
// USER
// ============================================================
const popularEmailDomains = ["gmail.com", "yahoo.com", "outlook.com"];

const emailDomainValidator = (email: string) => {
  const domain = email.split("@")[1];
  return popularEmailDomains.includes(domain);
};
const usernameValidator = z
  .string()
  .trim()
  .toLowerCase()
  .min(5, { message: "Membership ID must be at least 5 characters." })
  .regex(/^[a-z]+$/, {
    message: "Username must be lowercase letters only and without spaces.",
  });

export const SignupValidation = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
  username: usernameValidator,
  email: z.string().trim().email().refine(emailDomainValidator, {
    message: "Only these domains supported (gmail.com, yahoo.com, outlook.com)",
  }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const SigninValidation = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
// restricting file uploading to images only
const fileValidator = z.custom<File[]>((files) => 
  Array.isArray(files) && files.every(file => file.type.startsWith("image/")), 
  { message: "Only image files are allowed." }
);
export const ProfileValidation = z.object({
  file: fileValidator,
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string().trim()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().trim().email(),
  bio: z.string().transform((val)=>DOMPurify.sanitize(val)),
});

export const EditProfileValidation = z.object({
  name: z.string().trim().min(4, { message: "Too short" }),
  bio: z.string().transform((val) => DOMPurify.sanitize(val)),
  file: fileValidator
});
// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z
    .string()
    .trim()
    .min(5, { message: "Minimum 5 characters." })
    .max(2200, { message: "Maximum 2,200 characters" })
    .transform((val) => DOMPurify.sanitize(val)),
  file: fileValidator,
  location: z
    .string()
    .min(1, { message: "This field is required" })
    .max(1000, { message: "Maximum 1000 characters." })
    .transform((val) => DOMPurify.sanitize(val)),
    tags: z.string().trim().transform((val) => DOMPurify.sanitize(val)),
});
