'use client'

import { useEffect, useRef, useState } from 'react'

interface HomeHeroAnimationProps {
  showText?: boolean
  useVideo?: boolean
  videoSrc?: string
  fallbackImage?: string
}

export function HomeHeroAnimation({
  showText = true,
  useVideo = false,
  videoSrc,
  fallbackImage,
}: HomeHeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [textVisible, setTextVisible] = useState(false)

  // Show text for video after 2 seconds
  useEffect(() => {
    if (useVideo && showText) {
      const timer = setTimeout(() => {
        setTextVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [useVideo, showText])

  useEffect(() => {
    if (useVideo) return // Skip canvas animation if using video

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Animation state
    let animationTime = 0
    const duration = 10000 // 10 seconds for seamless loop
    const beamWidth = 6
    const beamGlowRadius = 80

    // Particle system
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
    }

    const particles: Particle[] = []

    const createParticle = (x: number, y: number, direction: 'left' | 'right' | 'out') => {
      const angle = direction === 'left' ? Math.PI : direction === 'right' ? 0 : Math.random() * Math.PI * 2
      const speed = 1 + Math.random() * 2
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed * 0.3,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.4,
        size: 1 + Math.random() * 2,
      })
    }

    // Beam position and state
    const getBeamX = (time: number) => {
      const progress = (time % duration) / duration
      // Move from left to right, easing
      if (progress < 0.3) {
        // Initial appearance and movement
        const t = progress / 0.3
        return -100 + (canvas.width / 2 - 100) * (t * t)
      } else if (progress < 0.5) {
        // Splitting phase
        return canvas.width / 2 - 100
      } else if (progress < 0.7) {
        // Convergence phase
        const t = (progress - 0.5) / 0.2
        return canvas.width / 2 - 100
      } else if (progress < 0.9) {
        // Resonance phase
        const t = (progress - 0.7) / 0.2
        return canvas.width / 2 - 100 + Math.sin(t * Math.PI * 8) * 10
      } else {
        // Final movement and loop prep
        const t = (progress - 0.9) / 0.1
        const easeOut = 1 - Math.pow(1 - t, 3)
        return (canvas.width / 2 - 100) + (canvas.width / 2 + 200) * easeOut
      }
    }

    const getBeamPhase = (time: number) => {
      const progress = (time % duration) / duration
      if (progress < 0.3) return 'appear'
      if (progress < 0.5) return 'split'
      if (progress < 0.7) return 'converge'
      if (progress < 0.9) return 'resonate'
      return 'exit'
    }

    const getBeamOpacity = (time: number) => {
      const progress = (time % duration) / duration
      if (progress < 0.1) return progress / 0.1
      if (progress > 0.9) return 1 - (progress - 0.9) / 0.1
      return 1
    }

    // Draw background texture
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#0a0d14')
      gradient.addColorStop(0.5, '#0f1419')
      gradient.addColorStop(1, '#0a0d14')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Subtle grain texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        ctx.fillRect(x, y, 1, 1)
      }

      // Digital field lines (very subtle)
      ctx.strokeStyle = 'rgba(248, 250, 252, 0.03)'
      ctx.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 6) * (i + 1)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Draw beam
    const drawBeam = (time: number) => {
      const phase = getBeamPhase(time)
      const opacity = getBeamOpacity(time)
      const beamX = getBeamX(time)
      const centerY = canvas.height / 2
      const progress = (time % duration) / duration

      // Beam glow
      const glowGradient = ctx.createRadialGradient(beamX + 100, centerY, 0, beamX + 100, centerY, beamGlowRadius)
      glowGradient.addColorStop(0, `rgba(248, 250, 252, ${0.6 * opacity})`)
      glowGradient.addColorStop(0.3, `rgba(209, 213, 219, ${0.3 * opacity})`)
      glowGradient.addColorStop(0.6, `rgba(148, 163, 184, ${0.1 * opacity})`)
      glowGradient.addColorStop(1, 'transparent')

      ctx.fillStyle = glowGradient
      ctx.fillRect(beamX - 50, centerY - beamGlowRadius, 300, beamGlowRadius * 2)

      // Beam core
      if (phase === 'split') {
        // Draw 7 threads
        const splitProgress = (progress - 0.3) / 0.2
        const threads = 7
        const threadSpacing = 30

        for (let i = 0; i < threads; i++) {
          const threadY = centerY - (threadSpacing * (threads - 1)) / 2 + i * threadSpacing
          const threadX = beamX + 100
          const threadOffset = (Math.sin(splitProgress * Math.PI) * 15) * (i - (threads - 1) / 2) / (threads / 2)

          const threadGradient = ctx.createLinearGradient(threadX - 50, threadY, threadX + 250, threadY)
          threadGradient.addColorStop(0, `rgba(248, 250, 252, ${0.3 * opacity})`)
          threadGradient.addColorStop(0.5, `rgba(248, 250, 252, ${0.8 * opacity})`)
          threadGradient.addColorStop(1, `rgba(248, 250, 252, ${0.3 * opacity})`)

          ctx.fillStyle = threadGradient
          ctx.fillRect(threadX - 50, threadY - 1, 250, 2)

          // Thread glow
          const threadGlow = ctx.createRadialGradient(threadX + 75 + threadOffset, threadY, 0, threadX + 75 + threadOffset, threadY, 20)
          threadGlow.addColorStop(0, `rgba(248, 250, 252, ${0.5 * opacity})`)
          threadGlow.addColorStop(1, 'transparent')
          ctx.fillStyle = threadGlow
          ctx.fillRect(threadX - 50, threadY - 20, 250, 40)

          // Create particles during split
          if (Math.random() < 0.1 && splitProgress > 0.3 && splitProgress < 0.7) {
            createParticle(threadX + 75 + threadOffset, threadY, 'out')
          }
        }
      } else if (phase === 'converge') {
        // Converging threads
        const convergeProgress = (progress - 0.5) / 0.2
        const threads = 7
        const threadSpacing = 30 * (1 - convergeProgress)

        for (let i = 0; i < threads; i++) {
          const threadY = centerY - (threadSpacing * (threads - 1)) / 2 + i * threadSpacing
          const threadX = beamX + 100

          const threadGradient = ctx.createLinearGradient(threadX - 50, threadY, threadX + 250, threadY)
          threadGradient.addColorStop(0, `rgba(248, 250, 252, ${0.3 * opacity})`)
          threadGradient.addColorStop(0.5, `rgba(248, 250, 252, ${0.8 * opacity * (1 - convergeProgress * 0.5)})`)
          threadGradient.addColorStop(1, `rgba(248, 250, 252, ${0.3 * opacity})`)

          ctx.fillStyle = threadGradient
          ctx.fillRect(threadX - 50, threadY - 1, 250, 2)
        }
      } else {
        // Single beam
        const pulseIntensity = phase === 'resonate' ? 1 + Math.sin(time * 0.02) * 0.3 : 1

        const beamGradient = ctx.createLinearGradient(beamX, centerY, beamX + 200, centerY)
        beamGradient.addColorStop(0, `rgba(248, 250, 252, ${0.3 * opacity})`)
        beamGradient.addColorStop(0.5, `rgba(248, 250, 252, ${0.9 * opacity * pulseIntensity})`)
        beamGradient.addColorStop(1, `rgba(248, 250, 252, ${0.3 * opacity})`)

        ctx.fillStyle = beamGradient
        ctx.fillRect(beamX, centerY - beamWidth / 2, 200, beamWidth)

        // Resonance ripples
        if (phase === 'resonate') {
          const rippleCount = 3
          for (let i = 0; i < rippleCount; i++) {
            const rippleTime = (time % (duration * 0.2)) / (duration * 0.2)
            const rippleProgress = (rippleTime - i * 0.2) % 1
            if (rippleProgress >= 0 && rippleProgress <= 1) {
              const rippleRadius = rippleProgress * 150
              const rippleAlpha = (1 - rippleProgress) * 0.3 * opacity

              ctx.strokeStyle = `rgba(248, 250, 252, ${rippleAlpha})`
              ctx.lineWidth = 2
              ctx.beginPath()
              ctx.arc(beamX + 100, centerY, rippleRadius, 0, Math.PI * 2)
              ctx.stroke()
            }

            // Create particles during resonance
            if (Math.random() < 0.15) {
              createParticle(beamX + 100, centerY, 'out')
            }
          }
        }
      }
    }

    // Update and draw particles
    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02

        if (p.life <= 0) {
          particles.splice(i, 1)
        }
      }

      ctx.fillStyle = 'rgba(248, 250, 252, 0.8)'
      particles.forEach(p => {
        const alpha = p.life / p.maxLife
        ctx.fillStyle = `rgba(248, 250, 252, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Main animation loop
    const animate = (currentTime: number) => {
      animationTime = currentTime

      drawBackground()
      drawBeam(animationTime)
      updateParticles()

      // Show text after 7 seconds (or immediately if using video)
      if (showText && animationTime > 7000 && !textVisible) {
        setTextVisible(true)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [showText, textVisible, useVideo])

  return (
    <div className="home-hero-animation">
      {useVideo && videoSrc ? (
        <>
          <video
            className="home-hero-video"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {fallbackImage && (
            <div
              className="home-hero-fallback"
              style={{ backgroundImage: `url(${fallbackImage})` }}
              aria-hidden="true"
            />
          )}
        </>
      ) : (
        <canvas
          ref={canvasRef}
          className="home-hero-canvas"
          aria-hidden="true"
        />
      )}
      {showText && (
        <div
          className={`home-hero-text ${textVisible ? 'home-hero-text-visible' : ''}`}
        >
          <h1 className="home-hero-headline">7 Laws of Intuitive Leadership</h1>
          <p className="home-hero-subheadline">
            Lead with clarity. Build with purpose. Navigate with instinct.
          </p>
          <a href="/laws" className="home-hero-cta">
            Explore the Framework
          </a>
        </div>
      )}
    </div>
  )
}

