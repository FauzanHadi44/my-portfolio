"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { FileDown, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const pdfPath = "/Curriculum%20Vitae%20-%20Fauzan%20Hadi.pdf";
  const pdfDownloadName = "Curriculum Vitae - Fauzan Hadi.pdf";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#F8F9FA',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
      }}
    >
      <Navbar />

      <div className="pt-28 pb-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b8b8b] mb-1">Resume</p>
            <h1 className="font-audiowide text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">
              Curriculum Vitae
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/15 text-[#6b6b6b] hover:text-[#1a1a1a] hover:border-black/30 font-mono text-xs uppercase tracking-[0.15em] px-4 py-2.5 rounded-full transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Tab
            </Link>
            <a
              href={pdfPath}
              download={pdfDownloadName}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-mono text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pb-12">
        <div
          className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-black/5 bg-white"
          style={{ minHeight: "80vh" }}
        >
          <iframe
            src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full"
            style={{ minHeight: "80vh", height: "80vh", border: "none" }}
            title="Fauzan Hadi - Resume"
          />
        </div>

        <div className="mt-6 text-center md:hidden">
          <p className="text-[#8b8b8b] font-mono text-xs mb-3">
            PDF tidak tampil? Download langsung di bawah.
          </p>
          <a
            href={pdfPath}
            download={pdfDownloadName}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-mono text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#333] transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
