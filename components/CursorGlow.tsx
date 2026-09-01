"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

/** Soft white glow that trails the cursor — only shown in dark mode, where it reads against the dark backdrop. */
export function CursorGlow() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const glowRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -200, y: -200 })
  const current = useRef({ x: -200, y: -200 })
  const frame = useRef<number>()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || resolvedTheme !== "dark") return

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener("mousemove", handleMove)

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18
      current.current.y += (target.current.y - current.current.y) * 0.18
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`
      }
      frame.current = requestAnimationFrame(animate)
    }
    frame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [mounted, resolvedTheme])

  if (!mounted || resolvedTheme !== "dark") return null

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-10 -mt-10 h-20 w-20 rounded-full mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 32%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 72%)",
        filter: "blur(2px)",
      }}
    />
  )
}
