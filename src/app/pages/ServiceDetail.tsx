import { Link, useParams, Navigate } from 'react-router';
import { Target, TrendingUp, Users, BarChart3, Lightbulb, Headphones, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';

const services = [
  {
    slug: 'revenue-strategy',
    icon: Target,
    title: 'Revenue Strategy',
    tagline: 'RevenueStorm™',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    summary: 'A proven framework to diagnose revenue bottlenecks, sharpen your market position, and build a clear roadmap to predictable, scalable growth.',
    overview: 'Most B2B companies struggle with revenue not because they lack effort, but because they lack alignment. Our RevenueStorm™ framework brings strategy, marketing, and sales into a single unified system — giving your leadership team a clear picture of where growth is stalling and exactly how to fix it.',
    benefits: [
      'Pinpoint the exact bottlenecks holding back revenue growth',
      'Build a compelling market position that differentiates you from competitors',
      'Create a prioritised 90-day growth roadmap your team can act on immediately',
      'Align leadership, sales, and marketing around shared revenue goals',
      'Establish KPIs and accountability structures that stick',
    ],
    includes: [
      { title: 'Revenue Bottleneck Assessment', desc: 'A structured audit of your pipeline, win/loss patterns, and go-to-market motion to surface the highest-impact improvement areas.' },
      { title: 'Market Positioning Workshop', desc: 'Facilitated sessions with your team to craft messaging that resonates with buyers and differentiates you from the competition.' },
      { title: 'Pipeline Audit', desc: 'End-to-end review of your current pipeline health, stage conversion rates, and forecast accuracy.' },
      { title: 'Growth Roadmap', desc: 'A prioritised, time-bound action plan with clear owners, milestones, and success metrics.' },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Stakeholder interviews, data review, and competitive analysis to understand your current state.' },
      { step: '02', title: 'Diagnosis', desc: 'Identify root causes of revenue stagnation and quantify the opportunity.' },
      { step: '03', title: 'Strategy Design', desc: 'Co-create positioning, ICP definition, and go-to-market approach.' },
      { step: '04', title: 'Roadmap Delivery', desc: 'Present a clear, actionable plan with quick wins and long-term initiatives.' },
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    cta: 'Book a Revenue Strategy Session',
  },
  {
    slug: 'demand-generation',
    icon: TrendingUp,
    title: 'Demand Generation',
    tagline: 'Pipeline That Converts',
    heroImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80',
    summary: 'Integrated, data-driven campaigns that build awareness, engage your ideal buyers, and consistently fill your pipeline with qualified opportunities.',
    overview: 'Demand generation is not about blasting ads or buying lists. It\'s about showing up in the right place, at the right time, with the right message. Our integrated approach combines account-based marketing, content strategy, and marketing automation to create a demand engine that runs reliably month after month.',
    benefits: [
      'Consistent flow of qualified pipeline without dependency on outbound alone',
      'Higher conversion rates through targeted account-based campaigns',
      'Shorter sales cycles driven by better-educated, more engaged prospects',
      'Full visibility into campaign performance and ROI',
      'Scalable demand programmes that grow with your business',
    ],
    includes: [
      { title: 'Account-Based Marketing', desc: 'Target your highest-value accounts with personalised campaigns across multiple channels.' },
      { title: 'Marketing Automation', desc: 'Build nurture flows that keep prospects engaged and move them down the funnel automatically.' },
      { title: 'Content Strategy', desc: 'Develop thought leadership content that attracts, educates, and converts your target buyers.' },
      { title: 'Lead Scoring', desc: 'Implement scoring models that ensure sales focuses only on the most sales-ready leads.' },
    ],
    process: [
      { step: '01', title: 'ICP Definition', desc: 'Define your ideal customer profile and target account list.' },
      { step: '02', title: 'Channel Strategy', desc: 'Select and prioritise the channels where your buyers spend time.' },
      { step: '03', title: 'Campaign Build', desc: 'Create messaging, assets, and automation workflows.' },
      { step: '04', title: 'Launch & Optimise', desc: 'Go live, measure results, and continuously improve performance.' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    cta: 'Build Your Demand Engine',
  },
  {
    slug: 'sales-enablement',
    icon: Users,
    title: 'Sales Enablement',
    tagline: 'Turn Reps Into Revenue',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    summary: 'Equip your sales team with the playbooks, tools, coaching, and systems they need to win more deals, faster — and do it consistently.',
    overview: 'Great salespeople rarely fail because of effort. They fail because they lack the right tools, messaging, and process. Our sales enablement programmes close that gap — from building world-class playbooks to coaching reps on value selling and optimising your CRM so your pipeline is always clean and accurate.',
    benefits: [
      'Higher win rates through consistent, value-driven sales conversations',
      'Faster ramp time for new sales hires',
      'Improved forecast accuracy with a clean, well-managed pipeline',
      'Reduced reliance on a handful of top performers',
      'Sales and marketing aligned on messaging and handoff process',
    ],
    includes: [
      { title: 'Sales Playbooks', desc: 'Documented frameworks for discovery, objection handling, and closing — tailored to your buyers and competitive landscape.' },
      { title: 'Coaching Programs', desc: 'Structured 1:1 and group coaching sessions that build repeatable selling skills across the team.' },
      { title: 'Pipeline Management', desc: 'Define stage criteria, inspection cadences, and deal review processes that keep your pipeline healthy.' },
      { title: 'CRM Optimisation', desc: 'Audit and overhaul your CRM setup so reps spend time selling, not updating records.' },
    ],
    process: [
      { step: '01', title: 'Sales Audit', desc: 'Review current process, win/loss data, and rep capability gaps.' },
      { step: '02', title: 'Playbook Design', desc: 'Build customised playbooks and messaging guides.' },
      { step: '03', title: 'Training & Rollout', desc: 'Deliver training sessions and embed new tools into daily workflow.' },
      { step: '04', title: 'Coaching & Reinforcement', desc: 'Ongoing coaching to reinforce skills and track improvement.' },
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    cta: 'Enable Your Sales Team',
  },
  {
    slug: 'revenue-intelligence',
    icon: BarChart3,
    title: 'Revenue Intelligence',
    tagline: 'Know Your Numbers',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    summary: 'Executive-grade dashboards, forecasting models, and performance analytics that give your leadership team complete clarity on revenue performance.',
    overview: 'You cannot manage what you cannot measure. Yet most B2B companies are running their revenue operations on gut feel and disconnected spreadsheets. Our Revenue Intelligence service builds the data infrastructure, dashboards, and reporting cadences that give you real-time visibility into what\'s working, what\'s not, and where to double down.',
    benefits: [
      'Real-time visibility into pipeline health and forecast accuracy',
      'Early warning signals for deals at risk before it\'s too late',
      'Board-ready reporting that tells a clear revenue story',
      'Data-driven decisions replacing gut-feel management',
      'Unified view across marketing, sales, and customer success',
    ],
    includes: [
      { title: 'Executive Dashboards', desc: 'Custom-built dashboards that surface the metrics that matter most to your leadership team in one place.' },
      { title: 'Revenue Forecasting', desc: 'Predictive forecasting models that give leadership confidence in future revenue projections.' },
      { title: 'Performance Analytics', desc: 'Deep-dive analysis of rep performance, campaign ROI, and pipeline conversion rates.' },
      { title: 'Board Reporting', desc: 'Narrative-driven board packs that translate complex data into clear business stories.' },
    ],
    process: [
      { step: '01', title: 'Data Audit', desc: 'Assess existing data quality, sources, and gaps.' },
      { step: '02', title: 'KPI Framework', desc: 'Define the metrics that matter for your business stage and goals.' },
      { step: '03', title: 'Dashboard Build', desc: 'Design and build dashboards in your existing tech stack.' },
      { step: '04', title: 'Cadence & Training', desc: 'Establish reporting cadences and train the team on data-driven decision making.' },
    ],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    cta: 'Get Revenue Clarity',
  },
  {
    slug: 'marketing-automation',
    icon: Lightbulb,
    title: 'Marketing Automation',
    tagline: 'Scale Without Chaos',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    summary: 'Optimise and scale your marketing technology stack so your team spends less time on manual tasks and more time on high-impact growth activities.',
    overview: 'Marketing teams waste enormous time on repetitive manual tasks that should be automated. Our Marketing Automation service audits your current mar-tech stack, eliminates the waste, and builds intelligent workflows that nurture leads, trigger timely follow-ups, and keep your CRM clean — all without adding headcount.',
    benefits: [
      'Dramatically reduce time spent on manual marketing tasks',
      'Nurture more leads simultaneously without losing personalisation',
      'Faster lead response times that increase conversion rates',
      'Seamless handoff between marketing and sales',
      'Full visibility into what touchpoints drive pipeline and revenue',
    ],
    includes: [
      { title: 'Platform Setup & Audit', desc: 'Assess your current mar-tech stack, remove redundancies, and configure platforms correctly.' },
      { title: 'Workflow Automation', desc: 'Build intelligent nurture sequences, trigger-based emails, and internal notifications.' },
      { title: 'Lead Scoring', desc: 'Implement behavioural and demographic scoring to surface the hottest leads for sales.' },
      { title: 'Integration Management', desc: 'Connect your CRM, marketing platform, and sales tools into a seamless data flow.' },
    ],
    process: [
      { step: '01', title: 'Stack Audit', desc: 'Review existing tools, integrations, and automation gaps.' },
      { step: '02', title: 'Architecture Design', desc: 'Design the optimal tech stack and workflow logic.' },
      { step: '03', title: 'Build & Integrate', desc: 'Configure platforms, build workflows, and connect integrations.' },
      { step: '04', title: 'Test & Launch', desc: 'QA all workflows, train the team, and go live.' },
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    cta: 'Automate Your Marketing',
  },
  {
    slug: 'executive-advisory',
    icon: Headphones,
    title: 'Executive Advisory',
    tagline: 'Strategic Counsel',
    heroImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
    summary: 'On-demand access to 30+ years of revenue leadership expertise — strategic counsel that helps CEOs and revenue leaders navigate complexity and accelerate growth.',
    overview: 'Sometimes you need a trusted thought partner who has been in your shoes. Our Executive Advisory service gives CEOs, CROs, and CMOs direct access to senior revenue expertise — whether you\'re navigating a growth plateau, preparing for a fundraise, integrating an acquisition, or simply need a sounding board for your biggest decisions.',
    benefits: [
      'Objective outside perspective from an experienced revenue leader',
      'Faster, more confident decision-making on complex strategic issues',
      'Access to best practices from 500+ B2B engagements',
      'Accountability and follow-through on strategic initiatives',
      'Credibility with your board and investors',
    ],
    includes: [
      { title: 'Strategic Planning', desc: 'Annual and quarterly planning sessions to set direction and align leadership on priorities.' },
      { title: 'Revenue Reviews', desc: 'Regular deep-dives into revenue performance, pipeline health, and growth initiatives.' },
      { title: 'Team Coaching', desc: 'Direct coaching and development for your revenue leadership team.' },
      { title: 'M&A Integration', desc: 'Expert guidance on revenue integration and go-to-market alignment post-acquisition.' },
    ],
    process: [
      { step: '01', title: 'Onboarding', desc: 'Deep-dive into your business, team, and growth challenges.' },
      { step: '02', title: 'Priority Setting', desc: 'Agree on the highest-value areas of focus for the engagement.' },
      { step: '03', title: 'Regular Cadence', desc: 'Structured advisory sessions, ad-hoc availability, and team interactions.' },
      { step: '04', title: 'Impact Review', desc: 'Quarterly reviews of progress, impact, and adjusted priorities.' },
    ],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    cta: 'Talk to an Advisor',
  },
];

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/solutions" replace />;

  const Icon = service.icon;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const otherServices = services.filter((_, i) => i !== currentIndex);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section
        className="relative py-32 min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
        <div className="w-full px-4 sm:px-6 lg:px-8 pl-[calc(1rem+45px)] sm:pl-[calc(1.5rem+45px)] lg:pl-[calc(2rem+45px)] relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.title}</span>
            </div>
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">{service.tagline}</p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">{service.summary}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Overview</p>
              <h2 className="text-4xl font-black text-primary mb-6">What We Do</h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg hover:brightness-110 hover:shadow-lg transition-all duration-300 group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-[480px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Why It Works</p>
            <h2 className="text-4xl font-black text-primary mb-3">Key Benefits</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Deliverables</p>
            <h2 className="text-4xl font-black text-primary mb-3">What's Included</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {service.includes.map((item) => (
              <div key={item.title} className="bg-white p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-black text-primary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">How We Work</p>
            <h2 className="text-4xl font-black text-white mb-3">Our Process</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {service.process.map((step) => (
              <div key={step.step} className="bg-primary p-10 hover:bg-primary/80 transition-colors">
                <div className="text-5xl font-black text-accent/40 mb-4">{step.step}</div>
                <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto pl-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Explore More</p>
            <h2 className="text-4xl font-black text-primary mb-3">Other Solutions</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {otherServices.slice(0, 3).map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  className="bg-white p-10 hover:bg-gray-50 transition-colors group"
                >
                  <SIcon className="w-10 h-10 text-accent mb-4" />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">{s.tagline}</div>
                  <h3 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.summary.substring(0, 100)}...</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pl-4 text-center">
          <p className="text-sm uppercase tracking-wider text-accent mb-4 font-semibold">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-3">
            Ready to <span className="text-accent">Get Started?</span>
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground mb-10">
            Book a free assessment — no commitment required
          </p>
          <Button to="/contact">{service.cta}</Button>
        </div>
      </section>
    </div>
  );
}
