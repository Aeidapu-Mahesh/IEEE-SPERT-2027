import { Award } from "lucide-react"

const MESSAGE =
  "20% of accepted papers will be eligible for further review and possible publication in IEEE Transactions on Industry Applications"

function TickerCopy() {
  return (
    <span className="flex shrink-0 items-center gap-3 whitespace-nowrap px-6 text-sm font-bold tracking-wide text-slate-900">
      <Award className="size-4 shrink-0" />
      {MESSAGE}
    </span>
  )
}

export function AnnouncementTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 py-2">
      <div className="flex w-max animate-marquee-seamless">
        <TickerCopy />
        <TickerCopy />
      </div>
    </div>
  )
}
