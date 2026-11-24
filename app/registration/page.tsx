import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

export default function RegistrationPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center text-slate-900 dark:text-white">
            Registration Details
          </h1>

          <Card className="mb-8">
            <CardContent className="p-6">
<section className="w-full py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-2 text-primary">Registration Fees</h2>
    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
      Conference dates: 7&ndash;9 June 2027 | SVNIT, Surat, Gujarat, India
    </p>
    <div className="overflow-auto rounded-lg shadow border dark:border-gray-700">
      <table className="min-w-full text-sm text-center text-gray-800 dark:text-gray-200">
        <thead className="bg-primary text-white">
          <tr>
            <th rowSpan={2} className="px-4 py-3 border">Category</th>
            <th colSpan={2} className="px-4 py-3 border">Early Bird<br /><span className="text-xs">(16 Feb &ndash; 15 Mar 2027)</span></th>
            <th colSpan={2} className="px-4 py-3 border">Standard<br /><span className="text-xs">(From 16 Mar 2027)</span></th>
          </tr>
          <tr className="bg-primary/90">
            <th className="px-4 py-2 border">IEEE Members</th>
            <th className="px-4 py-2 border">Non-IEEE Members</th>
            <th className="px-4 py-2 border">IEEE Members</th>
            <th className="px-4 py-2 border">Non-IEEE Members</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Indian Author - Academia/Industry (1 Paper)", "₹10,800", "₹13,500", "₹13,600", "₹17,000"],
            ["Indian Author - Academia/Industry (2 Papers)", "₹13,200", "₹16,500", "₹16,500", "₹20,600"],
            ["Attendee Indian", "₹8,000", "₹10,000", "₹11,200", "₹14,000"],
            ["Indian Student Author (1 Paper)", "₹7,600", "₹9,500", "₹10,000", "₹12,500"],
            ["Student Attendee - Indian", "₹4,800", "₹6,000", "₹6,400", "₹8,000"],
            ["Foreign Author - Academia/Industry (1 Paper)", "$320", "$400", "$400", "$500"],
            ["Foreign Author - Academia/Industry (2 Papers)", "$400", "$500", "$500", "$625"],
            ["Foreign Student Author (1 Paper)", "$180", "$225", "$200", "$250"],
          ].map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}>
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 border font-medium">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <ul className="mt-6 list-disc list-outside pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      <li>All registration fees are inclusive of 18% GST.</li>
      <li>5% additional discount to IES, PELS, and IAS Members.</li>
      <li>Payment gateway charges, currency conversion charges, and bank charges, if any, are additional.</li>
      <li>Registration includes the applicable conference participation benefits as specified by the Organizing Committee.</li>
    </ul>
  </div>
</section>

<div className="mt-10 bg-primary/10 p-6 rounded-lg border dark:border-gray-700">
  <h3 className="text-2xl font-bold mb-4 text-primary">Important instructions:</h3>
  <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 dark:text-gray-300">
    <li>For registration affiliation of the author would be the basis for Indian or Foreign author, the authors are requested to register accordingly. Any amount paid in other than actual category will not be refunded.</li>
    <li>At least one Author must register in any applicable category before the deadline and present the paper during the conference for the paper to be included in IEEE Xplore.</li>
    <li>Maximum page limit is six (6).</li>
    <li>Registration fees are non-refundable.</li>
  </ul>

  <h3 className="text-2xl font-bold mt-8 mb-4 text-primary">Inclusions</h3>
  <ul className="list-disc list-outside pl-6 space-y-2 text-gray-700 dark:text-gray-300">
    <li><strong>Full Registration:</strong> Includes access to keynotes, tutorials, all technical sessions, a registration kit, lunch on all three days, tea breaks, and a gala dinner.</li>
    <li><strong>Student Registration:</strong> Includes access to Keynotes, tutorials, all conference sessions, a registration kit, lunches for all three days, tea breaks, and a gala dinner. Students must upload a valid student ID card during registration. Confirmation will be granted only after verifying the ID proof.</li>
    <li><strong>Please Note:</strong> Registration kit is only provided per registration not per paper (one kit per registration (1 or 2 papers))</li>
  </ul>
</div>

            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  )
}

