import Link from 'next/link'

export default function MyGrid() {
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
          MYGRID V1
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          Launching soon..
        </p>
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 720,
            aspectRatio: '16 / 9',
            marginTop: 48,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/pzdtAPo-3EQ"
            title="Mygrid tool demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
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
