export interface TechItem {
	name: string;
	level: number; // 0-100%
	description: string;
	glowColor: string; // Tailwind glow border color class
	iconName: string;
}

export interface TechCategory {
	title: string;
	items: TechItem[];
}

export const techCategories: TechCategory[] = [
	{
		title: 'Frontend Development',
		items: [
			{
				name: 'Svelte',
				level: 90,
				description: 'Reactive UI framework (Svelte 5 runes, SvelteKit)',
				glowColor: 'shadow-orange-500/25 border-orange-500/30 text-orange-400',
				iconName: 'svelte'
			},
			{
				name: 'TypeScript',
				level: 85,
				description: 'Strict syntactical superset of JavaScript',
				glowColor: 'shadow-blue-500/25 border-blue-500/30 text-blue-400',
				iconName: 'typescript'
			},
			{
				name: 'Tailwind CSS',
				level: 95,
				description: 'Utility-first CSS framework for clean styles',
				glowColor: 'shadow-cyan-500/25 border-cyan-500/30 text-cyan-400',
				iconName: 'tailwind'
			},
			{
				name: 'JavaScript',
				level: 95,
				description: 'Modern ES6+ frontend scripting',
				glowColor: 'shadow-yellow-500/25 border-yellow-500/30 text-yellow-400',
				iconName: 'javascript'
			},
			{
				name: 'CSS3',
				level: 92,
				description: 'Advanced layouts, animations, transitions',
				glowColor: 'shadow-blue-600/25 border-blue-600/30 text-blue-500',
				iconName: 'css'
			},
			{
				name: 'HTML5',
				level: 95,
				description: 'Semantic markup, web accessibility, ARIA standard',
				glowColor: 'shadow-red-500/25 border-red-500/30 text-red-400',
				iconName: 'html'
			}
		]
	},
	{
		title: 'Backend Development',
		items: [
			{
				name: 'Laravel',
				level: 88,
				description: 'Modern MVC framework for PHP enterprise apps',
				glowColor: 'shadow-red-600/25 border-red-600/30 text-red-500',
				iconName: 'laravel'
			},
			{
				name: 'PHP',
				level: 90,
				description: 'Server-side language for robust API architectures',
				glowColor: 'shadow-indigo-500/25 border-indigo-500/30 text-indigo-400',
				iconName: 'php'
			},
			{
				name: 'Filament',
				level: 85,
				description: 'Laravel admin panel and rapid form engine',
				glowColor: 'shadow-amber-500/25 border-amber-500/30 text-amber-400',
				iconName: 'filament'
			}
		]
	},
	{
		title: 'Database Systems',
		items: [
			{
				name: 'MySQL',
				level: 85,
				description: 'Relational database management, querying & index tuning',
				glowColor: 'shadow-blue-500/25 border-blue-500/30 text-blue-400',
				iconName: 'mysql'
			},
			{
				name: 'PostgreSQL',
				level: 80,
				description: 'Advanced open-source relational database features',
				glowColor: 'shadow-sky-600/25 border-sky-600/30 text-sky-500',
				iconName: 'postgresql'
			}
		]
	},
	{
		title: 'Development Tools',
		items: [
			{
				name: 'Git',
				level: 90,
				description: 'Distributed version control system & branching workflow',
				glowColor: 'shadow-orange-600/25 border-orange-600/30 text-orange-500',
				iconName: 'git'
			},
			{
				name: 'Docker',
				level: 75,
				description: 'App containerization and dev environment alignment',
				glowColor: 'shadow-cyan-600/25 border-cyan-600/30 text-cyan-500',
				iconName: 'docker'
			},
			{
				name: 'Figma',
				level: 80,
				description: 'Collaborative UI/UX wireframing and prototyping',
				glowColor: 'shadow-purple-500/25 border-purple-500/30 text-purple-400',
				iconName: 'figma'
			}
		]
	}
];
export const floatingIcons = [
	{ name: 'HTML', iconName: 'html', delay: '0s', duration: '10s', x: '10%', y: '15%' },
	{ name: 'CSS', iconName: 'css', delay: '2.5s', duration: '14s', x: '85%', y: '20%' },
	{
		name: 'JavaScript',
		iconName: 'javascript',
		delay: '1.2s',
		duration: '12s',
		x: '75%',
		y: '70%'
	},
	{
		name: 'TypeScript',
		iconName: 'typescript',
		delay: '3.7s',
		duration: '11s',
		x: '20%',
		y: '80%'
	},
	{ name: 'PHP', iconName: 'php', delay: '0.8s', duration: '15s', x: '80%', y: '45%' },
	{ name: 'Laravel', iconName: 'laravel', delay: '4.1s', duration: '13s', x: '15%', y: '50%' },
	{ name: 'Svelte', iconName: 'svelte', delay: '1.9s', duration: '9s', x: '45%', y: '85%' },
	{ name: 'Tailwind', iconName: 'tailwind', delay: '3.2s', duration: '10s', x: '50%', y: '10%' },
	{ name: 'Git', iconName: 'git', delay: '0.5s', duration: '16s', x: '90%', y: '85%' },
	{ name: 'MySQL', iconName: 'mysql', delay: '2.2s', duration: '12s', x: '5%', y: '90%' }
];
