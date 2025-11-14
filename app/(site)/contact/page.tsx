'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation: ensure email is not empty
    if (!formData.email.trim()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after showing confirmation
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: '',
      })
      // Reset confirmation message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-background grain-texture">

      {/* Hero Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 newsletter-hero relative overflow-hidden">
        {/* Compass Image - premium editorial accent, extremely subtle */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 lg:top-6 lg:right-6 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-8 md:opacity-10 pointer-events-none z-0">
          <Image
            src="/images/visuals/newsletter-compass.svg"
            alt=""
            width={112}
            height={112}
            className="w-full h-full object-contain mix-blend-soft-light"
            aria-hidden="true"
            priority={false}
          />
        </div>
        
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4">CONTACT</div>
            <h1 className="section-title mb-6 leading-[1.05]">
              Get in Touch
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-light mt-6">
              For speaking, media, advisory work, or questions about The 7 Laws of Intuitive Leadership, send a note below. Messages go directly to Ron's team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="p-8 md:p-10 border border-accent/20 rounded-xl bg-white shadow-sm relative z-10">
              {isSubmitted ? (
                <div className="text-center py-8 relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-lg md:text-xl text-foreground font-semibold mb-2 relative z-10">
                    Thank you — your message has been sent.
                  </p>
                  <p className="text-base md:text-lg text-foreground leading-relaxed relative z-10">
                    Ron's team will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 relative z-10">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors text-base relative z-10"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 relative z-10">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors text-base relative z-10"
                      required
                    />
                  </div>

                  {/* Organization Field */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2 relative z-10">
                      Organization <span className="text-foreground/70 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Company, institution, or group"
                      className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors text-base relative z-10"
                    />
                  </div>

                  {/* Inquiry Type Field */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-2 relative z-10">
                      I'm reaching out about
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-white text-foreground focus:outline-none focus:border-accent/60 transition-colors text-base relative z-10"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="speaking">Speaking</option>
                      <option value="media">Media / Interview</option>
                      <option value="advisory">Advisory / Consultation</option>
                      <option value="book">Book / Rights</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 relative z-10">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can Ron help?"
                      rows={6}
                      className="w-full px-6 py-4 border border-accent/20 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition-colors text-base resize-none relative z-10"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-start relative z-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto sm:min-w-[200px] px-10 py-5 bg-accent text-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Contact Options Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Prefer a Different Channel?</h2>
            <div className="gold-divider" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 mt-4 font-light">
              You can also connect with Ron on LinkedIn or coordinate through event organizers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://linkedin.com/in/ronaldkraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium text-base md:text-lg"
              >
                LinkedIn Profile
              </Link>
              <span className="text-foreground/50 hidden sm:inline">·</span>
              <Link
                href="/press"
                className="text-accent hover:underline font-medium text-base md:text-lg"
              >
                Press & Media Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

