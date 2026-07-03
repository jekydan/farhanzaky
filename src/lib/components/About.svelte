<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';

	let experienceCount = $state(0);
	let projectsCount = $state(0);
	let isAnimated = false;

	function animateCounters() {
		if (isAnimated) return;
		isAnimated = true;

		// Experience count 0 -> 2
		let expInterval = setInterval(() => {
			if (experienceCount < 2) {
				experienceCount++;
			} else {
				clearInterval(expInterval);
			}
		}, 200);

		// Projects count 0 -> 4
		let projInterval = setInterval(() => {
			if (projectsCount < 4) {
				projectsCount++;
			} else {
				clearInterval(projInterval);
			}
		}, 120);
	}

	let statsContainer = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!statsContainer) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animateCounters();
					observer.unobserve(statsContainer!);
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(statsContainer);

		return () => {
			if (statsContainer) {
				observer.unobserve(statsContainer);
			}
		};
	});
</script>

<section id="about" class="relative z-10 py-24 bg-bg-deep/30">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-16">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Profile
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					About <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Me</span
					>
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Main About Content -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
			<!-- Left Bio Card -->
			<div class="lg:col-span-8">
				<ScrollReveal animation="fade-right" duration={800} class="h-full">
					<Card glow={true} class="p-8 md:p-10 h-full flex flex-col justify-between">
						<div>
							<h3
								class="font-display font-semibold text-2xl text-white mb-6 flex items-center gap-2"
							>
								<svg
									class="w-6 h-6 text-accent-cyan"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
								Siapa Saya?
							</h3>
							<p class="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6">
								Saya adalah mahasiswa Informatika di <span class="text-white font-medium"
									>Sibermu University</span
								> yang memiliki ketertarikan besar pada pengembangan web modern, baik frontend maupun
								backend.
							</p>
							<p class="text-slate-350 text-base md:text-lg font-light leading-relaxed mb-6">
								Saya memiliki pengalaman membangun aplikasi web skala perusahaan selama magang
								sebagai <span class="text-accent-cyan font-medium">Fullstack Web Developer</span>.
								Saya menyukai penerapan
								<span class="text-white font-medium">clean architecture</span>, antarmuka pengguna
								modern yang premium, dan optimalisasi performa tinggi untuk kenyamanan maksimal
								pengguna.
							</p>
							<p class="text-slate-350 text-base md:text-lg font-light leading-relaxed">
								Selalu antusias untuk mempelajari teknologi baru, memecahkan masalah arsitektur kode
								yang kompleks, dan mengintegrasikan ekosistem backend yang andal dengan sisi visual
								frontend yang responsif serta dinamis.
							</p>
						</div>

						<!-- Passion & Focus Badges -->
						<div
							class="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4"
						>
							<div>
								<h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
									Passion & Fokus
								</h4>
								<p class="text-sm text-slate-300">
									Clean Architecture, High-Performance Web Apps, dan Modern UI/UX Interactive
									Design.
								</p>
							</div>
							<div>
								<h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
									Teknologi Favorit
								</h4>
								<p class="text-sm text-slate-300">
									Svelte 5, SvelteKit, TypeScript, PHP, Laravel, Filament Admin, Tailwind CSS,
									PostgreSQL.
								</p>
							</div>
						</div>
					</Card>
				</ScrollReveal>
			</div>

			<!-- Right Stats Card -->
			<div class="lg:col-span-4 flex flex-col gap-6">
				<!-- Experience / Proj Stats Card -->
				<ScrollReveal animation="fade-left" duration={800} class="flex-1">
					<Card glow={true} class="p-8 flex flex-col justify-center h-full">
						<div bind:this={statsContainer} class="grid grid-cols-2 lg:grid-cols-1 gap-6">
							<!-- Stat 1 -->
							<div class="flex flex-col">
								<span
									class="font-display font-bold text-5xl md:text-6xl text-white tracking-tight flex items-baseline"
								>
									{experienceCount}<span class="text-accent-cyan text-4xl font-extrabold">+</span>
								</span>
								<span class="text-xs font-mono uppercase tracking-wider text-slate-450 mt-1"
									>Company Experience</span
								>
							</div>

							<div class="w-full h-px bg-slate-800/80 hidden lg:block"></div>

							<!-- Stat 2 -->
							<div class="flex flex-col">
								<span
									class="font-display font-bold text-5xl md:text-6xl text-white tracking-tight flex items-baseline"
								>
									{projectsCount}<span class="text-accent-mint text-4xl font-extrabold">+</span>
								</span>
								<span class="text-xs font-mono uppercase tracking-wider text-slate-450 mt-1"
									>Professional Projects</span
								>
							</div>
						</div>
					</Card>
				</ScrollReveal>

				<!-- Role Badges/Visual card -->
				<ScrollReveal animation="fade-left" delay={150} class="flex-1">
					<Card
						glow={true}
						class="p-8 bg-linear-to-br from-indigo-950/20 via-slate-900/40 to-slate-900/60 flex flex-col justify-between"
					>
						<div>
							<span
								class="text-[10px] font-mono text-accent-purple uppercase tracking-widest block mb-2"
								>Current Title</span
							>
							<h3 class="font-display font-bold text-xl text-white leading-snug">
								Fullstack Developer & Informatics Student
							</h3>
						</div>

						<div class="mt-6 flex flex-col gap-2.5">
							<div class="flex items-center gap-3">
								<div class="w-1.5 h-1.5 rounded-full bg-accent-cyan"></div>
								<span class="text-xs font-mono text-slate-400">Fullstack Web Developer</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="w-1.5 h-1.5 rounded-full bg-accent-mint"></div>
								<span class="text-xs font-mono text-slate-400">Mahasiswa Informatika</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="w-1.5 h-1.5 rounded-full bg-accent-purple"></div>
								<span class="text-xs font-mono text-slate-400">Sibermu University</span>
							</div>
						</div>
					</Card>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>
