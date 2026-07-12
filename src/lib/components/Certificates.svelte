<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';
	import Button from './ui/Button.svelte';
	import { certificates, type Certificate } from '$lib/data/certificates';

	let selectedCert = $state<Certificate | null>(null);

	function openPreview(cert: Certificate) {
		selectedCert = cert;
		document.body.style.overflow = 'hidden';
	}

	function closePreview() {
		selectedCert = null;
		document.body.style.overflow = '';
	}
</script>

<section id="certificates" class="relative z-10 py-24 bg-bg-deep/30 grid-bg">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-16">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Credentials
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Certificates & <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Achievements</span
					>
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Certificate Masonry/Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each certificates as cert (cert.id)}
				<ScrollReveal animation="zoom" class="h-full">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div onclick={() => openPreview(cert)} class="cursor-zoom-in h-full">
						<Card
							glow={true}
							class="p-5 h-full flex flex-col justify-between group hover:border-glow transition-all duration-300"
						>
							<!-- Certificate Thumbnail -->
							<div
								class="relative h-44 rounded-xl bg-slate-950 border border-slate-900 overflow-hidden flex items-center justify-center mb-4"
							>
								{#if cert.image}
									<!-- Gambar sertifikat asli -->
									<img
										src={cert.image}
										alt={cert.name}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<!-- Overlay gradient bawah -->
									<div class="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-slate-950/80 to-transparent"></div>
								{:else}
									<!-- Fallback: Glowing Aura Background -->
									<div
										class="absolute inset-0 bg-linear-to-tr {cert.gradient} opacity-20 group-hover:opacity-30 transition-opacity"
									></div>
									<div class="absolute inset-2 border border-slate-800/40 rounded-lg"></div>
									<div class="relative z-10 flex flex-col items-center gap-2 text-center">
										<div
											class="w-12 h-12 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/10"
										>
											<svg class="w-6 h-6 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
												<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
											</svg>
										</div>
										<span class="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{cert.publisher}</span>
									</div>
								{/if}
							</div>

							<!-- Content details -->
							<div class="flex-1 flex flex-col justify-between">
								<div>
									<div class="flex items-center justify-between mb-1.5">
										<span
											class="text-[10px] font-mono text-accent-cyan font-medium uppercase tracking-wider"
											>{cert.category}</span
										>
										<span class="text-[10px] font-mono text-slate-500">{cert.year}</span>
									</div>
									<h3
										class="font-display font-bold text-base text-white tracking-wide leading-snug group-hover:text-accent-cyan transition-colors mb-4 line-clamp-2"
									>
										{cert.name}
									</h3>
								</div>

								<div class="flex items-center justify-between pt-3 border-t border-slate-900">
									<span class="text-[11px] font-mono text-slate-400"
										>Penerbit: <span class="text-slate-200">{cert.publisher}</span></span
									>
									<Button
										variant="ghost"
										class="py-1 px-2.5 font-mono text-[10px] text-accent-cyan border border-accent-cyan/15 bg-accent-cyan/5 rounded group-hover:bg-accent-cyan/10"
									>
										Preview
									</Button>
								</div>
							</div>
						</Card>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Full Diploma Mockup modal -->
{#if selectedCert}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep/80 backdrop-blur-md p-6"
		onclick={closePreview}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			class="bg-bg-dark border border-white/10 rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl relative animate-zoom-in"
			onclick={(e) => e.stopPropagation()}
			role="document"
		>
			<!-- Close Button -->
			<button
				onclick={closePreview}
				class="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
				aria-label="Close modal"
			>
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Preview Sertifikat Asli -->
			{#if selectedCert.image}
				<div class="relative rounded-xl overflow-hidden mb-6 border border-slate-800 shadow-xl">
					<img
						src={selectedCert.image}
						alt={selectedCert.name}
						class="w-full object-contain max-h-[60vh]"
					/>
				</div>
			{:else}
				<!-- Fallback: Diploma Frame Visual Mockup -->
				<div
					class="relative aspect-4/3 rounded-xl bg-slate-950 border-4 border-double border-slate-850 p-6 md:p-8 flex flex-col justify-between items-center text-center shadow-inner mb-6 overflow-hidden"
				>
					<div class="absolute inset-0 bg-linear-to-tr {selectedCert.gradient} opacity-20"></div>
					<div class="absolute inset-4 border border-slate-900/60 rounded"></div>
					<div class="relative z-10 flex flex-col items-center">
						<span class="text-[9px] font-mono tracking-widest text-accent-cyan uppercase">CERTIFICATE OF ACHIEVEMENT</span>
					</div>
					<div class="relative z-10">
						<h4 class="font-display font-extrabold text-2xl text-white tracking-wide border-b border-slate-800 pb-2 mb-3">
							FARHAN ZAKY
						</h4>
						<p class="font-sans font-bold text-sm text-slate-200 mt-1 max-w-sm">{selectedCert.name}</p>
					</div>
					<div class="relative z-10 w-full flex items-end justify-between border-t border-slate-900/60 pt-3">
						<span class="text-[10px] font-sans font-bold text-slate-350">{selectedCert.publisher}</span>
						<span class="text-[10px] font-sans font-bold text-accent-cyan">{selectedCert.year}</span>
					</div>
				</div>
			{/if}

			<!-- Modal Footer -->
			<div class="flex items-center justify-between gap-4">
				<div class="flex flex-col gap-0.5">
					<span class="text-[10px] font-mono text-slate-500">Kredensial ID</span>
					<span class="text-[11px] font-mono text-slate-350"
						>FZ-CERT-{selectedCert.id.toUpperCase()}-2026</span
					>
				</div>
				{#if selectedCert.credentialUrl}
					<Button
						variant="accent"
						href={selectedCert.credentialUrl}
						class="py-2.5 px-4 font-mono text-xs cursor-pointer"
					>
						Verifikasi Kredensial
					</Button>
				{/if}
			</div>
		</div>
	</div>
{/if}
