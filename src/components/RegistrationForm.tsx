"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"

const registrationSchema = z.object({
    fullName: z.string().min(2, "Full name is required (min 2 characters)"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    githubUrl: z.string().url("Please enter a valid GitHub URL"),
    linkedinUrl: z.string().url("Please enter a valid LinkedIn URL").or(z.literal("")).optional(),
    collegeName: z.string().optional(),
    year: z.string().optional(),
    experienceLevel: z.string().min(1, "Please select an experience level"),
    agreeToCodeOfConduct: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Code of Conduct",
    }),
    receiveEventCommunications: z.boolean().optional(),
})

type RegistrationFormData = z.infer<typeof registrationSchema>

interface RegistrationResponse {
    success: boolean
    registrationId: string
    message: string
    data: {
        fullName: string
        email: string
        collegeName?: string
        githubUrl?: string
    }
}

export default function RegistrationForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [lookupLoading, setLookupLoading] = useState(false)
    const [lookupResult, setLookupResult] = useState<string | null>(null)
    const [lookupEmail, setLookupEmail] = useState("")
    const [lookupGithub, setLookupGithub] = useState("")
    const router = useRouter()
    const { toast } = useToast()

    const form = useForm<RegistrationFormData>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            githubUrl: "",
            linkedinUrl: "",
            collegeName: "",
            year: "",
            experienceLevel: "",
            agreeToCodeOfConduct: false,
            receiveEventCommunications: false,
        },
    })

    const onSubmit = async (data: RegistrationFormData) => {
        setIsLoading(true)
        try {
            // Check for duplicates before submission
            const duplicateCheck = await axios.post<{ available: boolean; message: string }>(
                "/api/register/check-duplicates",
                {
                    email: data.email,
                    githubUrl: data.githubUrl,
                },
            )

            if (!duplicateCheck.data.available) {
                toast({
                    title: "Duplicate Entry",
                    description: duplicateCheck.data.message,
                    variant: "destructive",
                })
                setIsLoading(false)
                return
            }

            const response = await axios.post<RegistrationResponse>("/api/register", data)

            if (response.data.success) {
                console.log("Registration response:", response.data)
                form.reset()
                toast({
                    title: "Success!",
                    description: `Registration successful. Your ID: ${response.data.registrationId}`,
                })
                router.push(`/opensource101/summary?registrationId=${encodeURIComponent(response.data.registrationId)}`)
            }
        } catch (error: any) {
            console.error("Registration error:", error)
            toast({
                title: "Error",
                description: error.response?.data?.error || "Registration failed. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleFindRegistrationId = async () => {
        const email = lookupEmail.trim()
        const githubUrl = lookupGithub.trim().toLowerCase()

        if (!email || !githubUrl) {
            toast({
                title: "Missing details",
                description: "Please enter both your email and GitHub URL.",
                variant: "destructive",
            })
            return
        }

        setLookupLoading(true)
        setLookupResult(null)

        try {
            const response = await axios.get<{ success: boolean; data: any }>("/api/register", {
                params: { email },
            })

            const data = response.data.data
            const storedGithub = (data.githubUrl || "").toLowerCase()

            if (!storedGithub || storedGithub !== githubUrl) {
                toast({
                    title: "Not found",
                    description: "No registration found with this email and GitHub URL.",
                    variant: "destructive",
                })
                return
            }

            setLookupResult(data.registrationId)

            toast({
                title: "Registration found",
                description: `Your registration ID: ${data.registrationId}`,
            })
        } catch (error: any) {
            toast({
                title: "Error",
                description:
                    error.response?.data?.error ||
                    "Unable to find a registration with those details. Please try again.",
                variant: "destructive",
            })
        } finally {
            setLookupLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-transparent text-white">
            <div className="grid lg:grid-cols-2 min-h-screen">
                {/* Left Panel - Hidden on mobile */}
                <div className="relative hidden lg:flex flex-col justify-center p-12 xl:p-16 overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                            <span className="text-sm font-semibold text-white">ISTE HIT-SC Presents</span>
                        </div>

                        <h1 className="text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">Open Source 101</h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">Hello Aspiring Contributors!</p>

                        <div className="space-y-6 text-gray-300">
                            <p className="text-base leading-relaxed">
                                Open source 101 is not just a coding event—it is a culture of collaboration where ideas grow through
                                shared contributions. This Open Source Event organised by ISTE HIT-SC opens the door to hands-on
                                innovation, collaborative development, and practical learning shaped by real project environments.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                                    <span className="text-2xl">🚀</span> Why Join?
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Industry-style workflows and prior experiences (like GSoC, Hacktoberfest 🚀)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Hands-on work on live projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Mentorship from seniors & project admins</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Exposure to contributor role and responsibilities</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>MAR Points and Recognised Certificates for Participants</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">▸</span>
                                        <span>Learn by contributing, grow by collaborating</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-sm text-gray-400 italic">
                                As the only society hosting such an initiative, ISTE HIT-SC provides a dedicated platform that connects
                                students with practical learning, structured mentorship, and exposure to professionally managed open
                                source projects.
                            </p>

                            <p className="text-base font-semibold text-white pt-4">
                                Looking forward to building together 🤝
                                <br />
                                <span className="text-white">— Team ISTE HIT-SC</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="flex items-center justify-center p-6 lg:p-12">
                    <div className="w-full max-w-md">
                        {/* Mobile Header */}
                        <div className="lg:hidden mb-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-xs font-semibold text-white">ISTE HIT-SC</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Open Source 101</h2>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-2xl font-bold mb-6 text-center text-white">Register Now</h3>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    {/* Full Name */}
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium">Full Name *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="John Doe"
                                                        {...field}
                                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                    />
                                                </FormControl>
                                                <p className="text-xs text-gray-400 mt-1">e.g., John Doe</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Email & Phone Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white font-medium text-sm">Email *</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="you@example.com"
                                                            {...field}
                                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                        />
                                                    </FormControl>
                                                    <p className="text-xs text-gray-400 mt-1">e.g., you@example.com</p>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white font-medium text-sm">Phone *</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="1234567890"
                                                            {...field}
                                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                        />
                                                    </FormControl>
                                                    <p className="text-xs text-gray-400 mt-1">e.g., +919876543210</p>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* GitHub URL */}
                                    <FormField
                                        control={form.control}
                                        name="githubUrl"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium">GitHub URL *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://github.com/username"
                                                        {...field}
                                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                    />
                                                </FormControl>
                                                <p className="text-xs text-gray-400 mt-1">e.g., https://github.com/johndoe</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* LinkedIn URL */}
                                    <FormField
                                        control={form.control}
                                        name="linkedinUrl"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium">
                                                    LinkedIn <span className="text-xs text-gray-400">(Optional)</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://linkedin.com/in/username"
                                                        {...field}
                                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                    />
                                                </FormControl>
                                                <p className="text-xs text-gray-400 mt-1">e.g., https://linkedin.com/in/johndoe</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* College & Year Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="collegeName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white font-medium text-sm">College</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                        placeholder="Your University"
                                                        {...field}
                                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-lg h-11 focus:ring-2 focus:ring-white/30 transition-all"
                                                    />
                                                </FormControl>
                                                <p className="text-xs text-gray-400 mt-1">e.g., Haldia Institute of Technology</p>
                                                <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="year"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white font-medium text-sm">Year</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-lg h-11">
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="bg-black/90 border-white/20">
                                                            <SelectItem value="1st Year" className="text-white">
                                                                1st Year
                                                            </SelectItem>
                                                            <SelectItem value="2nd Year" className="text-white">
                                                                2nd Year
                                                            </SelectItem>
                                                            <SelectItem value="3rd Year" className="text-white">
                                                                3rd Year
                                                            </SelectItem>
                                                            <SelectItem value="4th Year" className="text-white">
                                                                4th Year
                                                            </SelectItem>
                                                            <SelectItem value="Other" className="text-white">
                                                                Other
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Experience Level */}
                                    <FormField
                                        control={form.control}
                                        name="experienceLevel"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white font-medium">Experience Level *</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-lg h-11">
                                                            <SelectValue placeholder="Select level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-black/90 border-white/20">
                                                        <SelectItem value="beginner" className="text-white">
                                                            Beginner
                                                        </SelectItem>
                                                        <SelectItem value="intermediate" className="text-white">
                                                            Intermediate
                                                        </SelectItem>
                                                        <SelectItem value="advanced" className="text-white">
                                                            Advanced
                                                        </SelectItem>
                                                        <SelectItem value="expert" className="text-white">
                                                            Expert
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <p className="text-xs text-gray-400 mt-1">e.g., Beginner</p>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Checkboxes */}
                                    <div className="space-y-3 pt-4">
                                        <FormField
                                            control={form.control}
                                            name="agreeToCodeOfConduct"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0">
                                                    <FormControl>
                                                        <label className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-cyan-500/30 cursor-pointer transition-all duration-300 group">
                                                            <input
                                                                type="checkbox"
                                                                checked={field.value}
                                                                onChange={field.onChange}
                                                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 border-cyan-400/50 bg-white/5 cursor-pointer accent-cyan-400 transition-all"
                                                            />
                                                            <span className="text-white font-medium text-sm group-hover:text-cyan-200 transition-colors">
                                                                I agree to the Code of Conduct *
                                                            </span>
                                                        </label>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="receiveEventCommunications"
                                            render={({ field }) => (
                                                <FormItem className="space-y-0">
                                                    <FormControl>
                                                        <label className="flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-cyan-500/30 cursor-pointer transition-all duration-300 group">
                                                            <input
                                                                type="checkbox"
                                                                checked={field.value}
                                                                onChange={field.onChange}
                                                                className="w-5 h-5 sm:w-6 sm:h-6 rounded-md border-2 border-cyan-400/50 bg-white/5 cursor-pointer accent-cyan-400 transition-all"
                                                            />
                                                            <span className="text-white font-medium text-sm group-hover:text-cyan-200 transition-colors">
                                                                I want to receive event communications
                                                            </span>
                                                        </label>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-white hover:bg-white/90 text-black font-semibold rounded-lg h-12 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 mt-6"
                                        size="lg"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Registering...
                                            </span>
                                        ) : (
                                            "Register Now"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                                <p className="text-sm font-semibold text-white text-center">
                                    Already registered? Looking for your ID
                                </p>
                                <form
                                    className="space-y-3"
                                    onSubmit={async (e) => {
                                        e.preventDefault()
                                        await handleFindRegistrationId()
                                    }}
                                >
                                    <Input
                                        type="email"
                                        placeholder="Your registered email"
                                        value={lookupEmail}
                                        onChange={(e) => setLookupEmail(e.target.value)}
                                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10"
                                    />
                                    <Input
                                        type="url"
                                        placeholder="Your registered GitHub URL"
                                        value={lookupGithub}
                                        onChange={(e) => setLookupGithub(e.target.value)}
                                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10"
                                    />
                                    <Button
                                        type="submit"
                                        disabled={lookupLoading}
                                        className="w-full bg-white/90 hover:bg-white text-black font-semibold rounded h-10 disabled:opacity-50"
                                    >
                                        {lookupLoading ? "Looking up your ID..." : "Find my registration ID"}
                                    </Button>
                                </form>
                                {lookupResult && (
                                    <p className="text-xs text-gray-300 text-center">
                                        Your registration ID:{" "}
                                        <span className="font-mono font-semibold text-white">
                                            {lookupResult}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>

                        <p className="text-center text-gray-400 text-xs mt-6">Join our community of creators and innovators</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
