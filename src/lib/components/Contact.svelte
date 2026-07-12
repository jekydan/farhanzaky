<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';
	import Button from './ui/Button.svelte';

	// =====================================================
	// FORMSPREE SETUP:
	// 1. Daftar gratis di https://formspree.io
	// 2. Buat form baru, masukkan email: farhanzaky24@gmail.com
	// 3. Ganti FORMSPREE_FORM_ID di bawah dengan ID form kamu
	//    (contoh: 'xpwzgkdb' — terlihat di URL form kamu)
	// =====================================================
	const FORMSPREE_FORM_ID = 'xkodwepd';

	// Form states using Svelte 5 runes
	let name = $state('');
	let email = $state('');
	let message = $state('');

	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	function validateEmail(emailStr: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		// Validations
		if (!name.trim()) {
			formStatus = 'error';
			errorMessage = 'Nama wajib diisi.';
			return;
		}
		if (!email.trim() || !validateEmail(email)) {
			formStatus = 'error';
			errorMessage = 'Format email tidak valid.';
			return;
		}
		if (!message.trim() || message.length < 10) {
			formStatus = 'error';
			errorMessage = 'Pesan minimal harus 10 karakter.';
			return;
		}

		formStatus = 'submitting';

		try {
			const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					message: message.trim()
				})
			});

			if (response.ok) {
				formStatus = 'success';
				name = '';
				email = '';
				message = '';
			} else {
				const data = await response.json();
				formStatus = 'error';
				errorMessage =
					data?.errors?.[0]?.message ??
					'Gagal mengirim pesan. Pastikan Form ID Formspree sudah benar.';
			}
		} catch {
			formStatus = 'error';
			errorMessage = 'Terjadi kesalahan jaringan. Silakan coba lagi.';
		}
	}

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/farhanzaky',
			color: 'hover:text-white hover:border-white/20 hover:bg-white/5',
			svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/farhanzaky',
			color: 'hover:text-accent-blue hover:border-accent-blue/30 hover:bg-accent-blue/5',
			svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/farhanzaky',
			color: 'hover:text-pink-500 hover:border-pink-550 hover:bg-pink-500/5',
			svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
		},
		{
			name: 'WhatsApp',
			url: 'https://wa.me/6281234567890', // mock wa
			color: 'hover:text-accent-mint hover:border-accent-mint/30 hover:bg-accent-mint/5',
			svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.843.002-2.635-1.023-5.11-2.884-6.974-1.86-1.864-4.332-2.89-6.969-2.891-5.441 0-9.866 4.41-9.869 9.846-.001 1.77.476 3.499 1.38 5.048L1.761 21.8l6.096-1.597-.101-.061-.11-.008z"/></svg>`
		}
	];
</script>

