'use client';
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { LandingGeneralProps } from '@/types/LandingTypes'
import { Compass, Edit3, Code, ShieldCheck, Rocket, RefreshCw } from 'lucide-react'

const steps = [
  {
    title: 'Discovery & Planning',
    desc: 'We align on business goals, user needs and constraints. Scope, priorities and a clear roadmap are set collaboratively.'
  },
  {
    title: 'Design & Prototyping',
    desc: 'Usability-first interfaces and interactive prototypes validate ideas early and ensure stakeholder alignment.'
  },
  {
    title: 'Agile Development',
    desc: 'Short, focused sprints deliver working increments every 1–2 weeks so you see progress and can steer outcomes.'
  },
  {
    title: 'Quality Assurance',
    desc: 'Automated and manual testing across functionality, performance and security protects product quality.'
  },
  {
    title: 'Deployment & Launch',
    desc: 'Predictable releases with monitoring and rollback plans to minimise downtime and business risk.'
  },
  {
    title: 'Support & Evolution',
    desc: 'Post-launch monitoring, feedback loops and continuous improvements keep your product delivering value.'
  }
]

// use Lucide icons (bigger by default with responsive Tailwind classes)
const getStepIcon = (idx: number, dark: boolean | undefined) => {
  const colorClass = dark ? 'text-secondary' : 'text-primary'
  const sizeClasses = `${colorClass} w-6 h-6`
  const common = { className: sizeClasses, strokeWidth: 1.75 }

  switch (idx) {
    case 0:
      return <Compass {...common} aria-hidden />
    case 1:
      return <Edit3 {...common} aria-hidden />
    case 2:
      return <Code {...common} aria-hidden />
    case 3:
      return <ShieldCheck {...common} aria-hidden />
    case 4:
      return <Rocket {...common} aria-hidden />
    default:
      return <RefreshCw {...common} aria-hidden />
  }
}

const LandingSoftwareDevelopmentSection: FC<LandingGeneralProps> = ({ DarkModeActive }) => {
  const textClass = DarkModeActive ? 'text-white' : 'text-slate-900'
  const lineClass = DarkModeActive ? 'bg-secondary' : 'bg-primary'
  const mutedClass = DarkModeActive ? 'text-textLight' : 'text-textSecondary'
  
  const handleExploreClick = () => {
    const el = document.getElementById('process-timeline')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
<div className='px-12 py-8 lg:px-36 lg:py-10 2xl:px-[384px]'>      <div className="max-w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <h1 className={`${textClass} text-3xl font-semibold lg:text-5xl`}>
              Our <span className="text-primary">Development Process</span>
            </h1>
            <p
            className={`leading-normal ${DarkModeActive ? 'w-full pt-6 text-justify text-base font-normal text-textLight lg:text-[20px]' : 'w-full pt-6 text-justify text-base font-normal text-textSecondary lg:text-[20px]'}`}
          >
              We build software the right way—agile, client-first, and results-driven. From discovery to continuous evolution, we prioritise clarity, rapid delivery, and shared accountability.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <Button
              variant="priamryex"
              size="mdex"
              className="w-full max-w-[160px] text-base font-semibold"
              onClick={handleExploreClick}
            >
              Explore Steps
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-10" id="process-timeline">
          {/* vertical line for large screens */}
          <div className={`hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 ${lineClass}`} aria-hidden="true" />

          <ol className="space-y-8 lg:space-y-0 lg:divide-none">
            {steps.map((step, idx) => {
  const isLeft = idx % 2 === 0
  return (
    <li key={step.title} className="relative">
      {/* mobile layout — HIDE on lg so desktop block is the only one on large screens */}
      <div className="flex flex-col lg:hidden">
        <div className={`relative p-4 rounded-lg border bg-gradientBg ${DarkModeActive ? 'border-slate-700' : 'border-slate-200'}`}>
          <h3 className={`font-medium ${textClass}`}>{step.title}</h3>
          <p className={`mt-2 text-sm ${mutedClass}`}>{step.desc}</p>

          {/* topic icon in card top-right (mobile) */}
          <div className="absolute top-3 right-3">
            {getStepIcon(idx, DarkModeActive)}
          </div>
        </div>
      </div>

      {/* desktop layout (visible only on lg) */}
      <div className="hidden lg:block">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className={`lg:w-1/2 ${isLeft ? '' : 'invisible'}`}>
            <div className={`relative p-4 rounded-lg border bg-gradientBg ${DarkModeActive ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`font-medium ${textClass}`}>{isLeft ? step.title : ''}</h3>
              <p className={`mt-2 text-sm ${mutedClass}`}>{isLeft ? step.desc : ''}</p>

              {/* topic icon in card top-right (desktop left card) */}
              <div className="absolute top-3 right-3">
                {getStepIcon(idx, DarkModeActive)}
              </div>
            </div>
          </div>

          <div className="w-10" />{/* spacer over the center line */}

          <div className={`lg:w-1/2 ${!isLeft ? '' : 'invisible'}`}>
            <div className={`relative p-4 rounded-lg border bg-gradientBg ${DarkModeActive ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`font-medium ${textClass}`}>{!isLeft ? step.title : ''}</h3>
              <p className={`mt-2 text-sm ${mutedClass}`}>{!isLeft ? step.desc : ''}</p>

              {/* topic icon in card top-right (desktop right card) */}
              <div className="absolute top-3 right-3">
                {getStepIcon(idx, DarkModeActive)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
})}
          </ol>
        </div>
      </div>
    </div>
  )
}


export default LandingSoftwareDevelopmentSection
