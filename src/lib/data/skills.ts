export interface Skill {
	name: string;
	percentage: number;
	color: string; // Tailwind accent color classes
	iconName: string;
}

export const skills: Skill[] = [
	{ name: 'HTML', percentage: 95, color: 'text-red-500', iconName: 'html' },
	{ name: 'CSS', percentage: 92, color: 'text-blue-500', iconName: 'css' },
	{ name: 'Svelte', percentage: 90, color: 'text-orange-500', iconName: 'svelte' },
	{ name: 'Laravel', percentage: 88, color: 'text-red-600', iconName: 'laravel' },
	{ name: 'PHP', percentage: 90, color: 'text-indigo-400', iconName: 'php' },
	{ name: 'Tailwind', percentage: 95, color: 'text-cyan-400', iconName: 'tailwind' },
	{ name: 'TypeScript', percentage: 85, color: 'text-blue-400', iconName: 'typescript' },
	{ name: 'MySQL', percentage: 85, color: 'text-sky-500', iconName: 'mysql' }
];
