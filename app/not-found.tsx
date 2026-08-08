import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="w-full bg-background border-b-[3px] border-foreground">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 border-[3px] border-foreground rounded-none transition-transform group-hover:-translate-x-1"
              style={{ boxShadow: "3px 3px 0px #494949" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12L6 8l4-4" />
              </svg>
            </span>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Accent bar */}
      <div className="h-[6px] w-full bg-primary" />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div
          className="max-w-lg w-full bg-background border-[3px] border-foreground rounded-lg p-10 md:p-14 text-center"
          style={{ boxShadow: "8px 8px 0px 0px #494949" }}
        >
          <span className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 border-[3px] border-foreground rounded-full mb-6 bg-foreground text-background">
            404
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight text-balance mb-4">
            Page not found.
          </h1>

          <p className="text-foreground/60 text-lg leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>

          <div className="border-t-[3px] border-foreground mb-10" />

          <Link
            href="/"
            className="inline-flex items-center gap-3 border-[3px] border-foreground font-black px-7 py-3 rounded-lg bg-foreground text-background transition-transform hover:-translate-y-1"
            style={{ boxShadow: "6px 6px 0px 0px #B44363" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
