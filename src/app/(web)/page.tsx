import Image from 'next/image'
import Link from 'next/link'
import { load } from 'outstatic/server'
import Footer from '@/components/Footer'

type Post = {
  title: string
  slug: string
  description?: string
}

export default async function Index() {
  const db = await load()
  const posts = await db
    .find<Post>({ collection: 'posts' }, ['title', 'slug', 'description'])
    .toArray()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* ── WORDMARK ── */}
      <header
        className="w-full flex flex-col items-center"
        style={{ padding: '84px 0 0' }}
      >
        <div
          className="flex flex-col items-start"
          style={{ width: 'min(1120px, 100% - 72px)', paddingLeft: 3 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 32,
              fontWeight: 100,
              lineHeight: 1.15,
            }}
          >
            Seiole<br />
            Labs
          </p>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="w-full flex flex-col items-center"
        style={{ padding: '146px 0 180px' }}
      >
        <div
          className="w-full flex flex-row items-start"
          style={{ maxWidth: 'min(1120px, 100% - 72px)', gap: 32 }}
        >
          {/* Left — text */}
          <div className="flex flex-col" style={{ flex: '1 0 0', gap: 36 }}>
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              &ldquo;Energy will be one of the
            </p>
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              biggest bottlenecks of our
            </p>
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              lifetimes for human progress
            </p>
            <p
              className="italic"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              in AI and space explorations.&rdquo;
            </p>
          </div>

          {/* Right — illustration + product */}
          <div
            className="flex flex-col items-start"
            style={{ flex: '1 0 0', gap: 24, paddingBottom: 24 }}
          >
            {/* Grid paper with image */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative overflow-hidden no-underline"
              style={{
                aspectRatio: '1.697',
                background:
                  'repeating-linear-gradient(0deg,transparent,transparent 19px,#e5e5e5 19px,#e5e5e5 20px),repeating-linear-gradient(90deg,transparent,transparent 19px,#e5e5e5 19px,#e5e5e5 20px)',
                backgroundSize: '20px 20px',
              }}
            >
              <Image
                src="/grid.jpeg"
                alt="Grid illustration"
                width={2240}
                height={1320}
                className="w-full h-full object-contain mix-blend-multiply"
                priority
              />
            </a>

            {/* Product name + EBM badge */}
            <div
              className="w-full flex items-center justify-between"
              style={{ height: 'min-content' }}
            >
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-black"
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 36,
                  letterSpacing: '0.04em',
                  lineHeight: 0.1,
                }}
              >
                mygrid v1.0
              </a>
              <div
                className="bg-black text-white flex items-center justify-center"
                style={{ padding: '8px 14px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: 16,
                    letterSpacing: '0.04em',
                    color: 'white',
                  }}
                >
                  Foundational Models
                </span>
              </div>
            </div>

            {/* Divider line */}
            <div
              style={{
                width: '100%',
                height: 1,
                borderBottom: '0.5px solid #000',
              }}
            />

            {/* CTA */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-black"
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 26,
                letterSpacing: '0.04em',
                lineHeight: 0.1,
              }}
            >
              <span style={{ letterSpacing: '0.16em' }}>↗ </span>
              play with mygrid
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT WE DO ── */}
      <section
        className="w-full flex items-center"
        style={{
          padding: '72px 0',
          borderTop: '0.5px solid #000',
          borderBottom: '0.5px solid #000',
        }}
      >
        <div
          className="flex items-center"
          style={{ width: 1120, margin: '0 auto', gap: 36 }}
        >
          {/* Title — left side */}
          <div style={{ flex: '0 0 40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: 36,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              OUR FOCUS
            </p>
          </div>

          {/* Bullet points — right side */}
          <div
            style={{ flex: '0 0 60%', display: 'flex', alignItems: 'center' }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyleType: '"● "',
                width: '100%',
              }}
            >
              <li
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 20,
                  fontWeight: 100,
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                focus on AC Optimal Power Flow (ACOPF): the problem of
                deciding how electricity should be generated and routed safely,
                cheaply, and reliably.
              </li>
              <li
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 20,
                  fontWeight: 100,
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                today&apos;s approaches often force a compromise: fast
                approximations omit important grid physics, while high-fidelity
                AC solvers can become slow as networks grow.
              </li>
              <li
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 20,
                  fontWeight: 100,
                  lineHeight: 1.5,
                  marginBottom: 16,
                }}
              >
                we are exploring whether models pretrained across many grid
                topologies and operating conditions can approximate ACOPF
                solutions faster while remaining physically feasible and
                trustworthy.
              </li>
              <li
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 20,
                  fontWeight: 100,
                  lineHeight: 1.5,
                }}
              >
                our experimental environment for comparing conventional
                solvers and GridFM-based methods on solve time, optimality gap,
                constraint violations, and robustness under changing loads,
                renewables, and topology conditions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: POSTS ── */}
      <section
        className="w-full flex flex-col items-center"
        style={{ padding: '120px 36px 144px' }}
      >
        <div
          className="w-full flex flex-row items-start"
          style={{ maxWidth: 1120, gap: 32 }}
        >
          {/* Left — empty space */}
          <div style={{ flex: '0 0 40%' }} />

          {/* Right — articles list */}
          <div
            className="flex flex-col items-start"
            style={{ flex: '1 0 0', gap: 36 }}
          >
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="no-underline text-black"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  width: '100%',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-pixel)',
                    fontSize: 28,
                    lineHeight: '150%',
                  }}
                >
                  ▨
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: '150%',
                    margin: 0,
                  }}
                >
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TEAM ── */}
      <section
        className="w-full flex flex-col items-center"
        style={{ padding: '160px 36px 144px' }}
      >
        <div
          className="w-full flex flex-row items-start"
          style={{ maxWidth: 1120, gap: 32 }}
        >
          {/* Left — team members */}
          <div
            className="flex flex-row items-start"
            style={{ flex: '0 0 50%', gap: 80 }}
          >
            {/* Ninad */}
            <a
              href="https://www.linkedin.com/in/ninadsonawane/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-black"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 36,
                  lineHeight: 0.8,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  margin: 0,
                  borderBottom: '1px dotted #999',
                  paddingBottom: 12,
                }}
              >
                NINAD<br />
                SONAWANE
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Lead Product & Researcher
              </p>
            </a>

            {/* Abhey */}
            <a
              href="https://www.linkedin.com/in/abhey-kalia-a294ab176/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-black"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: 36,
                  lineHeight: 0.8,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  margin: 0,
                  borderBottom: '1px dotted #999',
                  paddingBottom: 12,
                }}
              >
                ABHEY<br />
                KALIA
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Lead Researcher & Product
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
