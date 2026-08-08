import Link from "next/link"
import { ALL_PROJECTS_DATA } from "@/lib/project-data"
import {
  HeroSection,
  OverviewSection,
  ProblemSection,
  ResearchStrategySection,
  StrategyIdeationSection,
  DesignSolutionSection,
} from "@/components/case-study-v2"
import { CaseStudyBackHeader } from "@/components/case-study-back-header"
import { LenisProvider } from "@/components/lenis-provider"
import { projects } from "@/lib/projects"
import { CaseStudyFooter } from "@/components/case-study"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const data = ALL_PROJECTS_DATA[slug]
  if (!data) return { title: "Project Not Found" }
  return {
    title: `${data.meta.title} | Case Study`,
    description: data.hero.executiveSummary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const data = ALL_PROJECTS_DATA[slug]

  // ── Coming Soon fallback (project exists in list but no case study data yet) ──
  const projectMeta = projects.find((p) => p.slug === slug)
  if (!data) {
    const accentColor = projectMeta?.primaryColor ?? "#B44363"
    return (
      <main className="min-h-screen bg-background flex flex-col">
        {/* Minimal header matching CaseStudyBackHeader style */}
        <header className="w-full bg-background border-b-[3px] border-foreground">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-foreground transition-colors hover:text-primary"
            >
              <span
                className="inline-flex items-center justify-center w-8 h-8 border-[3px] border-foreground rounded-none transition-transform group-hover:-translate-x-1"
                style={{ boxShadow: "3px 3px 0px #494949" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12L6 8l4-4"/></svg>
              </span>
              Back to Work
            </Link>
          </div>
        </header>

        {/* Accent bar matching project color */}
        <div className="h-[6px] w-full" style={{ backgroundColor: accentColor }} />

        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div
            className="max-w-lg w-full bg-background border-[3px] border-foreground rounded-lg p-10 md:p-14 text-center"
            style={{ boxShadow: "8px 8px 0px 0px #494949" }}
          >
            <span
              className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 border-[3px] border-foreground rounded-full mb-6"
              style={{ backgroundColor: accentColor, color: "#fff" }}
            >
              {projectMeta ? `PROJ ${projectMeta.number}` : "Coming Soon"}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight text-balance mb-4">
              {projectMeta?.title ?? "Case Study"}
            </h1>

            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              This case study is currently being written.
              <br />
              Check back soon!
            </p>

            {/* Neo-Brutalism divider */}
            <div className="border-t-[3px] border-foreground mb-10" />

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 border-[3px] border-foreground font-black px-7 py-3 rounded-lg bg-foreground text-background transition-transform hover:-translate-y-1"
              style={{ boxShadow: `6px 6px 0px 0px ${accentColor}` }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 12L6 8l4-4"/></svg>
              Back to Work
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // ── Prev / Next navigation ───────────────────────────────────────────────────
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  const { hero, overview, metrics, problem, research, strategy, solutions } = data

  return (
    <LenisProvider>
      {/* Inject project-specific primary color as CSS variable */}
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary-color: ${data.meta.primaryColor}; }`,
        }}
      />

      <main className="min-h-screen bg-background">
        <CaseStudyBackHeader accentColor={data.meta.primaryColor} />

        {/* 1 ── Hero */}
        <HeroSection
          title={hero.headline}
          executiveSummary={hero.executiveSummary}
          projectColor={data.meta.primaryColor}
          bannerImage={hero.bannerImage}
        />

        {/* 2 ── Overview & Metrics */}
        <OverviewSection
          introduction={overview.introduction}
          coreMessage={overview.coreMessage}
          overviewCards={[
            { title: "My Role",             description: data.meta.role },
            { title: "Timeline",            description: data.meta.timeline },
            { title: "Cross-Functional Team", description: data.meta.team },
            { title: "Tools",               description: data.meta.tools },
          ]}
          metrics={metrics.map((m) => ({
            value:     m.value,
            label:     m.label,
            bgColor:   m.bgColor,
            textColor: m.textColor,
          }))}
        />

        {/* 3 ── The Problem */}
        <ProblemSection
          title={problem.title}
          subtitle={problem.subtitle}
          fullWidthImage={problem.fullWidthImagePlaceholder}
          painPoints={problem.painPoints}
          problemImage={problem.contextImagePlaceholder}
        />

        {/* 4 ── Research & Insights */}
        <ResearchStrategySection
          title={research.title}
          subtitle={research.subtitle}
          insights={research.insights}
          userFlowImage={research.userFlowPlaceholder}
          iaImage={research.iaPlaceholder}
        />

        {/* 5 ── Strategy & Ideation */}
        <StrategyIdeationSection
          title={strategy.title}
          subtitle={strategy.subtitle}
          highlightText={strategy.highlightText}
          cards={strategy.cards}
          userFlowSubtitle={strategy.userFlowSubtitle}
          beforeUserFlowImage={strategy.beforeUserFlowPlaceholder}
          afterUserFlowImage={strategy.afterUserFlowPlaceholder}
          iaImage={strategy.iaPlaceholder}
        />

        {/* 6 ── Design Solution */}
        <DesignSolutionSection
          title={solutions.title}
          subtitle={solutions.subtitle}
          features={solutions.features}
          accessibilityTitle={solutions.accessibilityTitle}
          accessibilityText={solutions.accessibilityText}
          fullWidthImage={solutions.fullWidthImagePlaceholder}
        />

        {/* 7 ── Impact & Next Steps (hidden for now) */}
        {/* <ImpactSection
          title={impact.title}
          chartPlaceholder={impact.chartPlaceholder}
          quote={impact.testimonial.text}
          quoteAuthor={impact.testimonial.author}
          quoteRole={impact.testimonial.title}
        /> */}

        <CaseStudyFooter nextProject={nextProject} prevProject={prevProject} />
      </main>
    </LenisProvider>
  )
}
