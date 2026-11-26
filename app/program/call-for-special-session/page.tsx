import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function CallForSpecialSessionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-slate-900 dark:text-white">
            Special Sessions
          </h1>

          {/* Call banner */}
          <div className="mb-12 flex flex-col gap-1 rounded-lg border border-amber-400/40 bg-amber-400/10 p-5">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-amber-500" />
              </span>
              <span className="text-lg font-bold text-amber-700 dark:text-amber-400">Call for Special Session Proposals is open!</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Last date for proposal submission: <strong>30 September 2026</strong>. Send proposals to{" "}
              <a href="mailto:spert2027@gmail.com" className="font-semibold text-emerald-700 underline dark:text-emerald-400">spert2027@gmail.com</a>.
            </p>
          </div>

          {/* Approved Special Sessions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Approved Special Sessions</h2>
            <div className="space-y-8">
              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS1: Emerging Technologies in Clean Energy Vehicles and Sustainable Mobility</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Himanshu Sharma, Associate Professor, Vivekananda Institute of Professional Studies<br />
                  2. Dr. Krishan Arora, Associate Professor, Lovely Professional University, Punjab<br />
                  3. Dr. Akhil Gupta, Associate Professor, Symbiosis Institute of Technology, Nagpur
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS2: Advanced Power Electronic Converters and AI for Renewable-Integrated Smart Grids</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Ravi Eswar K M, Assistant Professor, Department of Electrical and Electronics Engineering, SRM Institute of Science and Technology-Kattankulathur<br />
                  2. Dr. Konduru Sudharshan, Assistant Professor, Electrical Engineering Department, Parul University, Vadodara<br />
                  3. Dr. Ramanjaneya Reddy, Associate Professor, Department of Electrical and Electronics Engineering, SRM University-AP
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS3: Intelligent Monitoring, Diagnostics, and Protection of Power Assets in Renewable-Integrated Microgrids</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Debayan Sarkar, Assistant Professor, EED, NIT Silchar<br />
                  2. Dr. Biswajit Sahoo, Assistant Professor, EED, NIT Silchar<br />
                  3. Dr. Rajasi Mandal, Assistant Professor, EEE, SSN College of Engineering, Chennai<br />
                  4. Dr. Subhendu Sekhar Sahoo, Associate Professor, VIT Chennai
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS4: Advanced Power Electronic Converters and Intelligent Energy Management for Sustainable Electric Mobility</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. M. Jagabar Sathik, Associate Research Professor, Department of Electrical Engineering, Prince Mohammad Bin Fahd University (PMU)<br />
                  2. Dr. Prabhakaran K, Department of Electrical Engineering, Maulana Azad National Institute of Technology (MANIT), Bhopal<br />
                  3. Dr. B. Venkatesa Perumal, Professor, Department of Electrical and Electronics Engineering, NIT Surathkal<br />
                  4. Dr. Samir El-Nakla, Chair, Department of Electrical Engineering, Prince Mohammad Bin Fahd University
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS5: Quantum Computing Applications in Power Systems</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Jigneshkumar P. Desai, Associate Professor, Department of Robotics and Automation Engineering, Parul University<br />
                  2. Dr. Prakruti Shah, Head, Department of Electrical & Electronics Engineering, Navrachana University, Vadodara
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS6: Cyber-Physical Systems for Intelligent Power Electronics, Electric Vehicle Charging, and Smart Energy Systems</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Praveen Kumar Bonthagorla, Assistant Professor, School of Electrical Engineering, Manipal Institute of Technology<br />
                  2. Dr. A. S. Veerendra, Associate Professor, Electrical and Electronics Engineering Department, Manipal Institute of Technology<br />
                  3. Dr. Suresh Mikkili, Associate Professor, Electrical and Electronics Engineering, National Institute of Technology Goa
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS7: Multilevel Inverters: Advanced Topologies, Modulation Strategies for Medium and High-Power Applications</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Yellasari Suresh, NIT Surathkal<br />
                  2. Dr. Ravi Raushan, NIT Surathkal<br />
                  3. Dr. C. Dhanamjayalu, VIT Vellore, Tamil Nadu
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS8: Advances in Smart Grids for Sustainable Energy Systems and Electric Mobility</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. V. B. Murali Krishna, NIT Andhra Pradesh<br />
                  2. Dr. P. Rama Krishna, Dr B R Ambedkar NIT Jalandhar
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS9: Physics-Informed and Generative AI for Integrated Renewable Energy and Electric Mobility: From Solar Forecasting to Battery Intelligence</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Madderla Chiranjeevi, Assistant Professor, Computer Science and Engineering, RV University, Bengaluru<br />
                  2. Dr. Priya Nandihal, Associate Professor, Computer Science and Engineering, RV University, Bengaluru<br />
                  3. Dr. Shyam Mohan J S, Associate Professor, Computer Science and Engineering, RV University, Bengaluru
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS10: Advanced Control, Reliability and Optimization of Power Electronic Systems</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. V. Venkata Ramana, Delhi Technological University, Delhi<br />
                  2. Dr. Vivekanandan, EED, NIT Silchar
                </p>
              </div>

              <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">SS11: AI, IoT, and Digital Twins for Sustainable Energy and Electric Mobility</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Organizers:</strong><br />
                  1. Dr. Pankaj Bhambri, Associate Professor, Department of Information Technology, Guru Nanak Dev Engineering College, Ludhiana
                </p>
              </div>
            </div>
          </div>

          {/* Download Template Button */}
          <div className="mb-12">
            <Button asChild>
              <Link
                href="/templates/SPERT 2027 - Special Session Proposal Template.docx"
                download
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                SPERT 2027 - Special Session Proposal Template
              </Link>
            </Button>
          </div>

          {/* Proposal Content Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Dates: 7 to 9 June 2027 | Venue: Sardar Vallabhbhai National Institute of Technology, Surat</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>We are pleased to invite proposals for Special Sessions to be included in IEEE International Conference Smart Power, Energy, Renewables, and Transportation (IEEE-SPERT) 2027, Sardar Vallabhbhai National Institute of Technology, Surat. The conference is organized by the Department of Electrical Engineering, and it aims to bring together leading researchers, academics, industry professionals, and practitioners from around the globe to share their latest research findings, innovations, and developments in the field of advanced energy systems, renewable energy sources, and sustainable transportation solutions.</li>
              <li>Topics include smart grid technologies, energy storage, IoT applications in power systems, and the role of artificial intelligence in optimizing energy distribution. The conference also covers renewable energy advancements in solar, wind, and biofuels, alongside the evolution of electric and hybrid vehicles. It highlights sustainable mobility, smart transportation systems, and the environmental impacts of energy technologies.</li>
              <li>Special Sessions are an integral part of our conference program, offering the opportunity to focus on emerging, specialized, or interdisciplinary topics that may not be fully represented in the main conference tracks. They serve as a platform for experts to delve deeper into niche areas of interest, facilitate focused discussions, and promote future collaborations.</li>
            </ul>
          </div>

          {/*  Benefits of Organizing a Special Session: */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">✅ Benefits of Organizing a Special Session:</h2>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Recognition as a Special Session Chair</li>
              <li>Opportunity to shape the technical content in your area of expertise</li>
              <li>Networking opportunities with key researchers and professionals</li>
              <li>Contribution to building a community around emerging research themes</li>
              <li>One free registration per 8 accepted and registred papers, exculding the papers authored by the special session chairs in their respective special session</li>
              <li><strong>Please Note:</strong> No TA/DA or accomodation is provided for special session organizers. They have to register and attend as the regular attendees only, but the registration fees can be waived off based on the criteria mentioned above. </li>
            </ul>
          </div>

          {/* Topics of Interest for Special Sessions */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <span className="font-bold text-slate-900 dark:text-white">🧩 Topics of Interest for Special Sessions</span>
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>We welcome proposals across all areas covered by the conference, including but not limited to the regular tracks mentioned in the conference website.If your area is novel or evolving, we especially encourage you to submit a proposal that will broaden the conference's scope and appeal.</li>
            </ul>
          </div>

          {/* Proposal Submission Guidelines */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">📄 Proposal Submission Guideline </span>
              Special Session proposals should include the following information:
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Title of the Special Session:</li>
              <li>Names, affiliations, and contact details of the organizers:</li>
              <li>Short biography of each organizer (100–150 words):</li>
              <li>Session abstract (300–500 words): Explain the significance of the topic, why it fits within the scope of the conference, and what makes it timely and relevant.</li>
              <li>List of potential contributors or invited speakers (if already identified):</li>
              <li>Tentative number of papers/speakers expected: Minimum of 08 papers should be eligible for publish and at least one speaker is expected. </li>
            </ul>
          </div>

          {/* Important Dates: */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">⏳ Important Dates: </span>
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Deadline for Special Session Proposals: 30 September 2026</li>
              <li>Deadline for Special Session Paper Submissions: 15 December 2026</li>
              <li>Notification of Acceptance: 15 February 2027</li>
              <li>Conference Dates: 7 to 9 June 2027</li>
            </ul>
          </div>

          {/* Submission Procedure: */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">📬 Submission Procedure: </span>         
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>Please submit your Special Session proposal in PDF or Word format via email to:</li>
              <li>spert2027@gmail.com</li>
              <li>with the subject line: "Special Session Proposal – [Your Proposed Session Title]"</li>
            </ul>
          </div>

          {/* Review and Selection Process: */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <span className="font-bold text-slate-900 dark:text-white">📌 Review and Selection Process: </span>
            </p>
            <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 space-y-2">
              <li>All proposals will be evaluated by the conference's Special Sessions Committee based on their relevance, novelty, the profile of the organizers, and alignment with the overall goals of the conference.</li>
              <li>Once accepted, special sessions will be listed on the official conference website, and a dedicated submission track will be created.</li>
              <li>Papers submitted to Special Sessions will undergo the same rigorous peer-review process as regular submissions and will be published in the conference proceedings, subject to the acceptance and registration of the authors.</li>
            </ul>
          </div>

          {/* Paper Format Section */}
          <div className="mb-12">
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">Format for Paper Submission: </span>
              Maximum 6 pages and should follow the IEEE conference template. <Link href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline dark:text-emerald-400">View IEEE templates here</Link>.
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}