<section id="contact" class="relative z-10 py-24 bg-bg-deep grid-bg">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-16">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Connection
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Contact <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Me</span
					>
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Contact Grid Structure -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
			<!-- Left side: Contact info details -->
			<div class="lg:col-span-5 flex flex-col gap-8">
				<ScrollReveal animation="fade-right">
					<h3 class="font-display font-bold text-2xl text-white tracking-wide">
						Ayo buat proyek luar biasa bersama!
					</h3>
					<p class="text-slate-400 text-base font-light leading-relaxed mt-2">
						Saya terbuka untuk kesempatan magang, proyek freelance, atau diskusi seputar arsitektur
						website modern. Silakan hubungi saya melalui form atau saluran sosial media yang
						tersedia.
					</p>
				</ScrollReveal>

				<!-- Details pane -->
				<ScrollReveal animation="fade-right" delay={150}>
					<div class="flex flex-col gap-5">
						<div class="flex items-center gap-4">
							<div
								class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-accent-cyan shadow-md"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div class="flex flex-col">
								<span class="text-[10px] font-mono text-slate-500 uppercase">EMAIL</span>
								<a
									href="mailto:farhanzaky24@gmail.com"
									class="text-sm text-slate-200 hover:text-accent-cyan transition-colors"
									>farhanzaky24@gmail.com</a
								>
							</div>
						</div>

						<div class="flex items-center gap-4">
							<div
								class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-accent-mint shadow-md"
							>
								<svg
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div class="flex flex-col">
								<span class="text-[10px] font-mono text-slate-500 uppercase">LOKASI</span>
								<span class="text-sm text-slate-200">Indonesia</span>
							</div>
						</div>
					</div>
				</ScrollReveal>

				<!-- Social Media Lists -->
				<ScrollReveal animation="fade-right" delay={250}>
					<div class="flex flex-col gap-3">
						<span class="text-xs font-mono text-slate-550 uppercase tracking-widest"
							>Connect Socials</span
						>
						<div class="flex flex-wrap gap-3">
							{#each socialLinks as social (social.name)}
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.name}
									class="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 text-slate-450 transition-all duration-300 shadow-md cursor-pointer {social.color} hover:scale-105"
								>
									{@html social.svg}
								</a>
							{/each}
						</div>
					</div>
				</ScrollReveal>
			</div>

			<!-- Right side: contact form inside a Tilt card -->
			<div class="lg:col-span-7">
				<ScrollReveal animation="fade-left">
					<Card glow={true} class="p-6 md:p-8">
						<form onsubmit={handleSubmit} class="flex flex-col gap-5">
							<!-- Validation Alert notices -->
							{#if formStatus === 'error'}
								<div
									class="p-3.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-mono flex items-center gap-2"
								>
									<svg
										class="w-4 h-4 shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
									<span>{errorMessage}</span>
								</div>
							{:else if formStatus === 'success'}
								<div
									class="p-3.5 rounded-lg border border-accent-mint/20 bg-accent-mint/5 text-accent-mint text-xs font-mono flex items-center gap-2"
								>
									<svg
										class="w-4 h-4 shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span>Pesan berhasil terkirim! Terima kasih, akan segera dibalas. 🎉</span>
								</div>
							{/if}

							<!-- Name Input field -->
							<div class="flex flex-col gap-1.5">
								<label
									for="contact-name"
									class="text-xs font-mono text-slate-400 uppercase tracking-wide"
									>Nama Lengkap</label
								>
								<div class="relative">
									<input
										type="text"
										id="contact-name"
										bind:value={name}
										placeholder="Masukkan nama Anda"
										disabled={formStatus === 'submitting'}
										class="w-full bg-slate-950/70 border border-slate-850 hover:border-slate-800 focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-650 transition-all outline-none"
									/>
								</div>
							</div>

							<!-- Email Input field -->
							<div class="flex flex-col gap-1.5">
								<label
									for="contact-email"
									class="text-xs font-mono text-slate-400 uppercase tracking-wide"
									>Alamat Email</label
								>
								<div class="relative">
									<input
										type="email"
										id="contact-email"
										bind:value={email}
										placeholder="nama@email.com"
										disabled={formStatus === 'submitting'}
										class="w-full bg-slate-950/70 border border-slate-850 hover:border-slate-800 focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-650 transition-all outline-none"
									/>
								</div>
							</div>

							<!-- Message Textarea field -->
							<div class="flex flex-col gap-1.5">
								<label
									for="contact-message"
									class="text-xs font-mono text-slate-400 uppercase tracking-wide">Pesan Anda</label
								>
								<div class="relative">
									<textarea
										id="contact-message"
										bind:value={message}
										rows="5"
										placeholder="Tulis pesan Anda di sini..."
										disabled={formStatus === 'submitting'}
										class="w-full bg-slate-950/70 border border-slate-850 hover:border-slate-800 focus:border-accent-cyan/80 focus:ring-1 focus:ring-accent-cyan rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-650 transition-all outline-none resize-none"
									></textarea>
								</div>
							</div>

							<!-- Submit Button -->
							<Button
								type="submit"
								variant="accent"
								disabled={formStatus === 'submitting'}
								class="w-full py-3.5 mt-2 cursor-pointer"
							>
								{#if formStatus === 'submitting'}
									<!-- Spin logo -->
									<div
										class="w-4 h-4 rounded-full border border-slate-900 border-t-slate-500 animate-spin mr-1"
									></div>
									Mengirimkan...
								{:else}
									Kirim Pesan
								{/if}
							</Button>
						</form>
					</Card>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>
