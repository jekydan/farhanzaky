<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import Card from './ui/Card.svelte';
	import { skills } from '$lib/data/skills';

	let visible = $state(false);
	let skillsContainer = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!skillsContainer) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.unobserve(skillsContainer!);
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(skillsContainer);

		return () => {
			if (skillsContainer) {
				observer.unobserve(skillsContainer);
			}
		};
	});

	const radius = 42;
	const circumference = 2 * Math.PI * radius; // ~263.89
</script>

<section id="skills" class="relative z-10 py-24 bg-bg-deep/40 grid-bg">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-20">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Proficiency
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Core <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Skills</span
					> Progress
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Skills Circular Grid -->
		<div
			bind:this={skillsContainer}
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
		>
			{#each skills as skill (skill.name)}
				<ScrollReveal animation="zoom" class="h-full">
					<Card
						glow={true}
						class="p-6 md:p-8 flex flex-col items-center justify-center text-center group hover:scale-[1.03] transition-all duration-300"
					>
						<!-- Circular Progress Indicator -->
						<div class="relative w-28 h-28 mb-5 flex items-center justify-center">
							<!-- Background track circle -->
							<svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
								<circle
									cx="50"
									cy="50"
									r={radius}
									fill="transparent"
									stroke="rgba(255,255,255,0.04)"
									stroke-width="7"
								/>
								<!-- Animated Active indicator circle -->
								<circle
									cx="50"
									cy="50"
									r={radius}
									fill="transparent"
									class="{skill.color} transition-all duration-1500 ease-out-quint"
									stroke="currentColor"
									stroke-width="6.5"
									stroke-linecap="round"
									style="
                    stroke-dasharray: {circumference}; 
                    stroke-dashoffset: {visible
										? circumference - (skill.percentage / 100) * circumference
										: circumference};
                  "
								/>
							</svg>

							<!-- Central Indicator text -->
							<div class="absolute flex flex-col items-center justify-center text-center">
								<span
									class="text-xl font-display font-extrabold text-white group-hover:text-accent-cyan transition-colors"
									>{skill.percentage}%</span
								>
								<span
									class="text-[9px] font-mono text-slate-550 uppercase tracking-wider font-semibold"
									>Level</span
								>
							</div>
						</div>

						<!-- Skill Name -->
						<h3
							class="font-display font-bold text-base text-slate-200 group-hover:text-white transition-colors"
						>
							{skill.name}
						</h3>

						<!-- Faint backdrop glow helper -->
						<div
							class="absolute -bottom-5 w-16 h-16 rounded-full bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none"
						></div>
					</Card>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
