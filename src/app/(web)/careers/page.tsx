import Link from 'next/link'

export default function Careers() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center"
        style={{ padding: '120px 36px 144px', maxWidth: 1120 }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 48,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: 48,
          }}
        >
          CAREERS
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 100,
            lineHeight: 1.6,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          We are hiring researchers in grid optimization in ML space. Mail us
          for more info at{' '}
          <a
            href="mailto:seiolelabs@gmail.com"
            className="underline text-black"
          >
            seiolelabs@gmail.com
          </a>
        </p>
        <Link
          href="/"
          className="no-underline text-black mt-12"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 20,
            textDecoration: 'underline',
          }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
