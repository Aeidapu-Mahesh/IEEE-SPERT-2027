import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Button } from "@/components/ui/button"
import { FileText, FormInput } from "lucide-react"

export default function SponsorshipsPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 text-center text-white">
            Sponsorship Opportunities
          </h1>
          <p className="text-center text-gray-300 mb-2">7–9 June 2027 | SVNIT, Surat, Gujarat, India</p>
          <p className="text-center text-gray-400 text-sm mb-12">
            Organized by the Department of Electrical Engineering, SVNIT Surat, in association with the University of Cagliari, Italy
          </p>

          {/* Sponsorship Categories */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-4">
            {[
              {
                title: "Diamond",
                amount: "₹5 Lakhs",
                benefits: [
                  "5 Complimentary Registrations",
                  "Exhibition Space: 4 m × 3 m",
                  "Logo on Website, Banners & Programme Booklet",
                  "Recognition at Inaugural Ceremony",
                  "Advertisement in Conference Kit / Bag",
                  "Dedicated Industry Technology Session"
                ]
              },
              {
                title: "Platinum",
                amount: "₹3 Lakhs",
                benefits: [
                  "3 Complimentary Registrations",
                  "Exhibition Space: 4 m × 2 m",
                  "Logo on Website, Banners & Programme Booklet",
                  "Recognition at Inaugural Ceremony",
                  "Advertisement in Conference Kit / Bag"
                ]
              },
              {
                title: "Gold",
                amount: "₹2 Lakhs",
                benefits: [
                  "2 Complimentary Registrations",
                  "Exhibition Space: 3 m × 2 m",
                  "Logo on Website, Banners & Programme Booklet",
                  "Recognition at Inaugural Ceremony"
                ]
              },
              {
                title: "Silver",
                amount: "₹1 Lakh",
                benefits: [
                  "1 Complimentary Registration",
                  "Exhibition Space: 2 m × 2 m",
                  "Logo on Website, Banners & Programme Booklet",
                  "Recognition at Inaugural Ceremony"
                ]
              }
            ].map((tier, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{tier.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{tier.amount}</p>
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mb-16">
            All sponsorship amounts are in Indian Rupees (INR) and are exclusive of applicable GST.
          </p>

          {/* Call to Action Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in Becoming a Sponsor?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 max-w-2xl mx-auto">
              Join us in shaping the future of smart power, energy, renewables, and transportation.
              Your support will help foster innovation and collaboration in these critical sectors.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              For sponsorship enquiries: <a href="mailto:spert2027@gmail.com" className="text-primary underline">spert2027@gmail.com</a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="flex items-center gap-2"
              >
                <Link href="/templates/SPERT 2027 - Sponsorship Brochure.pdf" target="_blank">
                  <FileText className="w-5 h-5" />
                  Download Sponsorship Brochure
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link href="https://forms.gle/388gDTyLm746KNqQ8" target="_blank">
                  <FormInput className="w-5 h-5" />
                  Fill Sponsorship Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

