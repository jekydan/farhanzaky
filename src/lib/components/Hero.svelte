<script lang="ts">
	import Button from './ui/Button.svelte';
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import { floatingIcons } from '$lib/data/techStack';

	const roles = [
		'Web Developer',
		'Frontend Developer',
		'Backend Developer',
		'Svelte Developer',
		'Laravel Developer'
	];

	let currentRoleText = $state('');
	let roleIndex = 0;
	let charIndex = 0;
	let isDeleting = false;

	$effect(() => {
		let timer: ReturnType<typeof setTimeout>;
		const typeSpeed = isDeleting ? 40 : 85;

		const handleTyping = () => {
			const currentRole = roles[roleIndex];

			if (isDeleting) {
				currentRoleText = currentRole.substring(0, charIndex - 1);
				charIndex--;
			} else {
				currentRoleText = currentRole.substring(0, charIndex + 1);
				charIndex++;
			}

			if (!isDeleting && charIndex === currentRole.length) {
				// Pause at the end of typing
				timer = setTimeout(() => {
					isDeleting = true;
				}, 1800);
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				roleIndex = (roleIndex + 1) % roles.length;
				timer = setTimeout(handleTyping, 200);
			} else {
				timer = setTimeout(handleTyping, typeSpeed);
			}
		};

		timer = setTimeout(handleTyping, typeSpeed);

		return () => clearTimeout(timer);
	});

	// Smooth scroll handler
	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			const offset = 80;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = el.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	// Dictionary for custom tech icons
	const iconSVGs: Record<string, string> = {
		html: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.2H6.8l.3 3h9.6l-.3 3.3-4.4 1.2-4.4-1.2-.3-3H4.3l.5 5.8L12 18l7.2-2.4.9-9.4z"/></svg>`,
		css: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.6H5.4l.3 3.4h11.2l-.3 3.4-4.6 1.3-4.6-1.3-.3-3H4l.6 6.3L12 18.5l7.4-2.8 1-10.1z"/></svg>`,
		javascript: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm20 18.2c0-1-.5-1.5-1.5-1.9-.9-.4-1.8-.7-1.8-1.2 0-.3.2-.5.6-.5.4 0 .7.2.8.6h1.9c-.1-1.3-1.1-2.1-2.7-2.1-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 1.9 2.4 2.4 1 .4 1.2.7 1.2 1.1 0 .4-.4.6-.9.6-.6 0-.9-.3-1.1-.9H14c.2 1.6 1.3 2.3 2.9 2.3 1.8 0 3.1-1 3.1-2.6zm-7.6-1.5c0-.9-.5-1.5-1.5-1.9-.9-.4-1.8-.7-1.8-1.2 0-.3.2-.5.6-.5.4 0 .7.2.8.6h1.9c-.1-1.3-1.1-2.1-2.7-2.1-1.6 0-2.6 1-2.6 2.3 0 1.4 1.1 1.9 2.4 2.4 1 .4 1.2.7 1.2 1.1 0 .4-.4.6-.9.6-.6 0-.9-.3-1.1-.9H6.4c.2 1.6 1.3 2.3 2.9 2.3 1.8 0 3.1-1 3.1-2.6z"/></svg>`,
		typescript: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22 18.2c0-1.3-1-2.1-2.6-2.1-1.6 0-2.6.8-2.7 2.1h1.9c.1-.5.4-.7.8-.7.5 0 .9.2.9.6 0 .4-.2.7-1.2 1.1-1.3.5-2.4 1-2.4 2.4 0 1.6 1.3 2.6 3.1 2.6 1.6 0 2.7-.7 2.9-2.3h-1.9c-.2.6-.5.9-1.1.9-.5 0-.9-.2-.9-.6 0-.4.2-.7 1.2-1.1.9-.4 1.8-.7 1.8-1.2-1.4-.4-1.8-.7-1.8-1.2zm-12.8-2c0-1 .5-1.5 1.5-1.9.9-.4 1.8-.7 1.8-1.2 0-.3-.2-.5-.6-.5-.4 0-.7.2-.8.6H9.2c.1-1.3 1.1-2.1 2.7-2.1 1.6 0 2.6 1 2.6 2.3 0 1.4-1.1 1.9-2.4 2.4-1 .4-1.2.7-1.2 1.1 0 .4.4.6.9.6.6 0 .9-.3 1.1-.9h1.9c-.2 1.6-1.3 2.3-2.9 2.3-1.8 0-3.1-1-3.1-2.6z"/></svg>`,
		php: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 2C5.9 2 1.1 6.5 1.1 12s4.8 10 10.7 10 10.7-4.5 10.7-10S17.7 2 11.8 2zm4.5 13.9c-.3.4-.8.7-1.3.9-.6.2-1.3.3-2.2.3h-2.1l-.8 3.9H7.3l2-10h4.2c1.1 0 1.9.2 2.5.7.6.5.9 1.1.9 2 0 1-.3 1.7-.6 2.2zm4.6-6.1l-1.3 6.2c-.2.9-.6 1.6-1.2 2-.6.5-1.4.7-2.4.7h-2l.9-4.2h1.6c.7 0 1.2-.1 1.5-.4.3-.3.5-.7.6-1.3l.5-2.2H16l.8-3.9h4.2c.7 0 1.3.1 1.7.4.4.3.6.7.6 1.3 0 .4-.1.8-.3 1.2z"/></svg>`,
		laravel: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6.7c0-.4-.3-.6-.7-.6h-3.6c-.4 0-.7.3-.7.7v10.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7V6.7zm-8 4c0-.4-.3-.6-.7-.6H9.7c-.4 0-.7.3-.7.7v6.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7v-6.5zm-8 4c0-.4-.3-.6-.7-.6H1.7c-.4 0-.7.3-.7.7v2.5c0 .4.3.7.7.7h3.6c.4 0 .7-.3.7-.7v-2.5zM24 3.7c0-.9-.7-1.7-1.7-1.7H1.7C.8 2 0 2.8 0 3.7v16.5C0 21.2.8 22 1.7 22h20.6c.9 0 1.7-.8 1.7-1.7V3.7z"/></svg>`,
		svelte: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1 3.3c-2-2-5.3-2-7.3 0L7.6 7.6c-.9.9-1.4 2.1-1.4 3.4 0 1.2.5 2.5 1.4 3.4l.6.6-4.6 4.6c-2 2-2 5.3 0 7.3s5.3 2 7.3 0l4.2-4.2c1.9-1.9 1.9-5.1 0-7.1l-.6-.6 4.6-4.6c2-2 2-5.3 0-7.3zm-5.4 12c.5.5.5 1.3 0 1.8l-4.2 4.2c-.9.9-2.5.9-3.4 0s-.9-2.5 0-3.4l4.6-4.6.6.6c.9.9.9 2.5 0 3.4zm4-7.4l-4.6 4.6-.6-.6c-.9-.9-.9-2.5 0-3.4.5-.5.5-1.3 0-1.8L15 3.3c.9-.9 2.5-.9 3.4 0s.9 2.5 0 3.4z"/></svg>`,
		tailwind: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/></svg>`,
		git: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M23.3 10.9L13.1.7C12.7.3 12 .3 11.6.7L8.7 3.6l3.3 3.3c.7-.2 1.5 0 2 .5.6.6.7 1.4.4 2.1l3.3 3.3c.7-.3 1.5-.2 2.1.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.1l-3.3-3.3v4.6c.3.2.5.5.6.9.3.9-.1 1.9-1 2.3-.9.3-1.9-.1-2.3-1-.3-.9.1-1.9 1-2.3.4-.1.8-.1 1.1 0V9.4c-.3-.2-.5-.5-.6-.9-.3-.9.1-1.9 1-2.3.4-.1.8-.1 1.1 0l3.3 3.3 2.9-2.9c.4-.4.4-1.1 0-1.5z"/></svg>`,
		mysql: `<svg class="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12.1 1C6.2 1 2.2 4 2.2 8.5c0 3.3 2.1 5.9 5.8 7.3l-1.3 3.8c-.1.3.1.6.4.7l4-.9c.3-.1.5-.3.5-.6l-.3-3.1c.3.1.6.1.9.1 5.9 0 9.8-3 9.8-7.5C22 4 18 1 12.1 1zm-4.3 6.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`
	};

	const floatingColors: Record<string, string> = {
		html: 'bg-red-500/10 border-red-500/30 text-red-500 shadow-red-500/20',
		css: 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-blue-500/20',
		javascript: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400 shadow-yellow-500/20',
		typescript: 'bg-blue-600/10 border-blue-600/30 text-blue-500 shadow-blue-600/20',
		php: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-indigo-500/20',
		laravel: 'bg-red-600/10 border-red-600/30 text-red-500 shadow-red-600/20',
		svelte: 'bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-orange-500/20',
		tailwind: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-cyan-500/20',
		git: 'bg-orange-600/10 border-orange-600/30 text-orange-500 shadow-orange-600/20',
		mysql: 'bg-sky-500/10 border-sky-500/30 text-sky-400 shadow-sky-500/20'
	};
