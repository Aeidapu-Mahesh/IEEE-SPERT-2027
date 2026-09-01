"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VisitorCounter from "@/app/components/VisitorCounter"
import { importantDates } from "@/lib/important-dates"
import {
  ArrowRight,
  BatteryCharging,
  CalendarDays,
  Car,
  Cpu,
  FileText,
  Leaf,
  LineChart,
  MapPin,
  Network,
  PlugZap,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react"

const CONFERENCE_START = "2027-05-17T09:00:00"

const focusAreas = [
  {
    icon: Zap,
    title: "Grid-Integrated Power Converters",
    description: "Power converters for integration of renewable energy into the grid, its control and management.",
  },
  {
    icon: BatteryCharging,
    title: "Energy Management & Storage",
    description: "Energy management and storage technologies powering the grid of tomorrow.",
  },
  {
    icon: PlugZap,
    title: "EV Charging Infrastructure",
    description: "Charging systems and infrastructure for electrical transportation.",
  },
  {
    icon: Car,
    title: "EV Power Converters & Drives",
    description: "Power converters and drive systems for electric vehicles.",
  },
  {
    icon: Cpu,
    title: "Control & Automation",
    description: "Advances in control theory and automation for power and energy systems.",
  },
  {
    icon: Network,
    title: "Grid Resiliency & Flexibility",
    description: "Building resilient, flexible grids for a renewables-heavy future.",
  },
  {
    icon: ShieldCheck,
    title: "AI, Big Data & Cybersecurity",
    description: "AI, big data and cybersecurity for power, energy and transportation.",
  },
  {
    icon: LineChart,
    title: "Electricity Markets & Policy",
    description: "Electricity market design and the regulatory framework shaping it.",
  },
]

const whyAttend = [
  { icon: Leaf, title: "Sustainability-first research", description: "Peer-reviewed work at the intersection of clean energy and mobility." },
  { icon: Sun, title: "Renewables & smart grids", description: "Solar, wind, storage and the grids that tie them together." },
  { icon: Car, title: "Electric transportation", description: "EV drivetrains, charging infrastructure and fleet-scale rollout." },
  { icon: Cpu, title: "AI-driven automation", description: "Machine learning and data-driven control across the energy stack." },
]

const galleryImages = [
  "ARTM0010", "ARTM0013", "ARTM0019", "ARTM0079", "ARTM0082", "ARTM0086", "ARTM0145",
  "ARTM0195", "ARTM0204", "ARTM0208", "ARTM0243", "ARTM0299", "ARTM0307", "ARTM0491",
  "ARTM0556", "ARTM0655", "ARTM0746", "ARTM0781", "ARTM0937", "ARTM1042", "ARTM1094",
  "ARTM1116", "ARTM1174", "ARTM1216", "ARTM1284", "ARTM1369", "ARTM1388", "ARTM1616",
]
const GALLERY_COUNT = 10

function shuffledGallery() {
  const pool = [...galleryImages]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, GALLERY_COUNT)
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<{ label: string; value: number }[]>([])

  useEffect(() => {
    const tick = () => {
      const diff = +new Date(targetDate) - +new Date()
      if (diff <= 0) {
        setTimeLeft([])
        return
      }
      setTimeLeft([
        { label: "Days", value: Math.floor(diff / (1000 * 60 * 60 * 24)) },
        { label: "Hours", value: Math.floor((diff / (1000 * 60 * 60)) % 24) },
        { label: "Minutes", value: Math.floor((diff / 1000 / 60) % 60) },
        { label: "Seconds", value: Math.floor((diff / 1000) % 60) },
      ])
    }
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft.length) {
    return <p className="text-center text-lg font-medium text-white">The conference has started!</p>
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
      {timeLeft.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-4xl font-bold text-white sm:text-5xl">{String(unit.value).padStart(2, "0")}</span>
          <span className="mt-1 text-xs uppercase tracking-widest text-emerald-100">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  const [gallery, setGallery] = useState(galleryImages.slice(0, GALLERY_COUNT))

  useEffect(() => {
    setGallery(shuffledGallery())
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white dark:from-emerald-950 dark:via-slate-950 dark:to-slate-950" />
          <div className="absolute -right-24 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-lime-300/30 blur-3xl dark:bg-lime-500/10" />
          <div className="absolute -left-32 top-40 -z-10 h-[24rem] w-[24rem] rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/10" />

          <div className="container grid gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <p className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
                IEEE SPERT 2027
              </p>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-emerald-500 dark:text-emerald-300">Powering the future of</span>{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                  clean energy & mobility
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                The IEEE International Conference on Smart Power, Energy, Renewables, and Transportation
                (IEEE-SPERT) brings together researchers and industry to advance renewable integration,
                energy storage, smart grids and electric mobility.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/5 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                  <CalendarDays className="size-4 text-emerald-600" />
                  17&ndash;19 May 2027
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/5 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                  <MapPin className="size-4 text-emerald-600" />
                  SVNIT, Surat, India
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/authors/call-for-papers">
                    Call for Papers <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Submit Your Paper Now
                </Button>
              </div>
            </div>

            {/* Organizing institutions */}
            <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 lg:mx-0 lg:max-w-none">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Organized By
              </p>
              <div className="grid w-full grid-cols-[1fr_1.6fr] gap-3">
                <div className="row-span-3 flex flex-col gap-2">
                  <div className="flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-2 shadow-lg shadow-black/5 backdrop-blur-xl">
                    <Image
                      src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
                      alt="SVNIT Surat"
                      width={140}
                      height={140}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="line-clamp-1 text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    SVNIT Surat
                  </span>
                </div>

                <div className="flex h-[68px] items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur-xl">
                  <Image
                    src="https://i.ibb.co/ks9mhG84/guj-section-logo.png"
                    alt="IEEE Gujarat Section"
                    width={200}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex h-[68px] items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur-xl">
                  <Image
                    src="https://i.ibb.co/fYQ9ZvB3/Jt-Chapter-Logo.png"
                    alt="IEEE IES/PELS Joint Chapter"
                    width={140}
                    height={140}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex h-[68px] items-center justify-center overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur-xl">
                    <Image
                      src="/images/Unica_logo.svg"
                      alt="University of Cagliari"
                      width={430}
                      height={69}
                      className="max-h-full max-w-full object-contain invert"
                    />
                  </div>
                  <span className="line-clamp-1 text-center text-sm font-medium text-slate-600 dark:text-slate-300">
                    University of Cagliari, Italy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important dates */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="rounded-2xl border border-emerald-600/20 bg-emerald-600/5 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">Important Dates</h2>
                <Link
                  href="/authors/call-for-papers"
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
                >
                  Full Call for Papers <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {importantDates.map(({ label, date }) => (
                  <div key={label} className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-bold text-emerald-700 dark:text-emerald-400">{date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why attend */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Why IEEE-SPERT
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Four themes, one conference — bringing renewable energy, smart grids, electric mobility
                and intelligent automation onto a single stage.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyAttend.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border-slate-900/5 shadow-sm dark:border-white/10">
                  <CardContent className="p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 dark:text-emerald-400">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Focus areas / tracks */}
        <section className="w-full bg-emerald-50/60 py-16 md:py-24 dark:bg-white/[0.03]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  Regular Tracks
                </h2>
                <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
                  Submissions are welcome across the following areas. The full call for papers will be
                  published closer to the submission window.
                </p>
              </div>
              <Button variant="outline" asChild className="w-fit">
                <Link href="/authors/call-for-papers">
                  View Call for Papers <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="border-slate-900/5 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
                  <CardContent className="p-6">
                    <Icon className="size-6 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 border-amber-500/20 bg-amber-500/5">
              <CardContent className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="size-6 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Special Sessions</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Proposals for special sessions will open soon — check back or get in touch.
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/program/call-for-special-session">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Countdown */}
        <section className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 py-14">
          <div className="container px-4 text-center md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Conference Starts In</h2>
            <p className="mt-2 text-sm text-emerald-100">17&ndash;19 May 2027 &middot; SVNIT, Surat, India</p>
            <div className="mt-8">
              <CountdownTimer targetDate={CONFERENCE_START} />
            </div>
          </div>
        </section>

        {/* Glimpses from 2025 */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Glimpses from IEEE-SPERT 2025
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              2027 builds on a successful first edition — here&apos;s a look back.
            </p>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
              {gallery.map((name) => (
                <div
                  key={name}
                  className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                  <Image src={`/images/spert-2025-thumbs/${name}.jpg`} alt="IEEE-SPERT 2025" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizing institutions — commented out: redundant with the "Organized By" panel in the hero
        <section className="w-full bg-emerald-50/60 py-16 md:py-24 dark:bg-white/[0.03]">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Organized By
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <Image src="https://i.ibb.co/mrdb1b5s/ieee-logo.png" alt="IEEE Logo" width={90} height={90} className="object-contain" />
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <Image src="https://i.ibb.co/ks9mhG84/guj-section-logo.png" alt="Gujarat Section Logo" width={90} height={90} className="object-contain" />
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <Image
                    src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
                    alt="SVNIT Logo"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <Image
                    src="https://i.ibb.co/fYQ9ZvB3/Jt-Chapter-Logo.png"
                    alt="IEEE IES/PELS Joint Chapter Logo"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="flex h-32 items-center justify-center p-6">
                  <Image
                    src="/images/Unica_logo.svg"
                    alt="University of Cagliari, Italy"
                    width={90}
                    height={90}
                    className="object-contain invert"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Sponsor CTA */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <Card className="overflow-hidden border-none bg-gradient-to-r from-emerald-700 to-emerald-600">
              <CardContent className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between md:p-12">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Partner with IEEE-SPERT 2027</h2>
                  <p className="mt-2 max-w-xl text-emerald-100">
                    Reach a global audience of researchers and industry leaders in clean energy and
                    e-mobility. Sponsorship packages for 2027 will be announced soon.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="w-fit shrink-0" asChild>
                  <Link href="/sponsorships">
                    Become a Sponsor <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <VisitorCounter />
      <Footer />
    </div>
  )
}
