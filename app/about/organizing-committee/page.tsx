import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

type Member = { name: string; role: string }

function Section({ title, members }: { title: string; members: Member[] }) {
  return (
    <div className="rounded-xl border border-slate-900/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <ul className="space-y-4">
        {members.map((member, index) => (
          <li key={index}>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const chiefPatron: Member[] = [{ name: "Prof. Bhim Singh", role: "IEEE Fellow, Chairman, BoG, SVNIT, Surat" }]

const patron: Member[] = [{ name: "Prof. Anupam Shukla", role: "Director, SVNIT, Surat" }]

const honoraryChairs: Member[] = [
  { name: "Dr. Brij N. Singh", role: "IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA" },
  { name: "Prof. Sanjib Kumar Panda", role: "Department of Electrical Engineering, NUS" },
  { name: "Prof. Victor Veliadis", role: "IEEE Fellow, CTO of PowerAmerica and Professor at NC State University" },
  { name: "Dr. Sanjeet Kumar Dwivedi", role: "Fellow IET, Senior Consultant, RDT Engineers, Denmark" },
]

const generalChairs: Member[] = [
  { name: "Prof. Chirag N. Paunwala", role: "Chair - IEEE Gujarat Section" },
  { name: "Prof. Mahmadasraf A. Mulla", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Aeidapu Mahesh", role: "DoEE, SVNIT, Surat" },
]

const organizingChairs: Member[] = [
  { name: "Prof. Sabha Raj Arya", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Amit Kumar", role: "University of Cagliari, Italy" },
  { name: "Dr. Sushnigdha Gangireddy", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Akanksha Shukla", role: "DoEE, SVNIT, Surat" },
]

const organizingSecretary: Member[] = [
  { name: "Dr. Suresh Lakhimsetty", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Jammala Venkataramaniah", role: "DoEE, SVNIT, Surat" },
]

const financeChairs: Member[] = [
  { name: "Dr. Manisha Shah", role: "Nirma University, Ahmedabad" },
  { name: "Dr. Suresh Lakhimsetty", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Basant Kumar Sethi", role: "DoEE, SVNIT, Surat" },
  { name: "Prof. Mahmadasraf A. Mulla", role: "DoEE, SVNIT, Surat" },
]

const technicalProgramCommitteeChairs: Member[] = [
  { name: "Dr. Amit Ved", role: "Marwadi University, Rajkot" },
  { name: "Dr. Srinivas Bhaskar Karanki", role: "IEEE PELS Vice-Chair India-Pacific, IIT Bhubhaneshwar" },
  { name: "Dr. Tripura Pidikiti", role: "IEEE IES Hyderabad Hub Leader, RVR JC College of Engineering, Guntur" },
  { name: "Prof. Ehsan Jamshidpour", role: "Groupe de Recherche en Énergie Électrique de Nancy (GREEN), University of Lorraine, France" },
  { name: "Prof. Roland Ryndzionek", role: "Gdańsk University of Technology, Poland" },
  { name: "Prof. Marcus Morawiec", role: "Gdańsk University of Technology, Poland" },
  { name: "Prof. Sussana Mocci", role: "University of Cagliari, Italy" },
  { name: "Prof. Anandita Chowdhury", role: "DoEE, SVNIT, Surat" },
  { name: "Prof. R. Chudamani", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Brij N. Singh", role: "IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA" },
  { name: "Prof. Victor Veliadis", role: "IEEE Fellow, CTO of PowerAmerica and Professor at NC State University" },
]

const publicationChairs: Member[] = [
  { name: "Prof. Ashish K. Panchal", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. H. G. Patel", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Akanksha Shukla", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Chandani P. Gor", role: "DoEE, SVNIT, Surat" },
]

const publicityChairs: Member[] = [
  { name: "Prof. Pranav B. Darji", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Sushnigdha Gangireddy", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Tejavathu Ramesh", role: "NIT Andhra Pradesh" },
]

const specialSessionChairs: Member[] = [
  { name: "Prof. Rakesh Maurya", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. V. Mahajan", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Jammala Venkataramanaiah", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Giribabu Dyanamina", role: "MANIT Bhopal" },
]

const tutorialAndWorkshopChairs: Member[] = [
  { name: "Dr. Prasanta Kundu", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. K. D. Mistry", role: "DoEE, SVNIT, Surat" },
  { name: "Prof. Mahmadasraf A. Mulla", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Sanjay Tolani", role: "DoEE, SVNIT, Surat" },
]

const instituteAdvisoryCommitteeChairs: Member[] = [
  { name: "Prof. S. N. Sharma", role: "DoEE, SVNIT, Surat" },
  { name: "Prof. Varsha A. Shah", role: "DoEE, SVNIT, Surat" },
  { name: "Prof. H. R. Jariwala", role: "DoEE, SVNIT, Surat" },
  { name: "Dr. Rajasekharareddy Chilipi", role: "DoEE, SVNIT, Surat" },
]

const nationalAdvisoryCommitteeMembers: Member[] = [
  { name: "Prof. Bhim Singh", role: "IIT Delhi" },
  { name: "Prof. K. Siva Kumar", role: "IIT Hyderabad" },
  { name: "Prof. Raghavan K", role: "IIT Gandhinagar" },
  { name: "Dr. Deepak Ronanki", role: "IIT Madras" },
  { name: "Prof. Pramod Agarwal", role: "IIT Roorkee" },
  { name: "Prof. B. Murali Mohan", role: "IIT Kharagpur" },
  { name: "Prof. Narsa Reddy Tummuru", role: "IIT Bhubaneshwar" },
  { name: "Prof. Bharat Singh Rajpurohit", role: "IIT Jodhpur" },
  { name: "Prof. Pradhyuman Chaturvedi", role: "VNIT Nagpur" },
  { name: "Prof. Ashwani Kumar", role: "NIT Kurukshetra" },
  { name: "Prof. V. T. Somasekhar", role: "DoEE, NIT Warangal" },
  { name: "Dr. Naveen Yalla", role: "IIT BHU" },
  { name: "Prof. R. B. Jadeja", role: "Marwadi University" },
  { name: "Dr. Gopal Gajjar", role: "Hitachi Energy" },
  { name: "Dr. Vijay K. Shah", role: "ABB, Vadodara" },
]

const internationalAdvisoryCommitteeMembers: Member[] = [
  { name: "Dr. Brij N. Singh", role: "IEEE Fellow, John Deere Fellow, Electrification R&D Manager in John Deere USA" },
  { name: "Prof. Victor Veliadis", role: "IEEE Fellow, CTO of PowerAmerica and Professor at NC State University" },
  { name: "Prof. Akshay Rathore", role: "National University of Singapore" },
  { name: "Prof. Sanjib Kumar Panda", role: "Department of Electrical Engineering, NUS" },
  { name: "Jiaxing Lei", role: "School of Electrical Engineering, Southeast University, China" },
  { name: "Prof. Akhtar Kalam", role: "Victoria University, Melbourne, Victoria 8001 Australia" },
  { name: "Dr. Anurag Sharma", role: "Newcastle University, Singapore" },
  { name: "Dr. Dhivya Sampath Kumar", role: "Singapore Institute of Technology, Singapore" },
  { name: "Yam P. Siwakoti", role: "Associate Professor at the University of Technology Sydney Macquarie Park, New South Wales, Australia" },
]

export default function OrganizingCommitteePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              Organizing Committee
            </h1>

            <div className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <Section title="Chief Patron" members={chiefPatron} />
                <Section title="Patron" members={patron} />
              </div>

              <Section title="Honorary Chairs" members={honoraryChairs} />
              <Section title="General Chairs" members={generalChairs} />
              <Section title="Organizing Chairs" members={organizingChairs} />
              <Section title="Organizing Secretary" members={organizingSecretary} />
              <Section title="Finance Chairs" members={financeChairs} />
              <Section title="Technical Program Committee Chairs" members={technicalProgramCommitteeChairs} />
              <Section title="Publication Chairs" members={publicationChairs} />
              <Section title="Publicity Chairs" members={publicityChairs} />
              <Section title="Special Session Chairs" members={specialSessionChairs} />
              <Section title="Tutorial and Workshop Chairs" members={tutorialAndWorkshopChairs} />
              <Section title="Institute Advisory Committee Chairs" members={instituteAdvisoryCommitteeChairs} />

              <div className="grid gap-8 md:grid-cols-2">
                <Section title="National Advisory Committee Members" members={nationalAdvisoryCommitteeMembers} />
                <Section title="International Advisory Committee Members" members={internationalAdvisoryCommitteeMembers} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
