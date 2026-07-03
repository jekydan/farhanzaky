<script lang="ts">
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import { techCategories } from '$lib/data/techStack';

	// SVG strings dictionary for clean SVG rendering
	const techIcons: Record<string, string> = {
		svelte: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1 3.3c-2-2-5.3-2-7.3 0L7.6 7.6c-.9.9-1.4 2.1-1.4 3.4 0 1.2.5 2.5 1.4 3.4l.6.6-4.6 4.6c-2 2-2 5.3 0 7.3s5.3 2 7.3 0l4.2-4.2c1.9-1.9 1.9-5.1 0-7.1l-.6-.6 4.6-4.6c2-2 2-5.3 0-7.3zm-5.4 12c.5.5.5 1.3 0 1.8l-4.2 4.2c-.9.9-2.5.9-3.4 0s-.9-2.5 0-3.4l4.6-4.6.6.6c.9.9.9 2.5 0 3.4zm4-7.4l-4.6 4.6-.6-.6c-.9-.9-.9-2.5 0-3.4.5-.5.5-1.3 0-1.8L15 3.3c.9-.9 2.5-.9 3.4 0s.9 2.5 0 3.4z"/></svg>`,
		typescript: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22 18.2c0-1.3-1-2.1-2.6-2.1-1.6 0-2.6.8-2.7 2.1h1.9c.1-.5.4-.7.8-.7.5 0 .9.2.9.6 0 .4-.2.7-1.2 1.1-1.3.5-2.4 1-2.4 2.4 0 1.6 1.3 2.6 3.1 2.6 1.6 0 2.7-.7 2.9-2.3h-1.9c-.2.6-.5.9-1.1.9-.5 0-.9-.2-.9-.6 0-.4.2-.7 1.2-1.1.9-.4 1.8-.7 1.8-1.2-1.4-.4-1.8-.7-1.8-1.2zm-12.8-2c0-1 .5-1.5 1.5-1.9.9-.4 1.8-.7 1.8-1.2 0-.3-.2-.5-.6-.5-.4 0-.7.2-.8.6H9.2c.1-1.3 1.1-2.1 2.7-2.1 1.6 0 2.6 1 2.6 2.3 0 1.4-1.1 1.9-2.4 2.4-1 .4-1.2.7-1.2 1.1 0 .4.4.6.9.6.6 0 .9-.3 1.1-.9h1.9c-.2 1.6-1.3 2.3-2.9 2.3-1.8 0-3.1-1-3.1-2.6z"/></svg>`,
		tailwind: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>`,
		javascript: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm20 18.2c0-1-.5-1.5-1.5-1.9-.9-.4-1.8-.7-1.8-1.2 0-.3.2-.5.6-.5.4 0 .7.2.8.6h1.9c-.1-1.3-1.1-2.1-2.7-2.1-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 1.9 2.4 2.4 1 .4 1.2.7 1.2 1.1 0 .4-.4.6-.9.6-.6 0-.9-.3-1.1-.9H14c.2 1.6 1.3 2.3 2.9 2.3 1.8 0 3.1-1 3.1-2.6zm-7.6-1.5c0-.9-.5-1.5-1.5-1.9-.9-.4-1.8-.7-1.8-1.2 0-.3.2-.5.6-.5.4 0 .7.2.8.6h1.9c-.1-1.3-1.1-2.1-2.7-2.1-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 1.9 2.4 2.4 1 .4 1.2.7 1.2 1.1 0 .4-.4.6-.9.6-.6 0-.9-.3-1.1-.9H6.4c.2 1.6 1.3 2.3 2.9 2.3 1.8 0 3.1-1 3.1-2.6z"/></svg>`,
		css: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.6H5.4l.3 3.4h11.2l-.3 3.4-4.6 1.3-4.6-1.3-.3-3H4l.6 6.3L12 18.5l7.4-2.8 1-10.1z"/></svg>`,
		html: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.2H6.8l.3 3h9.6l-.3 3.3-4.4 1.2-4.4-1.2-.3-3H4.3l.5 5.8L12 18l7.2-2.4.9-9.4z"/></svg>`,
		laravel: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6.7c0-.4-.3-.6-.7-.6h-3.6c-.4 0-.7.3-.7.7v10.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7V6.7zm-8 4c0-.4-.3-.6-.7-.6H9.7c-.4 0-.7.3-.7.7v6.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7v-6.5zm-8 4c0-.4-.3-.6-.7-.6H1.7c-.4 0-.7.3-.7.7v2.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7v-2.5zM24 3.7c0-.9-.7-1.7-1.7-1.7H1.7C.8 2 0 2.8 0 3.7v16.5C0 21.2.8 22 1.7 22h20.6c.9 0 1.7-.8 1.7-1.7V3.7z"/></svg>`,
		php: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 2C5.9 2 1.1 6.5 1.1 12s4.8 10 10.7 10 10.7-4.5 10.7-10S17.7 2 11.8 2zm4.5 13.9c-.3.4-.8.7-1.3.9-.6.2-1.3.3-2.2.3h-2.1l-.8 3.9H7.3l2-10h4.2c1.1 0 1.9.2 2.5.7.6.5.9 1.1.9 2 0 1-.3 1.7-.6 2.2zm4.6-6.1l-1.3 6.2c-.2.9-.6 1.6-1.2 2-.6.5-1.4.7-2.4.7h-2l.9-4.2h1.6c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.6-1.3l.5-2.2H16l.8-3.9h4.2c.7 0 1.3.1 1.7.4.4.3.6.7.6 1.3 0 .4-.1.8-.3 1.2z"/></svg>`,
		filament: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`,
		mysql: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12.1 1C6.2 1 2.2 4 2.2 8.5c0 3.3 2.1 5.9 5.8 7.3l-1.3 3.8c-.1.3.1.6.4.7l4-.9c.3-.1.5-.3.5-.6l-.3-3.1c.3.1.6.1.9.1 5.9 0 9.8-3 9.8-7.5C22 4 18 1 12.1 1zm-4.3 6.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`,
		postgresql: `<svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>`,
		git: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.7 3.6l3.3 3.3c.7-.2 1.5 0 2 .5.6.6.7 1.4.4 2.1l3.3 3.3c.7-.3 1.5-.2 2.1.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.1l-3.3-3.3v4.6c.3.2.5.5.6.9.3.9-.1 1.9-1 2.3-.9.3-1.9-.1-2.3-1-.3-.9.1-1.9 1-2.3.4-.1.8-.1 1.1 0V9.4c-.3-.2-.5-.5-.6-.9-.3-.9.1-1.9 1-2.3.4-.1.8-.1 1.1 0l3.3 3.3 2.9-2.9c.4-.4.4-1.1 0-1.5z"/></svg>`,
		docker: `<svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-2.913 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-2.913 0h2.119c.102 0 .186-.084.186-.186V8.78c0-.102-.084-.186-.186-.186H8.157c-.102 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-2.913 0h2.119c.103 0 .186-.084.186-.186V8.78c0-.102-.083-.186-.186-.186H5.244c-.103 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-2.913 0h2.119c.103 0 .186-.084.186-.186V8.78c0-.102-.083-.186-.186-.186H2.33c-.103 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm2.913-2.903h2.119c.102 0 .186-.084.186-.186V5.876c0-.102-.084-.186-.186-.186H8.157c-.102 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-2.913 0h2.119c.103 0 .186-.084.186-.186V5.876c0-.102-.083-.186-.186-.186H5.244c-.103 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm2.913-2.903h2.119c.102 0 .186-.084.186-.186V2.973c0-.102-.084-.186-.186-.186H8.157c-.102 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-5.826 8.709h2.119c.103 0 .186-.084.186-.186V8.78c0-.102-.083-.186-.186-.186H2.33c-.103 0-.186.084-.186.186v2.112c0 .102.083.186.186.186zm-.088 4.25c-.21.03-.43.04-.64.04-.15 0-.29-.01-.43-.02a.2.2 0 0 0-.21.2v.32c0 .12.1.2.22.21.36.03.73.04 1.1.02.12-.01.21-.1.21-.21v-.38a.2.2 0 0 0-.25-.18zm17.91-4.06c-1.39-1.92-3.83-2.02-3.83-2.02H18.91c.09-1.55-.54-2.82-1.63-3.41-.33-.18-.72-.3-1.12-.34.18-.73.08-1.58-.38-2.29-.62-.97-1.84-1.46-3.32-1.34v.05c0 .12.1.2.22.21.72.07 1.34.42 1.63.85.34.52.41 1.15.22 1.68-.04.11.02.23.13.27.76.27 1.25.9 1.41 1.65.02.1.1.18.21.18h.61c.06 0 .43.01.89.28.61.35.91.99.92 1.93-.08.06-.17.11-.27.15-.31.11-.63.16-.96.16-.14 0-.28 0-.41-.01-.12-.01-.22.07-.23.19-.07.64-.32 1.23-.74 1.69-.37.4-.87.67-1.43.76-.11.02-.19.11-.19.22v.45c0 .1.06.18.15.21.32.1.6.28.82.52.26.29.39.67.39 1.1 0 .22-.04.43-.11.63-.04.11.02.24.13.27.42.13.81.35 1.16.64.44.38.76.88.94 1.48.03.1.12.17.23.17h.45c.1 0 .19-.07.21-.17a6.22 6.22 0 0 0-.28-3.92c-.1-.23-.23-.45-.37-.66.08-.05.17-.11.25-.17.9-.66 1.37-1.56 1.39-2.67zM.166 15.378c.04 2.45 1.92 4.41 4.54 4.54.19.01.37.01.56 0 .1-.01.19-.09.19-.2v-.41c0-.1-.08-.19-.19-.2a7.12 7.12 0 0 1-4.08-3.08c-.1-.13-.24-.13-.33-.02a3.84 3.84 0 0 1-.69.37z"/></svg>`,
		figma: `<svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.688 0 6 2.688 6 6c0 2.016 1.008 3.804 2.544 4.908C6.96 11.964 6 13.884 6 16c0 3.312 2.688 6 6 6s6-2.688 6-6c0-2.116-.96-4.036-2.544-5.092C16.992 9.804 18 8.016 18 6c0-3.312-2.688-6-6-6zm0 2c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 10c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"/></svg>`
	};
