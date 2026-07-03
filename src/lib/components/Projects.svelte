<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';
	import Badge from './ui/Badge.svelte';
	import Button from './ui/Button.svelte';
	import { projects, type Project } from '$lib/data/projects';

	let selectedProject = $state<Project | null>(null);

	function openDetailModal(project: Project) {
		selectedProject = project;
		// Prevent body scroll when modal is open
		document.body.style.overflow = 'hidden';
	}

	function closeDetailModal() {
		selectedProject = null;
		document.body.style.overflow = '';
	}
</script>

<section id="projects" class="relative z-10 py-24 bg-bg-deep grid-bg">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-16">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Portfolio
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Featured <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Projects</span
					>
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Projects Grid Layout -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project (project.id)}
				<ScrollReveal animation="fade-up" class="h-full">
					<Card
						tilt={true}
						glow={true}
						class="h-full flex flex-col justify-between p-0 overflow-hidden"
					>
						<!-- Custom CSS Mockup Preview (Visual Preview area) -->
						<div
							class="relative h-48 w-full overflow-hidden bg-slate-950/80 border-b border-slate-900 group"
						>
							<!-- Grid Backdrop in Preview -->
							<div class="absolute inset-0 grid-bg opacity-30"></div>

							<!-- Gradient Accent Glow overlay -->
							<div
								class="absolute inset-0 bg-linear-to-tr {project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500"
							></div>

							<!-- Simulated Browser Frame -->
							<div
								class="absolute top-0 left-0 w-full h-7 bg-slate-900/80 border-b border-slate-900/60 flex items-center px-4 justify-between z-10"
							>
								<div class="flex gap-1">
									<span class="w-2 h-2 rounded-full bg-red-500/50"></span>
									<span class="w-2 h-2 rounded-full bg-yellow-500/50"></span>
									<span class="w-2 h-2 rounded-full bg-green-500/50"></span>
								</div>
								<span class="text-[9px] font-mono text-slate-500 lowercase">{project.id}.app</span>
								<span class="w-3"></span>
							</div>

							<!-- Animated Dashboard mockup graphics inside the card preview -->
							<div
								class="absolute inset-0 mt-7 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 select-none"
							>
								{#if project.id === 'crm-system'}
									<!-- CRM Graph Mockup -->
									<div
										class="w-44 bg-slate-900/90 border border-slate-800 rounded-lg p-3 shadow-lg flex flex-col gap-2"
									>
										<span class="text-[9px] font-mono text-slate-400">Monthly Revenue Pipeline</span
										>
										<div class="flex items-end justify-between h-14 pt-2 border-b border-slate-800">
											<div class="w-4 bg-accent-cyan/40 rounded-t-sm h-6"></div>
											<div class="w-4 bg-accent-purple/40 rounded-t-sm h-9"></div>
											<div class="w-4 bg-accent-blue/40 rounded-t-sm h-12"></div>
											<div
												class="w-4 bg-linear-to-t from-accent-cyan to-accent-mint rounded-t-sm h-14"
											></div>
										</div>
									</div>
								{:else if project.id === 'kickup'}
									<!-- Talent matrix radar simulator -->
									<div
										class="w-44 bg-slate-900/90 border border-slate-800 rounded-lg p-3 shadow-lg flex flex-col gap-2"
									>
										<span class="text-[9px] font-mono text-slate-400">Employee Talent Score</span>
										<div class="flex flex-col gap-1.5 py-1">
											<div class="flex justify-between text-[8px] font-mono">
												<span class="text-slate-550">Frontend</span><span class="text-accent-cyan"
													>92%</span
												>
											</div>
											<div class="w-full bg-slate-950 h-1 rounded">
												<div class="bg-accent-cyan h-full" style="width:92%"></div>
											</div>
											<div class="flex justify-between text-[8px] font-mono">
												<span class="text-slate-550">Backend</span><span class="text-accent-purple"
													>88%</span
												>
											</div>
											<div class="w-full bg-slate-950 h-1 rounded">
												<div class="bg-accent-purple h-full" style="width:88%"></div>
											</div>
										</div>
									</div>
								{:else if project.id === 'school-management'}
									<!-- School portal modules grid -->
									<div
										class="w-44 bg-slate-900/90 border border-slate-800 rounded-lg p-3 shadow-lg grid grid-cols-2 gap-2"
									>
										<div class="border border-slate-800 p-1.5 rounded flex flex-col items-center">
											<div class="w-4 h-4 rounded bg-cyan-500/10 mb-1"></div>
											<span class="text-[7px] text-slate-400 font-mono">Guru</span>
										</div>
										<div class="border border-slate-800 p-1.5 rounded flex flex-col items-center">
											<div class="w-4 h-4 rounded bg-emerald-500/10 mb-1"></div>
											<span class="text-[7px] text-slate-400 font-mono">Siswa</span>
										</div>
										<div class="border border-slate-800 p-1.5 rounded flex flex-col items-center">
											<div class="w-4 h-4 rounded bg-amber-500/10 mb-1"></div>
											<span class="text-[7px] text-slate-400 font-mono">Jadwal</span>
										</div>
										<div class="border border-slate-800 p-1.5 rounded flex flex-col items-center">
											<div class="w-4 h-4 rounded bg-red-500/10 mb-1"></div>
											<span class="text-[7px] text-slate-400 font-mono">Nilai</span>
										</div>
									</div>
								{:else}
									<!-- General rekrutmen checklist -->
									<div
										class="w-44 bg-slate-900/90 border border-slate-800 rounded-lg p-3 shadow-lg flex flex-col gap-2"
									>
										<span class="text-[9px] font-mono text-slate-400">Recruitment Funnel</span>
										<div class="flex flex-col gap-1">
											<div class="flex items-center gap-1.5 text-[8px] font-mono text-slate-350">
												<span class="w-1.5 h-1.5 rounded-full bg-accent-mint"></span> Applied (14)
											</div>
											<div class="flex items-center gap-1.5 text-[8px] font-mono text-slate-350">
												<span class="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span> Interview (5)
											</div>
											<div class="flex items-center gap-1.5 text-[8px] font-mono text-slate-350">
												<span class="w-1.5 h-1.5 rounded-full bg-accent-purple"></span> Onboarding (2)
											</div>
										</div>
									</div>
								{/if}
							</div>

							<!-- Shiny Overlay Reflective bar -->
							<div class="absolute inset-0 pointer-events-none shine-overlay"></div>
						</div>

						<!-- Card Body Content -->
						<div class="p-6 md:p-8 flex flex-col justify-between flex-1">
							<div>
								<div class="flex items-center justify-between mb-2">
									<span
										class="text-xs font-mono text-accent-cyan tracking-wider font-semibold uppercase"
										>{project.category}</span
									>
								</div>

								<h3
									class="font-display font-bold text-xl md:text-2xl text-white tracking-wide mb-3 hover:text-accent-cyan transition-colors"
								>
									{project.title}
								</h3>

								<p class="text-slate-350 text-sm font-light leading-relaxed mb-6 line-clamp-3">
									{project.description}
								</p>

								<!-- Tech Badges -->
								<div class="flex flex-wrap gap-2 mb-8">
									{#each project.tech as tech (tech)}
										<Badge variant="gray">{tech}</Badge>
									{/each}
								</div>
							</div>

							<!-- Footer Buttons -->
							<div
								class="flex items-center justify-between gap-4 pt-4 border-t border-slate-900/80"
							>
								<div class="flex items-center gap-2">
									<!-- GitHub Link -->
									{#if project.githubUrl}
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="View Github Repository"
											class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors shadow-sm cursor-pointer"
										>
											<svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
												<path
													d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
												/>
											</svg>
										</a>
									{/if}

									<!-- Live Demo Link -->
									{#if project.demoUrl}
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label="View Live Demo"
											class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors shadow-sm cursor-pointer"
										>
											<svg
												class="w-4.5 h-4.5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</a>
									{/if}
								</div>

								<Button
									variant="ghost"
									class="text-xs font-mono py-1.5 px-3 flex items-center gap-1 text-slate-450 hover:text-accent-cyan cursor-pointer"
									onclick={() => openDetailModal(project)}
								>
									Detail
									<svg
										class="w-3.5 h-3.5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
									</svg>
								</Button>
							</div>
						</div>
					</Card>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Project Detailed Modal -->
{#if selectedProject}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep/80 backdrop-blur-md p-6"
		onclick={closeDetailModal}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div
			class="bg-bg-dark border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto flex flex-col p-6 md:p-8 shadow-2xl relative animate-zoom-in"
			onclick={(e) => e.stopPropagation()}
			role="document"
		>
			<!-- Close Button -->
			<button
				onclick={closeDetailModal}
				class="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
				aria-label="Close modal"
			>
				<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<!-- Modal Content -->
			<span class="text-xs font-mono text-accent-cyan font-bold uppercase tracking-wider mb-2"
				>{selectedProject.category}</span
			>
			<h3 class="font-display font-extrabold text-2xl md:text-3xl text-white mb-4">
				{selectedProject.title}
			</h3>

			<div class="w-full h-1 bg-linear-to-r {selectedProject.gradient} rounded mb-6"></div>

			<div class="space-y-6">
				<div>
					<h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
						Deskripsi Proyek
					</h4>
					<p class="text-slate-300 text-sm md:text-base font-light leading-relaxed">
						{selectedProject.longDescription}
					</p>
				</div>

				<div>
					<h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
						Fitur Kunci & Kapabilitas
					</h4>
					<ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-350 font-light">
						{#each selectedProject.features as feature (feature)}
							<li class="flex items-start gap-2">
								<svg
									class="w-5 h-5 text-accent-mint shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div>
					<h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
						Tech Stack Terpakai
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each selectedProject.tech as tech (tech)}
							<Badge variant="cyan">{tech}</Badge>
						{/each}
					</div>
				</div>
			</div>

			<!-- Action Footer -->
			<div
				class="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-4 items-center justify-end"
			>
				{#if selectedProject.githubUrl}
					<Button
						variant="secondary"
						href={selectedProject.githubUrl}
						class="py-2.5 px-4 font-mono text-xs cursor-pointer"
					>
						Source Code
					</Button>
				{/if}
				{#if selectedProject.demoUrl}
					<Button
						variant="accent"
						href={selectedProject.demoUrl}
						class="py-2.5 px-4 font-mono text-xs cursor-pointer"
					>
						Live Demo
					</Button>
				{/if}
			</div>
		</div>
	</div>
{/if}
