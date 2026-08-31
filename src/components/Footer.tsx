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
            fontFamily: '"EB Garamond", serif',
            fontSize: 32,
            fontWeight: 100,
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Help build the future of Energy
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
              fontFamily: '"VT323", monospace',
              fontSize: 28,
              letterSpacing: '0.03em',
            }}
          >
            Join our team
          </span>
          <span
            style={{
              fontFamily: '"VT323", monospace',
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
                fontFamily: '"EB Garamond", serif',
                fontSize: 18,
                fontWeight: 100,
              }}
            >
              Home
            </Link>
            <Link
              href="/#posts"
              className="no-underline text-black"
              style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: 18,
                fontWeight: 100,
              }}
            >
              Posts
            </Link>
            <a
              href="mailto:seiolelabs@gmail.com"
              className="no-underline text-black"
              style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: 18,
                fontWeight: 100,
              }}
            >
              Contact
            </a>
            <Link
              href="/careers"
              className="no-underline text-black"
              style={{
                fontFamily: '"EB Garamond", serif',
                fontSize: 18,
                fontWeight: 100,
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
            marginBottom: 40,
          }}
        />

        <div
          className="w-full flex flex-row items-end justify-between"
          style={{ maxWidth: 1120 }}
        >
          {/* Logo */}
          <p
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: 60,
              letterSpacing: '0.04em',
              lineHeight: '72%',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            SEIOLE<br />
            LABS
          </p>

          {/* Copyright */}
          <p
            style={{
              fontFamily: '"VT323", monospace',
              fontSize: 60,
              letterSpacing: '0.04em',
              lineHeight: '72%',
              textAlign: 'right',
              margin: 0,
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