</script>

<section
	id="home"
	class="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-deep grid-bg"
>
	<!-- Background glowing gradient blobs -->
	<div
		class="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[130px] animate-blob z-0"
	></div>
	<div
		class="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-accent-purple/10 blur-[130px] animate-blob-delayed z-0"
	></div>

	<div
		class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
	>
		<!-- Left Hero Info -->
		<div class="lg:col-span-7 flex flex-col items-start text-left">
			<ScrollReveal animation="fade-up" delay={100}>
				<div
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-md mb-6 shadow-sm select-none"
				>
					<span class="w-2 h-2 rounded-full bg-accent-mint animate-pulse"></span>
					<span class="text-xs font-mono text-slate-350 tracking-wider">Ready to collaborate</span>
				</div>
			</ScrollReveal>

			<ScrollReveal animation="fade-up" delay={200}>
				<span class="font-display font-medium text-lg md:text-xl text-slate-400 tracking-wide">
					Halo, Saya
				</span>
			</ScrollReveal>

			<ScrollReveal animation="fade-up" delay={300}>
				<h1
					class="font-display font-extrabold text-5xl md:text-7xl text-white tracking-tight leading-tight mt-1 mb-2"
				>
					FARHAN <span
						class="bg-linear-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent text-glow-cyan"
						>ZAKY</span
					>
				</h1>
			</ScrollReveal>

			<!-- Typing text simulation -->
			<ScrollReveal animation="fade-up" delay={400}>
				<div class="h-10 flex items-center mb-6">
					<p class="font-mono text-xl md:text-2xl text-accent-cyan font-bold tracking-wide">
						{currentRoleText}<span
							class="inline-block w-[3px] h-6 bg-accent-cyan ml-1 animate-pulse">|</span
						>
					</p>
				</div>
			</ScrollReveal>

			<ScrollReveal animation="fade-up" delay={500}>
				<p class="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mb-8">
					Mahasiswa Informatika di <span class="text-white font-medium">Siber Muhamadiyah University</span> yang
					fokus pada web development modern. Senang merakit arsitektur kode yang bersih dan antarmuka
					premium berkecepatan tinggi.
				</p>
			</ScrollReveal>

			<!-- Action Buttons -->
			<ScrollReveal animation="fade-up" delay={600}>
				<div class="flex flex-wrap items-center gap-4">
					<Button variant="accent" onclick={() => scrollToSection('contact')}>
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
						Contact Me
					</Button>

					<Button variant="secondary" onclick={() => scrollToSection('projects')}>
						View Projects
					</Button>

					<!-- Download CV Button -->
					<Button variant="outline" href="/cv/CV_Farhan_Zaky.pdf" download="CV_Farhan_Zaky.pdf">
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
						Download CV
					</Button>
				</div>
			</ScrollReveal>
		</div>

		<!-- Right Futuristic Programmer Graphic -->
		<div
			class="lg:col-span-5 relative flex justify-center items-center h-[450px] lg:h-[500px] select-none"
		>
			<!-- Central Orbital Rings & Hacker Grid -->
			<div
				class="absolute w-[320px] h-[320px] rounded-full border border-slate-800/40 flex items-center justify-center animate-spin-slow"
			>
				<!-- Dashboard Outer Dashed Circle -->
				<div
					class="absolute w-[290px] h-[290px] rounded-full border-2 border-dashed border-accent-cyan/15"
				></div>
				<!-- Internal Glowing Orbit Circle -->
				<div
					class="absolute w-[240px] h-[240px] rounded-full border border-accent-purple/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
				></div>
			</div>

			<!-- Central Visual Element (Futuristic SVG Programmer Mockup) -->
			<div
				class="relative w-72 h-72 rounded-2xl glass-card border border-white/5 shadow-2xl flex flex-col overflow-hidden items-center justify-center p-6 animate-float-slow"
			>
				<!-- Terminal Header Mockup -->
				<div
					class="absolute top-0 left-0 w-full h-8 bg-slate-900/60 border-b border-slate-850 flex items-center justify-between px-4"
				>
					<div class="flex items-center gap-1.5">
						<span class="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
						<span class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
						<span class="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
					</div>
					<span class="text-[10px] font-mono text-slate-500 tracking-wider">main.ts - Farhan</span>
					<span class="w-4"></span>
				</div>

				<!-- Terminal Body Simulation -->
				<div
					class="w-full flex-1 flex flex-col justify-center gap-3 mt-4 text-left font-mono text-[11px] leading-relaxed"
				>
					<p class="text-accent-purple">
						import <span class="text-white">Developer</span> from
						<span class="text-accent-cyan">"farhan-zaky"</span>;
					</p>

					<div class="pl-2 border-l border-slate-800 py-1 flex flex-col gap-1.5">
						<p class="text-slate-400">const dev = new Developer(&#123;</p>
						<p class="pl-3 text-slate-350">
							status: <span class="text-accent-mint">"Building next-gen web apps"</span>,
						</p>
						<p class="pl-3 text-slate-350">
							location: <span class="text-accent-mint">"Indonesia / Remote"</span>,
						</p>
						<p class="pl-3 text-slate-350">
							experience: <span class="text-accent-cyan">"Fullstack"</span>
						</p>
						<p class="text-slate-400">&#125;);</p>
					</div>

					<p class="text-slate-500">// Running developer.init()...</p>
					<div
						class="flex items-center justify-between bg-slate-950/60 border border-slate-850 rounded px-2.5 py-1.5 mt-1 select-all"
					>
						<span class="text-accent-cyan font-bold text-[10px]">SYSTEM READY</span>
						<span class="w-2 h-2 rounded-full bg-accent-mint animate-ping"></span>
					</div>
				</div>
			</div>

			<!-- Floating Tech Icons Orbiting (Absolute Position based on data) -->
			{#each floatingIcons as icon (icon.name)}
				<div
					class="absolute w-11 h-11 rounded-xl border flex items-center justify-center p-2.5 backdrop-blur-md transition-all duration-300 shadow-md animate-float-medium hover:scale-110 cursor-help border-white/10 {floatingColors[
						icon.iconName
					]}"
					style="
            left: {icon.x}; 
            top: {icon.y}; 
            animation-delay: {icon.delay}; 
            animation-duration: {icon.duration};
          "
					title={icon.name}
				>
					<!-- Custom SVG Loader -->
					{@html iconSVGs[icon.iconName]}
				</div>
			{/each}
		</div>
	</div>
</section>
