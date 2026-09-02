import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      {/* ── CTA Section ── */}
      <div
        className="w-full flex flex-col items-center"
        style={{ padding: '80px 36px 120px' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 32,
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Help us build the future of Energy
        </p>
        <a
          href="/careers"
          className="no-underline text-white flex items-center justify-between"
          style={{
            backgroundColor: '#000',
            borderRadius: 999,
            padding: '14px 32px',
            width: 'min(360px, 100%)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 28,
              letterSpacing: '0.03em',
            }}
          >
            Join our team
          </span>
          <span
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 24,
              letterSpacing: '0.03em',
            }}
          >
            ↗
          </span>
        </a>
      </div>

      {/* ── Footer Links ── */}
      <div
        className="w-full flex flex-col items-center"
        style={{ padding: '0 36px' }}
      >
        <div
          className="w-full flex flex-row items-start justify-end"
          style={{ maxWidth: 1120, gap: 32 }}
        >
          {/* Left — empty */}
          <div style={{ flex: '1 0 0' }} />

          {/* Right — links */}
          <div
            className="flex flex-col items-end"
            style={{ gap: 8 }}
          >
            <Link
              href="/"
              className="no-underline text-black"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Home
            </Link>
            <Link
              href="/#posts"
              className="no-underline text-black"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Posts
            </Link>
            <a
              href="mailto:seiolelabs@gmail.com"
              className="no-underline text-black"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Contact
            </a>
            <Link
              href="/careers"
              className="no-underline text-black"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="w-full flex flex-col items-center"
        style={{ padding: '40px 36px 60px' }}
      >
        {/* Divider line */}
        <div
          style={{
            width: '100%',
            maxWidth: 1120,
            borderBottom: '0.5px solid #000',
            marginBottom: 20,
          }}
        />

        <div
          className="w-full flex flex-row items-end justify-between flex-wrap gap-4"
          style={{ maxWidth: 1120 }}
        >
          {/* Logo */}
          <img
            src="/seiole-labs-combined-black.svg"
            alt="Seiole Labs"
            style={{ height: 60, width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
          />

          {/* Copyright */}
          <p
            style={{
              fontFamily: 'var(--font-pixel)',
              fontSize: 40,
              letterSpacing: '0.04em',
              lineHeight: '72%',
              textAlign: 'right',
              marginBottom: 20,
            }}
          >
            ©
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
