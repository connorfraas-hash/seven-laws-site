import Link from 'next/link'
import { Download, FileText, Image as ImageIcon, Mail, Linkedin } from 'lucide-react'

export default function PressContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] grain-texture">
      {/* Hero Section */}
      <section className="py-32 md:py-48 border-b border-accent/10 cinematic-hero">
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="eyebrow mb-8">PRESS & CONTACT</div>
            <h1 className="section-title mb-10 leading-[1.05]">
              Press & Contact
            </h1>
            <div className="gold-divider" />
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Media resources, press materials, and contact information for interviews and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Media Bio Section */}
      <section className="py-32 md:py-48 border-b border-accent/10 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="eyebrow mb-8">MEDIA BIO</div>
            <h2 className="section-title mb-10 text-left">Media Bio</h2>
            <div className="gold-divider-left" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 relative z-10">
              Ronald D. Kraft, PhD is a three-time university and college president, CEO, and executive advisor known for guiding institutions, leaders, and teams through moments of transformation. His career spans four decades across higher education, healthcare, workforce development, and public–private partnership strategy.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed relative z-10">
              <strong className="text-foreground font-semibold">The 7 Laws of Intuitive Leadership</strong> emerges directly from these experiences — from presidencies, boardrooms, crises, restructures, stakeholder negotiations, and one-on-one executive coaching across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Press Materials Section */}
      <section className="py-32 md:py-48 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="eyebrow mb-8">PRESS MATERIALS</div>
            <h2 className="section-title mb-10 text-left">Press Materials</h2>
            <div className="gold-divider-left" />
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <ImageIcon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold font-serif text-foreground">Author Photo</h3>
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-base relative z-10">
                  High-resolution author portrait (300 DPI, JPEG)
                </p>
                <Link
                  href="/downloads/author-photo.jpg"
                  className="inline-flex items-center gap-3 text-accent hover:underline font-medium uppercase tracking-wider text-sm relative z-10"
                  download
                >
                  Download
                  <Download className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <ImageIcon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold font-serif text-foreground">Book Cover</h3>
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-base relative z-10">
                  High-resolution book cover (300 DPI, JPEG)
                </p>
                <Link
                  href="/downloads/book-cover.jpg"
                  className="inline-flex items-center gap-3 text-accent hover:underline font-medium uppercase tracking-wider text-sm relative z-10"
                  download
                >
                  Download
                  <Download className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <FileText className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold font-serif text-foreground">Press Release</h3>
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-base relative z-10">
                  Official press release (PDF)
                </p>
                <Link
                  href="/downloads/press-release.pdf"
                  className="inline-flex items-center gap-3 text-accent hover:underline font-medium uppercase tracking-wider text-sm relative z-10"
                  download
                >
                  Download
                  <Download className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <FileText className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold font-serif text-foreground">Author Bio</h3>
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-base relative z-10">
                  Short and long author biographies (PDF)
                </p>
                <Link
                  href="/downloads/author-bio.pdf"
                  className="inline-flex items-center gap-3 text-accent hover:underline font-medium uppercase tracking-wider text-sm relative z-10"
                  download
                >
                  Download
                  <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="border-t border-accent/20 pt-10">
              <Link
                href="/downloads/press-kit.zip"
                className="inline-flex items-center justify-center gap-3 w-full px-10 py-5 bg-accent text-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                download
              >
                <Download className="w-6 h-6" />
                Download Press Kit (ZIP)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Ron Section */}
      <section className="py-32 md:py-48 relative">
        <div className="container mx-auto px-6 max-w-screen-2xl">
          <div className="max-w-4xl mx-auto fade-in">
            <div className="eyebrow mb-8">CONTACT RON</div>
            <h2 className="section-title mb-10 text-left">Contact Ron</h2>
            <div className="gold-divider-left" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground">Email</h3>
                </div>
                <p className="text-foreground mb-4 leading-relaxed relative z-10">
                  For media inquiries, speaking engagements, or interviews:
                </p>
                <a
                  href="mailto:press@7lawsofleadership.com"
                  className="text-accent hover:underline font-medium text-lg relative z-10"
                >
                  press@7lawsofleadership.com
                </a>
              </div>

              <div className="p-8 border border-accent/20 rounded-xl bg-white hover:border-accent/40 transition-colors relative z-10">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground">LinkedIn</h3>
                </div>
                <p className="text-foreground mb-4 leading-relaxed relative z-10">
                  Connect with Ron on LinkedIn for professional updates and articles:
                </p>
                <a
                  href="https://linkedin.com/in/ronaldkraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium text-lg relative z-10"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

