import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

const spert2025Photos = [
  "ARTM0010",
  "ARTM0079",
  "ARTM0145",
  "ARTM0307",
  "ARTM0655",
  "ARTM0937",
  "ARTM1174",
  "ARTM1616",
]

function VisionMission({ vision, mission }: { vision: string; mission: string }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-emerald-600/20 bg-emerald-600/5 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Vision
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{vision}</p>
      </div>
      <div className="rounded-lg border border-emerald-600/20 bg-emerald-600/5 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Mission
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{mission}</p>
      </div>
    </div>
  )
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              About Us
            </h1>

            <div className="space-y-8">
              {/* About SVNIT */}
              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
                    alt="SVNIT Logo"
                    width={64}
                    height={64}
                    className="h-16 w-16 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    About SVNIT
                  </h2>
                </div>

                <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
                  <p>
                    Sardar Vallabhbhai National Institute of Technology, Ichchhanath, Surat &ndash;
                    395007, Gujarat, India. The Institute was established as Sardar Vallabhbhai
                    Regional College of Engineering &amp; Technology (SVRCET) Surat in 1961 as one of
                    the Regional Engineering Colleges (RECs) to impart technical education, beginning
                    with Bachelor Degree Programmes in Civil, Electrical and Mechanical Engineering.
                    The Government of India declared SVRCET Surat to be Sardar Vallabhbhai National
                    Institute of Technology (SVNIT) Surat with the status of &lsquo;Deemed
                    University&rsquo; with effect from 4th December, 2002. With the enactment of the
                    National Institutes of Technology Act-2007, the Institute has been granted the
                    status of &lsquo;Institution of National Importance&rsquo; w.e.f. August 15, 2007.
                  </p>
                  <p>
                    The Institute now offers eleven (11) B.Tech. Degree Programmes, twenty-one (21)
                    M.Tech. Degree Programmes, three (03) Five Years Integrated M.Sc. Degree
                    Programmes in Chemistry, Mathematics &amp; Physics, one (01) Five Years Integrated
                    B.Tech and M.Tech Degree Programme, and a Master of Business Administration in
                    Business Analytics. The Institute offers Doctoral Degree Programmes in
                    Engineering, Science, Management and English, and M.Tech (R) in all engineering
                    disciplines.
                  </p>
                  <p>
                    The Institute has been recognized by the Government of India as one of the
                    centres for the Quality Improvement Programme for M.Tech. and Ph.D., and has also
                    established the Centre of Indian Knowledge System and the Centre for Tribal
                    Technology Development.
                  </p>
                </div>

                <VisionMission
                  vision="To be one of the leading Technical Institutes disseminating globally acceptable education, effective industrial training and relevant research output."
                  mission="To be a globally accepted Centre of Excellence in technical education catalyzing absorption, innovation, diffusion and transfer of high technologies resulting in enhanced quality for all the stakeholders."
                />
              </div>

              {/* About DoEE */}
              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Department of Electrical Engineering
                </h2>
                <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
                  <p>
                    The Department of Electrical Engineering (DoEE) is one of the oldest departments
                    at SVNIT, established in 1961. The department offers B.Tech. in Electrical
                    Engineering and a B.Tech. Minor in Electrical Engineering for students from other
                    disciplines, along with M.Tech. programmes in Power Electronics and Electric
                    Drives, Power Systems, and Control and Automation. The department also
                    offers a Ph.D. programme in power electronics and electrical drives, power
                    systems, renewable energy, control systems, electric vehicles, and other areas of
                    electrical engineering, and provides consultancy and electrical testing services
                    to industry, government, and semi-government organizations.
                  </p>
                </div>

                <VisionMission
                  vision="To be the leading department disseminating globally acceptable education, effective industrial consultancy and relevant research output."
                  mission="To be a global centre of excellence in technical education and innovation producing competent professionals with integrity."
                />
              </div>

              {/* IEEE-SPERT 2025 */}
              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  IEEE-SPERT 2025 &mdash; Our First Edition
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  IEEE-SPERT was launched in 2025, hosted by the Department of Electrical Engineering
                  at SVNIT Surat from 22&ndash;24 December 2025. The inaugural edition brought
                  together researchers, industry, and students from across the country to present
                  work spanning smart power systems, renewable energy, energy storage, and electric
                  transportation, and set the foundation for IEEE-SPERT 2027.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {spert2025Photos.map((name) => (
                    <div
                      key={name}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-slate-900/5 dark:ring-white/10"
                    >
                      <Image
                        src={`/images/spert-2025-thumbs/${name}.jpg`}
                        alt="IEEE-SPERT 2025"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
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
