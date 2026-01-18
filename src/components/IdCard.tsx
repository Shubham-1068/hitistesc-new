"use client"

import { useState, useRef } from "react"
import { useToast } from "@/components/ui/use-toast"

interface IdCardProps {
  registrationId: string
  fullName: string
  email: string
  collegeName?: string
  experienceLevel: string
  githubUrl?: string
}

export default function IdCard({
  registrationId = "GYKUHN0EY",
  fullName = "Shubham",
  githubUrl = "test",
}: Partial<IdCardProps>) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)

  const downloadIdCard = async () => {
    if (!cardRef.current || isGenerating) return

    setIsGenerating(true)

    try {
      const { default: html2canvas } = await import("html2canvas")

      // Add generous padding to capture area to include shadows and absolutely positioned elements
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#000000",
        logging: false,
        windowWidth: cardRef.current.scrollWidth,
        windowHeight: cardRef.current.scrollHeight,
        scrollY: -window.scrollY,
        scrollX: -window.scrollX,
        y: -50,
        height: cardRef.current.offsetHeight + 100,
      })

      const image = canvas.toDataURL("image/png")

      const link = document.createElement('a')
      link.download = `ISTE-OS101-${fullName.replace(/\s+/g, '_')}-${registrationId}.png`
      link.href = image

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: "Success!",
        description: "ID Card downloaded successfully",
      })
    } catch (error) {
      console.error("Download failed:", error)
      toast({
        title: "Error",
        description: "Failed to download ID Card. Try using print to PDF instead.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }
  return (
    <div className="flex">
      <div className="mt-8 h-full w-full flex flex-col items-center justify-center gap-6 overflow-auto rounded-lg absolute -z-50">
        <div className="relative h-[520px] w-[300px] overflow-auto">
          <div
            ref={cardRef}
            className="relative h-[530px] w-[320px] overflow-auto bg-transparent"
            style={{
              backgroundImage: "url('/IDCard.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-[110px] left-[20px]">
              <span className="text-xl font-extrabold text-black italic h-10 w-40 flex items-center justify-start">{fullName}</span>
            </div>
            <div className="absolute bottom-[17px] left-[110px]">
              <span className="text-sm font-semibold text-black italic h-10 w-28 flex items-center justify-start">{githubUrl.replace("https://github.com/", "")}</span>
            </div>
            <div className="absolute -left-[81px] top-1/2 -rotate-90">
              <span className="text-xs font-extrabold text-slate-700">#{registrationId}</span>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-8 h-full w-full flex flex-col items-center justify-center gap-6 overflow-auto rounded-lg">
        <div className="relative h-[520px] w-[300px] overflow-auto">
          <div
            className="relative h-[530px] w-[320px] overflow-auto bg-transparent"
            style={{
              backgroundImage: "url('/IDCard.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute bottom-[100px] left-[20px]">
              <span className="text-xl font-extrabold text-black italic h-10 w-40 flex items-center justify-start">{fullName}</span>
            </div>
            <div className="absolute bottom-[10px] left-[110px]">
              <span className="text-sm font-semibold text-black italic h-10 w-28 flex items-center justify-start">{githubUrl.replace("https://github.com/", "")}</span>
            </div>
            <div className="absolute -left-[70px] top-1/2 -rotate-90">
              <span className="text-xs font-extrabold text-slate-700">#{registrationId}</span>
            </div>
          </div>
          <button
            onClick={downloadIdCard}
            disabled={isGenerating}
            className="absolute top-2 right-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
          >
            {isGenerating ? "Generating..." : "Download ID Card"}
          </button>
        </div>
      </div>
    </div>
  )
}