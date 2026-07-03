<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';
	import Badge from './ui/Badge.svelte';
	import { experiences } from '$lib/data/experience';
</script>

<section id="experience" class="relative z-10 py-24 bg-bg-deep/40 grid-bg">
	<!-- Glowing background point -->
	<div
		class="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"
	></div>

	<div class="max-w-5xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-20">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Journey
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Work <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Experience</span
					>
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Timeline Wrapper -->
		<div class="relative border-l border-slate-800/80 ml-4 md:ml-6 flex flex-col gap-16">
			{#each experiences as exp, idx (exp.company)}
				<div class="relative pl-8 md:pl-12">
					<!-- Glowing Node dot -->
					<div
						class="absolute left-[-9px] top-1.5 w-[18px] h-[18px] rounded-full bg-bg-deep border-[3px] border-accent-cyan flex items-center justify-center shadow-[0_0_12px_#00F5FF]"
					>
						<span class="w-1.5 h-1.5 rounded-full bg-accent-mint"></span>
					</div>

					<!-- Company timeline card -->
					<ScrollReveal animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'} duration={900}>
						<Card glow={true} class="p-6 md:p-8">
							<!-- Card Header -->
							<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
								<div>
									<h3 class="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
										{exp.company}
									</h3>
									<div class="flex items-center gap-2 mt-1">
										<span class="text-sm font-semibold text-accent-cyan">{exp.position}</span>
									</div>
								</div>
								<!-- Date Period Badge -->
								<span
									class="inline-block px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-400 self-start md:self-center"
								>
									{exp.period}
								</span>
							</div>

							<!-- General Company Description -->
							<p class="text-slate-350 text-sm md:text-base font-light leading-relaxed mb-6">
								{exp.description}
							</p>

							<!-- Sub Projects Section -->
							{#if exp.projects && exp.projects.length > 0}
								<div class="mb-6">
									<h4
										class="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3.5"
									>
										Proyek yang Dikerjakan:
									</h4>

									<div class="grid grid-cols-1 gap-4">
										{#each exp.projects as project (project.name)}
											<div
												class="p-4 rounded-xl bg-slate-950/40 border border-slate-900 flex flex-col gap-2 transition-all duration-300 hover:border-slate-850 hover:bg-slate-950/65"
											>
												<div class="flex flex-wrap items-center justify-between gap-2">
													<span class="font-display font-bold text-sm text-white tracking-wide"
														>{project.name}</span
													>
													<span
														class="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-850 text-[10px] font-mono text-accent-mint uppercase"
														>{project.category}</span
													>
												</div>

												<p class="text-slate-400 text-xs font-light leading-relaxed">
													{project.description}
												</p>

												<!-- Mini Tech badges for projects -->
												<div class="flex flex-wrap gap-1.5 mt-1">
													{#each project.tech as tech (tech)}
														<span
															class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/40"
															>{tech}</span
														>
													{/each}
												</div>
											</div>
										{/each}
									</div>
								</div>
							{/if}

							<!-- Skills Applied Badge row -->
							<div class="pt-5 border-t border-slate-850 flex flex-wrap items-center gap-2">
								<span class="text-[10px] font-mono text-slate-500 uppercase mr-1">Skills:</span>
								{#each exp.tech as tech (tech)}
									<Badge variant="gray" class="text-[10px]">{tech}</Badge>
								{/each}
							</div>
						</Card>
					</ScrollReveal>
				</div>
			{/each}
		</div>
	</div>
</section>
