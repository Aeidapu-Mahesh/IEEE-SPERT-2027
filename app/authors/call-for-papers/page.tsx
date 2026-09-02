import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { importantDates } from "@/lib/important-dates"
import { tracks } from "@/lib/tracks"

export default function CallForPapersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              Call for Papers
            </h1>

            {/* Important Dates */}
            <div className="rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Important Dates</h2>
              <ul className="grid gap-3 text-slate-700 sm:grid-cols-2 lg:grid-cols-5 dark:text-slate-200">
                {importantDates.map(({ label, date }) => (
                  <li key={label} className="rounded-lg bg-white p-3 dark:bg-slate-900">
                    <span className="block text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Tracks */}
            <div className="mt-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Technical Tracks</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {tracks.map(({ code, title, subtopics }) => (
                  <div
                    key={code}
                    className="rounded-xl border border-slate-900/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                      {code}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {subtopics.map((subtopic) => (
                        <li key={subtopic}>{subtopic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Authors Guidelines</h2>
                  <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                    <li>
                      Authors are requested to submit their full original research paper in{" "}
                      <a
                        href="https://www.ieee.org/conferences/publishing/templates.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 underline dark:text-emerald-400"
                      >
                        IEEE format
                      </a>
                      .
                    </li>
                    <li>Regular and Special session papers are limited to six pages of A4 or letter format.</li>
                    <li>Authors must adhere to the IEEE Conference paper format mentioned in the submission guidelines.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Special Sessions</h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    The conference will include special sessions on highly specialized topic areas, reporting
                    technical trends and breakthroughs within the scope of the conference. Special Sessions are
                    organized at the initiative of one or more individuals, who must adhere to specific procedures
                    published{" "}
                    <Link href="/program/call-for-special-session" className="text-emerald-700 underline dark:text-emerald-400">
                      here
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Student & Young Professional Activities
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    The S&YP Activities enables engineering students and young professionals to present their R&D
                    work in Industrial Electronics, and to help them develop networking connections. IES S&YP can
                    take part in a competition for the IES-S&YP Paper Assistance during submission process. For more
                    details, please visit IES electronics channels.
                  </p>
                </div>

                <div>
                  <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Paper Submission Link</h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    The Microsoft CMT submission portal for IEEE-SPERT 2027 will be announced closer to the
                    submission window.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
