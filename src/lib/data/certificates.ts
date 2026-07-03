export interface Certificate {
	id: string;
	name: string;
	publisher: string;
	year: string;
	credentialUrl?: string;
	gradient: string;
	category: string;
}

export const certificates: Certificate[] = [
	{
		id: 'cert-laravel-adv',
		name: 'Advanced Laravel Application Development',
		publisher: 'Laracasts',
		year: '2024',
		credentialUrl: 'https://laracasts.com',
		gradient: 'from-red-500/20 via-orange-500/10 to-transparent',
		category: 'Backend'
	},
	{
		id: 'cert-svelte-expert',
		name: 'Svelte & SvelteKit Masterclass',
		publisher: 'Svelte Society',
		year: '2024',
		credentialUrl: 'https://svelte.dev',
		gradient: 'from-orange-500/20 via-pink-500/10 to-transparent',
		category: 'Frontend'
	},
	{
		id: 'cert-aws-cloud',
		name: 'AWS Certified Cloud Practitioner',
		publisher: 'Amazon Web Services',
		year: '2025',
		credentialUrl: 'https://aws.amazon.com',
		gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
		category: 'Cloud'
	},
	{
		id: 'cert-ef-english',
		name: 'EF SET English Certificate (C2 Proficient)',
		publisher: 'EF Education First',
		year: '2023',
		credentialUrl: 'https://www.efset.org',
		gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
		category: 'Language'
	},
	{
		id: 'cert-fullstack-dicoding',
		name: 'Menjadi Full-Stack Developer Expert',
		publisher: 'Dicoding Indonesia',
		year: '2024',
		credentialUrl: 'https://dicoding.com',
		gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent',
		category: 'Fullstack'
	},
	{
		id: 'cert-js-algorithms',
		name: 'JavaScript Algorithms & Data Structures',
		publisher: 'freeCodeCamp',
		year: '2023',
		credentialUrl: 'https://freecodecamp.org',
		gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
		category: 'Algorithms'
	}
];
