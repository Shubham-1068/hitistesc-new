'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import IdCard from '@/components/IdCard';
import Decorations from '@/components/ui/home/Decorations';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface RegistrationRecord {
  registrationId: string;
  fullName: string;
  email: string;
  collegeName?: string;
  githubUrl?: string;
}

export default function RegistrationSummaryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const registrationId = searchParams.get('registrationId');

  const [registration, setRegistration] = useState<RegistrationRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistration = async () => {
      if (!registrationId) {
        setError('Missing registration ID. Please register again.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get<{ success: boolean; data: any }>('/api/register', {
          params: { registrationId },
        });

        const data = response.data.data;

        setRegistration({
          registrationId: data.registrationId,
          fullName: data.fullName,
          email: data.email,
          collegeName: data.collegeName,
          githubUrl: data.githubUrl,
        });
      } catch (e: any) {
        setError(
          e.response?.data?.error ||
          'Unable to load your registration details. Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegistration();
  }, [registrationId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-4">
        <div className="text-center text-gray-300">Loading your registration details...</div>
      </div>
    );
  }

  if (error || !registration) {
    return (
      <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/40 to-black/40 backdrop-blur-xl border border-red-500/30 rounded-3xl shadow-2xl p-8 md:p-12 max-w-xl w-full text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Something went wrong</h2>
          <p className="text-sm md:text-base text-gray-300">{error}</p>
          <button
            onClick={() => router.push('/opensource101')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            Go back to registration page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center p-4">
      <Decorations />
      <div className="mt-24 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-gradient-to-br from-slate-900/40 via-slate-800/40 to-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse" />
                <div className="relative bg-white/10 rounded-full p-6">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Welcome Aboard!</h2>
            <p className="text-md md:text-lg text-gray-300">
              You are now part of the Open Source 101 initiative by ISTE HIT-SC
            </p>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 mb-10 backdrop-blur">
            <p className="text-sm text-gray-400 mb-2">Your Registration ID</p>
            <p className="text-3xl md:text-4xl font-mono font-bold text-white break-all">
              {registration.registrationId}
            </p>
          </div>

          <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 mb-10 backdrop-blur">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Your Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start pb-3 border-b border-white/10">
                <span className="text-sm text-gray-400">Name</span>
                <span className="text-sm font-semibold text-white text-right">
                  {registration.fullName}
                </span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-white/10">
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-sm font-semibold text-white text-right break-all">
                  {registration.email}
                </span>
              </div>
              {registration.collegeName && (
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">College</span>
                  <span className="text-sm font-semibold text-white text-right">
                    {registration.collegeName}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="cursor-pointer">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="text-xl">🚀</span>
                Next Steps
              </h3>

              <div className="space-y-4">
                <a
                  href="https://chat.whatsapp.com/COcY1cBocEzJxRJUo2JObp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.846.954-1.035 1.154-.193.199-.373.232-.67.07-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.55 2.257-5.597 6.637-5.597 11.048 0 1.554.159 3.1.47 4.818l.03.19-.199.12c-1.582.947-2.844 2.717-2.844 4.678 0 2.963 2.435 5.399 5.399 5.399.505 0 .99-.074 1.457-.216l.11-.034c1.563.499 3.213.773 4.996.773 5.411 0 9.859-2.946 11.955-8.835.815-2.265 1.286-4.923 1.286-7.722 0-5.411-2.946-9.859-8.835-11.955-2.265-.815-4.923-1.286-7.722-1.286" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm cursor-pointer">
                      Join WhatsApp Group
                    </p>
                    <p className="text-xs text-gray-400">(Mandatory to join)</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/iste.hit.sc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                    <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.453 3.276 3.276 3.276 1.821 0 3.276-1.453 3.276-3.276 0-1.821-1.453-3.276-3.276-3.276-1.822 0-3.276 1.453-3.276 3.276zm9.751-6.637c0 .791.645 1.436 1.436 1.436.791 0 1.436-.645 1.436-1.436-.001-.791-.645-1.436-1.436-1.436-.791 0-1.436.645-1.436 1.436z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm cursor-pointer">Follow on Instagram</p>
                    <p className="text-xs text-gray-400">@iste.hit.sc</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/iste-hit-sc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.807 0-9.728h3.554v1.375c.428-.659 1.191-1.595 2.897-1.595 2.117 0 3.706 1.385 3.706 4.363l.001 5.585zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.766-1.703 1.96-1.703 1.189 0 1.912.752 1.927 1.703 0 .946-.738 1.704-1.972 1.704zm1.582 11.597H3.635V9.724h3.284v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-sm cursor-pointer">Connect on LinkedIn</p>
                    <p className="text-xs text-gray-400">ISTE HIT SC</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center mb-10">
              <Link href="/opensource101/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 cursor-pointer">
                    Explore Projects
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </div>

            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Your ID Card
            </h3>
            <IdCard
              registrationId={registration.registrationId}
              fullName={registration.fullName}
              githubUrl={registration.githubUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
