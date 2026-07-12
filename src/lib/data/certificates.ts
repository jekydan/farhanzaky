export interface Certificate {
	id: string;
	name: string;
	publisher: string;
	year: string;
	credentialUrl?: string;
	gradient: string;
	category: string;
	image?: string; // Path ke gambar sertifikat asli dari folder /static/certificates/
}

export const certificates: Certificate[] = [
	{
		id: 'cert-pinus-pintar',
		name: 'Sertifikat Pelatihan Pinus Pintar',
		publisher: 'Pinus Pintar',
		year: '2024',
		gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
		category: 'Training',
		image: '/certificates/PinusPintar-certificate_page-0001.jpg'
	},
	{
		id: 'cert-jagoit',
		name: 'Sertifikat JagoIT',
		publisher: 'JagoIT',
		year: '2024',
		gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
		category: 'IT',
		image: '/certificates/jagoit-certificate.jpg'
	}
];
