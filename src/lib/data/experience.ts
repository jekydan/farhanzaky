export interface ProjectDone {
	name: string;
	category: string;
	description: string;
	tech: string[];
}

export interface Experience {
	company: string;
	position: string;
	period: string;
	description: string;
	tech: string[];
	projects?: ProjectDone[];
}

export const experiences: Experience[] = [
	{
		company: 'PT. Pinus Pintar Teknologi',
		position: 'Fullstack Web Developer Intern',
		period: 'Februari 2024 - Agustus 2024',
		description:
			'Membangun dan mengembangkan aplikasi web skala enterprise, berkolaborasi dalam tim lincah (agile) untuk menghadirkan fitur-fitur berkinerja tinggi, modular, dan terstruktur rapi.',
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'Filament', 'MySQL'],
		projects: [
			{
				name: 'sekol.deployaja.id',
				category: 'School Management System',
				description:
					'Membangun sistem manajemen sekolah yang digunakan untuk mengelola data siswa, guru, kelas, mata pelajaran, absensi, dan administrasi sekolah secara terpusat.',
				tech: ['PHP', 'Laravel', 'Filament']
			},
			{
				name: 'crm.deployaja.id',
				category: 'CRM System',
				description:
					'Membangun Customer Relationship Management untuk membantu perusahaan mengelola pelanggan, pipeline, aktivitas sales, dan monitoring bisnis secara real-time.',
				tech: ['Svelte', 'TypeScript', 'Tailwind CSS']
			},
			{
				name: 'KickUp',
				category: 'Talent Management System',
				description:
					'Mengembangkan Talent Management System untuk mengelola data karyawan, performa, penilaian, dan perkembangan SDM yang komprehensif.',
				tech: ['Svelte', 'TypeScript', 'Tailwind CSS']
			}
		]
	},
	{
		company: 'PT. Jago Talenta Indonesia',
		position: 'Fullstack Web Developer',
		period: 'Agustus 2024 - Sekarang',
		description:
			'Merancang, mengimplementasikan, dan memelihara aplikasi manajemen talenta internal dan eksternal. Meningkatkan keandalan backend serta merancang alur kerja data yang efisien.',
		tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL', 'Git'],
		projects: [
			{
				name: 'Talent Management System',
				category: 'Talent Management System',
				description:
					'Mengembangkan aplikasi Talent Management berbasis web menggunakan Laravel dengan interaksi antarmuka yang cepat serta fitur pelaporan yang dinamis.',
				tech: ['PHP', 'Laravel', 'Bootstrap']
			}
		]
	}
];
