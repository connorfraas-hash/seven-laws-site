import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, GraduationCap, Award, Quote } from 'lucide-react'

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-background grain-texture">
      {/* Hero Section - Enhanced */}
      <section className="cinematic-hero py-12 md:py-16 border-b border-accent/10 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl md:max-w-3xl relative z-10">
          <div className="text-center fade-in">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl border border-accent/30">
              <Image
                src="/images/author.jpg"
                alt="Ronald D. Kraft, PhD"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="eyebrow mb-6">ABOUT THE AUTHOR</div>
            <h1 className="section-title mb-6 leading-[1.05]">Ronald D. Kraft, PhD</h1>
            <div className="gold-divider" />
            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed mx-auto font-light mt-8">
              <p>
                Ronald D. Kraft, PhD is a three-time university and college president, CEO, and executive advisor known for guiding institutions, leaders, and teams through moments of transformation. His career spans four decades across higher education, healthcare, workforce development, and public–private partnership strategy.
              </p>
              <p>
                Whether leading a college district, steering a university through a competitive realignment, or advising CEOs and founders, Ronald has been recognized for his ability to combine <strong className="text-foreground font-semibold">strategic clarity</strong>, <strong className="text-foreground font-semibold">organizational intuition</strong>, and <strong className="text-foreground font-semibold">evidence-based decision-making</strong>.
              </p>
              <p>
                <strong className="text-foreground font-semibold">The 7 Laws of Intuitive Leadership</strong> emerges directly from these experiences — from presidencies, boardrooms, crises, restructures, stakeholder negotiations, and one-on-one executive coaching across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Highlights Block - Enhanced with Cards */}
      <section className="py-12 md:py-16 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 max-w-2xl md:max-w-3xl relative z-10">
          <div className="fade-in mb-8">
            <div className="eyebrow mb-4">LEADERSHIP HIGHLIGHTS</div>
            <h2 className="section-title mb-4 text-left">Leadership Highlights</h2>
            <div className="gold-divider-left" />
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-8 mt-6">
              Ronald's leadership roles reflect a deep understanding of how complex organizations move — and what blocks them from moving.
            </p>
          </div>

          <div className="space-y-4 mb-8 fade-in-delay-1">
            {/* Leadership Role Cards */}
            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              {/* Vertical gold line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">3× President/CEO</strong> in higher education and workforce development, with responsibility for academic strategy, operations, budgets, facilities, and stakeholder alignment.
                </p>
              </div>
            </div>

            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">Superintendent/President, Napa Valley College</strong> — oversaw long-range strategic planning, major facility expansions, healthcare program growth, student housing initiatives, and community/industry partnerships.
                </p>
              </div>
            </div>

            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">President & CEO, Southern California University of Health Sciences</strong> — advanced integrative and whole-health education, expanded clinical experiences, strengthened university–industry partnerships, and positioned SCUHS for long-term growth.
                </p>
              </div>
            </div>

            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">President & CEO, Washington State Alliance for Community & Technical Colleges</strong> — coordinated statewide workforce, technology, and economic-development strategy across 34 colleges, collaborating with business, government, and public agencies.
                </p>
              </div>
            </div>

            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">President, ICON Leaders International</strong> — advises CEOs, physicians, educators, boards, and institutions on strategic growth, operational efficiency, AI adoption, organizational turnarounds, and leadership culture.
                </p>
              </div>
            </div>

            <div className="group relative p-6 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-accent text-lg leading-none mt-1 flex-shrink-0">&bull;</span>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">Earlier leadership roles</strong> include VP-level academic and foundation roles and <strong className="text-foreground font-semibold">12 years as an elected community college board trustee</strong>, providing a unique "full-spectrum" view of governance, policy, resource allocation, and institutional change.
                </p>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-8 fade-in-delay-2">
            Across all positions, Ronald has been relied on to evaluate complex, ambiguous situations and help organizations make decisions that hold up against time, pressure, and competing interests.
          </p>
          
          {/* Areas of Expertise - Enhanced */}
          <div className="pt-8 border-t border-accent/20 fade-in-delay-3">
            <p className="text-xs md:text-sm text-foreground/80 font-medium mb-4">Areas of Expertise</p>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-6">
              Ronald's leadership and advisory work centers on the following domains:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Strategic planning and organizational transformation',
                'Leadership intuition and high-stakes decision-making',
                'Public–private partnerships and long-range facilities planning',
                'Healthcare program development and clinical expansion',
                'AI-driven operational improvement and workflow redesign',
                'Policy, governance, accreditation, and institutional alignment',
                'Workforce development, economic development, and market positioning',
                'Executive coaching and leadership development for emerging and established leaders',
              ].map((expertise, index) => (
                <div
                  key={expertise}
                  className="group relative p-4 border border-accent/20 rounded-lg bg-white hover:shadow-lg hover:-translate-y-1 hover:border-accent/40 transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${(index + 4) * 0.05}s` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="flex items-start gap-2 relative z-10">
                    <span className="text-accent text-base leading-none mt-0.5 flex-shrink-0">&bull;</span>
                    <span className="text-xs md:text-sm text-foreground leading-relaxed">{expertise}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed mt-6">
              This broad expertise enables him to guide leaders through the points where data, strategy, and intuition collide.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Credentials Block - Enhanced with Cards */}
      <section className="py-12 md:py-16 border-b border-accent/10">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl md:max-w-3xl">
          <div className="fade-in mb-8">
            <div className="eyebrow mb-4">EDUCATION & CREDENTIALS</div>
            <h2 className="section-title mb-4 text-left">Education & Credentials</h2>
            <div className="gold-divider-left" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 fade-in-delay-1">
            {/* Academic Background Card */}
            <div className="group relative p-8 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs md:text-sm text-foreground font-medium uppercase tracking-wider">Academic Background</p>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-foreground leading-relaxed relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">PhD, Higher Education Leadership</strong> — Capella University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">MA, Career & Technical Education</strong> — San Diego State University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">BS, Business</strong> — San Diego State University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Associate Degree, Liberal Arts</strong> — Grossmont College</span>
                </li>
              </ul>
              <p className="text-sm md:text-base text-foreground leading-relaxed mt-6 pt-6 border-t border-accent/10 relative z-10">
                Ronald's dissertation, <em>A Leadership View of Strategic Planning in the Community College</em>, remains foundational to his work on decision-making, governance, and institutional strategy.
              </p>
            </div>

            {/* Certifications Card */}
            <div className="group relative p-8 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs md:text-sm text-foreground font-medium uppercase tracking-wider">Certifications & Professional Credentials</p>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-foreground leading-relaxed relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Wheelhouse Leadership Fellow</strong> — University of California, Davis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">True Colors Team Building Certification</strong> — True Colors International</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Leadership & Mentorship Training</strong> — Disney University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Human Development & Team Building Certificate</strong> — Disney University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Foundation & Fundraising Certification</strong> — Panas Institute</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Strategic Life Planner</strong> — TRG Associates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-lg leading-none mt-1">&bull;</span>
                  <span><strong className="text-foreground font-semibold">Certified Professional Life Coach</strong> — California Board of Behavioral Sciences</span>
                </li>
              </ul>
              <p className="text-sm md:text-base text-foreground leading-relaxed mt-6 pt-6 border-t border-accent/10 relative z-10">
                These credentials reflect a long-term investment in understanding how people, institutions, and systems respond to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Impact Block - Enhanced */}
      <section className="py-12 md:py-16 border-b border-accent/10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 max-w-2xl md:max-w-3xl relative z-10">
          <div className="fade-in mb-8">
            <div className="eyebrow mb-4">RECOGNITION & IMPACT</div>
            <h2 className="section-title mb-4 text-left">Recognition & Impact</h2>
            <div className="gold-divider-left" />
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed mb-8 mt-6">
              Ronald's colleagues, partners, and former team members consistently highlight his mentorship, clarity, and ability to lead through uncertainty:
            </p>
          </div>

          <div className="space-y-6 fade-in-delay-1">
            <div className="group relative p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-2xl hover:-translate-y-1 hover:border-accent/60 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                  "Dr. Kraft understands the power of mentorship, purpose, and organizational vision. Under his leadership at SCUHS, he helped transform a once-fledgling program into an academic beacon."
                </blockquote>
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold ml-10 relative z-10">
                — Dr. Daniel Bronstein, DC DACCP
              </p>
            </div>

            <div className="group relative p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-2xl hover:-translate-y-1 hover:border-accent/60 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                  "Ron Kraft is a highly educated and strategic leader. His work with the Board and faculty resulted in meaningful organizational progress and measurable improvements."
                </blockquote>
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold ml-10 relative z-10">
                — Steven Marcussen, Executive Director, Cushman & Wakefield
              </p>
            </div>

            <div className="group relative p-8 border-l-4 border-accent bg-white rounded-r-xl hover:shadow-2xl hover:-translate-y-1 hover:border-accent/60 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <Quote className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <blockquote className="text-lg md:text-xl italic leading-relaxed font-serif text-foreground flex-1">
                  "Ron's leadership is a joy to work under. He is generous with his time and deeply open to input. His greatest strength is his ability to consider all aspects of an issue and guide people toward a solution that respects everyone involved."
                </blockquote>
              </div>
              <p className="text-sm md:text-base text-foreground font-semibold ml-10 relative z-10">
                — Dr. Mechele Manno, Ed.D
              </p>
            </div>
          </div>

          <p className="text-base md:text-lg text-foreground/85 leading-relaxed mt-8 fade-in-delay-2">
            Ronald's leadership philosophy — the blend of intuition, experience, data, and integrity — shapes the foundation of the 7 Laws.
          </p>
        </div>
      </section>

      {/* Get in Touch Block - Enhanced */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl md:max-w-3xl">
          <div className="fade-in-delay-3 text-center mb-8">
            <div className="eyebrow mb-4">GET IN TOUCH</div>
            <h2 className="section-title mb-6">Get in Touch</h2>
            <div className="gold-divider" />
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed mx-auto mb-8 mt-8">
              For speaking engagements, executive advisory work, or interviews:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in-delay-4">
            <Link
              href="/press-contact"
              className="group relative p-8 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden text-center"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors relative z-10">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-foreground group-hover:text-accent transition-colors relative z-10">
                Contact Page
              </h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed relative z-10">
                Use the Contact page on this site
              </p>
            </Link>

            <Link
              href="https://linkedin.com/in/ronaldkraft"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 border border-accent/20 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 overflow-hidden text-center"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors relative z-10">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-foreground group-hover:text-accent transition-colors relative z-10">
                Connect on LinkedIn
              </h3>
              <p className="text-sm md:text-base text-foreground leading-relaxed relative z-10">
                For new insights, articles, and leadership discussions
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