</script>

<section id="techstack" class="relative z-10 py-24 bg-bg-deep grid-bg">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<!-- Section Title -->
		<div class="flex flex-col items-center text-center mb-20">
			<ScrollReveal animation="fade-up">
				<span
					class="font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan bg-cyan-500/10 px-3.5 py-1 rounded-full mb-3 inline-block"
				>
					Capabilities
				</span>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={100}>
				<h2 class="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
					Tech <span
						class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
						>Stack</span
					> & Levels
				</h2>
			</ScrollReveal>
			<ScrollReveal animation="fade-up" delay={200}>
				<div class="w-12 h-[2px] bg-accent-cyan mt-4 rounded-full"></div>
			</ScrollReveal>
		</div>

		<!-- Tech Stack Grid Categories -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
			{#each techCategories as category (category.title)}
				<ScrollReveal animation="fade-up" class="h-full">
					<div
						class="glass-card rounded-2xl p-6 md:p-8 border border-white/5 bg-slate-950/20 shadow-xl flex flex-col h-full"
					>
						<h3
							class="font-display font-bold text-xl text-white border-b border-slate-800 pb-4 mb-6 tracking-wide flex items-center justify-between"
						>
							<span>{category.title}</span>
							<span class="text-xs font-mono font-medium text-slate-500"
								>{category.items.length} Techs</span
							>
						</h3>

						<!-- Category Items Grid -->
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
							{#each category.items as item (item.name)}
								<!-- Individual Tooltip Card Wrapper -->
								<div class="relative group cursor-help select-none">
									<!-- Small Card with hover triggers -->
									<div
										class="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/60 transition-all duration-300 group-hover:scale-[1.02] group-hover:rotate-1 shadow-md"
									>
										<!-- Icon render with custom glow dynamic colors -->
										<div
											class="w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center transition-all duration-300 {item.glowColor} group-hover:glow-cyan"
										>
											<!-- Safely load custom SVG -->
											{@html techIcons[item.iconName] || ''}
										</div>

										<!-- Tech Level Details -->
										<div class="flex-1 min-w-0">
											<div class="flex items-center justify-between mb-1.5">
												<span
													class="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors"
													>{item.name}</span
												>
												<span class="text-xs font-mono text-accent-cyan font-bold"
													>{item.level}%</span
												>
											</div>

											<!-- Miniature progress bar skill -->
											<div
												class="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-white/5"
											>
												<div
													class="bg-linear-to-r from-accent-cyan to-accent-mint h-full rounded-full transition-all duration-1000 ease-out"
													style="width: {item.level}%"
												></div>
											</div>
										</div>
									</div>

									<!-- Hover Tooltip Module -->
									<div
										class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-30"
									>
										<div
											class="bg-slate-950/95 border border-slate-800 backdrop-blur-md rounded-lg p-2.5 shadow-2xl text-center"
										>
											<p
												class="text-[10px] font-mono text-accent-cyan font-semibold uppercase tracking-wider mb-0.5"
											>
												{item.name} Experience
											</p>
											<p class="text-[11px] text-slate-300 leading-normal font-sans">
												{item.description}
											</p>
											<!-- Tooltip caret -->
											<div
												class="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-950"
											></div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
