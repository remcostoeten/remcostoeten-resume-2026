export interface ResumeBasics {
	name: string
	title: string
	location: string
	email: string
	phone: string
	site: string
	github: string
	linkedin: string
}

export interface Experience {
	company: string
	role: string
	period: string
	bullets: string[]
}

export interface Education {
	institution: string
	degree: string
	period: string
	description?: string
}

export interface Project {
	name: string
	desc: string
	link: string
	github?: string
	category?: string
	note?: string
}

export interface Skills {
	frontend: string[]
	backend: string[]
	tools: string[]
	apis: string[]
	testing: string[]
}

export interface Language {
	name: string
	level: string
}

export interface Resume {
	basics: ResumeBasics
	summary: string[]
	experience: Experience[]
	education: Education[]
	projects: Project[]
	skills: Skills
	languages: Language[]
}

export const resumeData: Resume = {
	basics: {
		name: 'Remco Stoeten',
		title: 'Front End Engineer, TypeScript and React (Next.js)',
		location: 'Lemmer, The Netherlands',
		email: 'stoetenremco.rs@gmail.com',
		phone: '+31 6 36590707',
		site: 'https://remcostoeten-nl.vercel.app',
		github: 'https://github.com/remcostoeten',
		linkedin: 'https://linkedin.com/in/remco-stoeten'
	},
	summary: [
		'Front-end engineer specialized in React, Next.js and TypeScript with a degree in **graphic design** and over eight years of experience across **B2B/B2C e-commerce, open-source govtech, large-scale SaaS, and e-learning**.',
		'**Strong product mindset** with a focus on **performance, accessibility, and user experience**. Comfortable working remotely, in hybrid teams, and across methodologies like Scrum, Kanban, and Shape Up.',
		'Actively integrating **AI APIs** into products and using AI to enhance **developer experience** and internal tooling.'
	],
	experience: [
		{
			company: 'Brainstud / Allyoucanlearn',
			role: 'Front End Developer',
			period: '2025 — Present',
			bullets: [
				'Building an e-learning platform with Next.js, TypeScript and React Query serving multiple educational institutions.',
				'Actively promoting and pitching AI implementations and cutting-edge solutions to fix performance bottlenecks.',
				'Delivering scoped features end-to-end under the Shape Up methodology in six-week cycles.',
				'Integrating with a Laravel backend through a custom REST layer, coordinating across front-end and back-end teams.'
			]
		},
		{
			company: 'Pleio',
			role: 'Front End Developer',
			period: '2023 — 2025',
			bullets: [
				'Worked on fully open-source government platforms used by multiple Dutch ministries and municipalities, built with React + GraphQL.',
				'Rebuilt the FSV (Fraude Signalering Voorziening) front-end from a monolithic CSS file into a custom SASS framework with variables, mixins and modular architecture for improved maintainability.',
				'Helped maintain and extend a core intranet site builder relied on by government institutions across the Netherlands.',
				'Brought existing applications in line with WCAG AA accessibility standards.',
				'Actively promoted the migration to TypeScript and pitched architecture changes for state management and performance increase.'
			]
		},
		{
			company: 'Lasaulec / Distil',
			role: 'Software Developer',
			period: '2022 — 2023',
			bullets: [
				'Rebuilt legacy shop to a fully semantic, accessible, and modern ES6+ maintainable codebase.',
				'Worked independently on React-based internal tools, shipping features from design to production.'
			]
		},
		{
			company: 'Tickles',
			role: 'Front End Developer',
			period: '2016 — 2022',
			bullets: [
				'Built and maintained custom Magento 2 webshops for a range of B2B and B2C clients.',
				'Handled front-end implementation across multiple projects, working with PHTML templates, BEM/SCSS and JavaScript.',
				'Grew from junior to a self-sufficient front-end developer over six years, taking increasing ownership of projects and client deliveries.'
			]
		}
	],
	education: [
		{
			institution: 'ROC Friese Poort Sneek',
			degree: 'Graphic Design Degree',
			period: '2012 — 2016',
			description: 'Focused on UI/UX and human-centered design, with the final two years and internships dedicated entirely to interactive web design.'
		}
	],
	projects: [
		{
			name: 'Beautiful Code Block',
			desc: 'React component for displaying syntax-highlighted code blocks with search, line numbers, and interactive features.',
			link: 'https://beautiful-codeblock.vercel.app/',
			category: 'ui-component'
		},
		{
			name: 'Beautiful File Tree',
			desc: 'React component for visualizing project folder structures with interactive tree views and customization options.',
			link: 'https://beautiful-file-tree-v2.vercel.app',
			category: 'ui-component'
		},
		{
			name: 'Skriuw',
			desc: 'Built a comprehensive note-taking app featuring a block editor, wikilinks, and AI integration. Delivers a native-like experience across web, PWA, and desktop with extensive keyboard shortcut support. Stack: Next.js, Rust (Tauri), Golang, TypeScript, Tailwind CSS.',
			link: 'https://skriuw.vercel.app',
			github: 'https://github.com/remcostoeten/skriuw',
			category: 'app',
			note: 'In active development'
		},
		{
			name: 'Zentjes',
			desc: 'Personal wealth, bill splitter, and finance tracker. Built with HonoJS, Next.js, Tailwind CSS, and PostgreSQL.',
			link: 'https://zentjes.vercel.app',
			category: 'app',
			note: 'In active development'
		},
		{
			name: 'Dora',
			desc: 'A sub-10MB, performant database client built with React, Rust and Tauri. Features a spreadsheet-like interface for PostgreSQL/SQLite/LibSQL that runs fully offline with zero telemetry on all operating systems.',
			link: 'https://doradb.vercel.app',
			github: 'https://github.com/remcostoeten/dora',
			category: 'app',
			note: 'In active development'
		}
	],
	skills: {
		frontend: ['TypeScript', 'React', 'Next.js', 'CSS (Tailwind, SCSS, Modules)'],	
		backend: ['Node.js', 'Hono', 'PostgreSQL', 'SQLite', 'Drizzle ORM', 'Prisma', 'Serverless'],
		apis: ['REST', 'GraphQL', 'tRPC'],
		tools: ['Git', 'Docker', 'Unix', 'Shell', 'JS runtimes & package managers','CI/CD'],
		testing: ['Playwright', 'Vitest', 'WCAG/a11y']
	},
	languages: [
		{ name: 'Dutch', level: 'Native' },
		{ name: 'Frisian', level: 'Native' },
		{ name: 'English', level: 'Professional' }
	]
}
