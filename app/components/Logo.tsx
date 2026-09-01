import Image from "next/image"
import { cn } from "@/lib/utils"

/** Icon-only crop of the official SPERT 2027 mark (sun, leaf, turbine, solar panel, EV). */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/spert-logo-icon.png"
      alt="IEEE SPERT 2027"
      width={685}
      height={656}
      className={cn("h-auto w-full object-contain", className)}
      priority
    />
  )
}

/** Compact navbar lockup: the real icon mark paired with a typographic wordmark. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon className="h-10 w-10 shrink-0" />
      <div className="leading-tight">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[10px] font-bold tracking-[0.24em] text-sky-700">IEEE</span>
          <span className="bg-gradient-to-r from-emerald-700 to-lime-500 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
            SPERT
          </span>
        </div>
        <span className="text-[10px] font-semibold tracking-[0.2em] text-emerald-600">2027</span>
      </div>
    </div>
  )
}

/** Full lockup image (icon + baked-in wordmark) for large, spacious contexts. */
export function LogoFull({ className }: { className?: string }) {
  return (
    <Image
      src="/images/spert-logo-full.png"
      alt="IEEE SPERT 2027"
      width={1403}
      height={656}
      className={cn("h-auto w-full object-contain", className)}
    />
  )
}
