export interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	longDescription: string;
	tech: string[];
	githubUrl?: string;
	demoUrl?: string;
	features: string[];
	gradient: string;
}

export const projects: Project[] = [
	{
		id: 'crm-system',
		title: 'crm.deployaja.id',
		category: 'CRM System',
		description:
			'Sistem Manajemen Hubungan Pelanggan (CRM) untuk memonitor pipeline penjualan, mengelola interaksi pelanggan, dan visualisasi aktivitas bisnis.',
		longDescription:
			'Membangun Customer Relationship Management (CRM) berkinerja tinggi untuk mempermudah bisnis memantau prospek penjualan, mengelola log aktivitas sales, dan menganalisis metrik keuangan perusahaan dalam satu dashboard interaktif.',
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Vite', 'ChartJS'],
		githubUrl: 'https://github.com/farhanzaky/crm-deployaja',
		demoUrl: 'https://crm.deployaja.id',
		features: [
			'Pipeline Sales interaktif dengan Drag & Drop',
			'Analisis metrik pendapatan bulanan & kuartalan',
			'Manajemen database kontak pelanggan terenkripsi',
			'Sistem pengingat otomatis untuk follow-up klien'
		],
		gradient: 'from-blue-600 via-indigo-600 to-purple-600'
	},
	{
		id: 'kickup',
		title: 'KickUp',
		category: 'Talent Management System',
		description:
			'Sistem evaluasi kinerja karyawan, pelacakan kompetensi, dan peninjauan perkembangan SDM secara berkala.',
		longDescription:
			'Sistem manajemen SDM modern yang memfasilitasi penilaian kinerja (KPI/OKR), survei feedback 360 derajat, dan peta jalan pengembangan kompetensi karyawan di PT. Pinus Pintar Teknologi.',
		tech: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Svelte-Store'],
		githubUrl: 'https://github.com/farhanzaky/kickup-tms',
		demoUrl: 'https://kickup.deployaja.id', // example demo
		features: [
			'Penilaian performa menggunakan Key Performance Indicators (KPI)',
			'Feedback 360-derajat anonim antar karyawan',
			'Visualisasi bagan organisasi & kompetensi skill matrix',
			'Laporan evaluasi komprehensif berformat PDF'
		],
		gradient: 'from-purple-600 via-pink-600 to-red-600'
	},
	{
		id: 'school-management',
		title: 'sekol.deployaja.id',
		category: 'School Management System',
		description:
			'Sistem informasi sekolah komprehensif untuk mengelola data siswa, guru, jadwal pelajaran, absensi, dan administrasi keuangan.',
		longDescription:
			'Sistem manajemen sekolah berskala enterprise yang dirancang khusus untuk memotong birokrasi administrasi sekolah. Membantu sinkronisasi absensi real-time, cetak rapor otomatis, dan penjadwalan kelas.',
		tech: ['PHP', 'Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
		githubUrl: 'https://github.com/farhanzaky/sekolah-deployaja',
		demoUrl: 'https://sekol.deployaja.id',
		features: [
			'Panel admin Filament yang sangat cepat dan intuitif',
			'Manajemen data guru, siswa, & wali kelas secara terpadu',
			'Sistem rekap absensi harian & bulanan otomatis',
			'Modul SPP & administrasi keuangan sekolah dengan kwitansi digital'
		],
		gradient: 'from-cyan-500 via-teal-500 to-emerald-500'
	},
	{
		id: 'jago-talent',
		title: 'JagoTalent System',
		category: 'Talent Management System',
		description:
			'Aplikasi rekrutmen dan manajemen talenta terintegrasi untuk pelacakan kandidat pelamar kerja hingga onboarding.',
		longDescription:
			'Mengembangkan aplikasi web penyeleksian talenta profesional untuk PT. Jago Talenta Indonesia menggunakan Laravel. Mempercepat penyaringan resume dan pemetaan kecocokan posisi lowongan kerja.',
		tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL', 'ChartJS'],
		githubUrl: 'https://github.com/farhanzaky/jagotalent-system',
		demoUrl: 'https://jagotalenta.co.id', // example demo
		features: [
			'ATS (Applicant Tracking System) dengan sistem pipeline visual',
			'Analisis CV pelamar otomatis berdasarkan kecocokan keyword',
			'Sistem penilaian wawancara terstandarisasi untuk rekruter',
			'Integrasi pengiriman email undangan tes langsung'
		],
		gradient: 'from-amber-500 via-orange-600 to-red-600'
	}
];
