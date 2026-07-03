<script lang="ts">
	let activeSection = $state('home');
	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ name: 'Home', id: 'home' },
		{ name: 'About', id: 'about' },
		{ name: 'Tech Stack', id: 'techstack' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Certificates', id: 'certificates' },
		{ name: 'Skills', id: 'skills' },
		{ name: 'Contact', id: 'contact' }
	];

	$effect(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 40;

			// Simple active link intersection calculation
			const scrollPosition = window.scrollY + 200;
			for (const item of navItems) {
				const el = document.getElementById(item.id);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						activeSection = item.id;
					}
				}
			}

			// Edge cases: top of page
			if (window.scrollY < 100) {
				activeSection = 'home';
			}
			// Edge case: bottom of page
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
				activeSection = 'contact';
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Run immediately on mount

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function handleNavLinkClick(e: MouseEvent, targetId: string) {
		e.preventDefault();
		const el = document.getElementById(targetId);
		if (el) {
			mobileMenuOpen = false;
			const offset = 80; // height of navbar
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
</script>

<header
	class="fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b {isScrolled
		? 'bg-bg-deep/80 backdrop-blur-md border-white/5 py-4 shadow-lg'
		: 'bg-transparent border-transparent py-6'}"
>
	<div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
		<!-- Logo -->
		<a
			href="#home"
			onclick={(e) => handleNavLinkClick(e, 'home')}
			class="flex items-center gap-2 group cursor-pointer select-none"
		>
			<div
				class="relative w-9 h-9 rounded-lg bg-linear-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-display font-bold text-slate-950 text-lg shadow-md shadow-accent-cyan/15 group-hover:scale-105 transition-transform duration-300"
			>
				F
				<div class="absolute inset-0 rounded-lg border border-white/20"></div>
			</div>
			<span
				class="font-display font-bold text-lg text-white tracking-widest uppercase group-hover:text-accent-cyan transition-colors duration-300"
			>
				FARHAN <span
					class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
					>ZAKY</span
				>
			</span>
		</a>

		<!-- Desktop Navigation Links -->
		<nav class="hidden md:flex items-center gap-1">
			{#each navItems as item (item.id)}
				<a
					href="#{item.id}"
					onclick={(e) => handleNavLinkClick(e, item.id)}
					class="relative px-4 py-2 font-display text-sm font-medium transition-colors duration-300 cursor-pointer {activeSection ===
					item.id
						? 'text-accent-cyan text-glow-cyan font-semibold'
						: 'text-slate-400 hover:text-white'}"
				>
					{item.name}
					{#if activeSection === item.id}
						<!-- Glowing underline dot indicator -->
						<span
							class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F5FF]"
						></span>
					{/if}
				</a>
			{/each}
		</nav>

		<!-- Mobile Navigation Toggle Button -->
		<button
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
			class="md:hidden p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
		>
			<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if mobileMenuOpen}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				{:else}
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if mobileMenuOpen}
		<div
			class="md:hidden absolute top-full left-0 w-full bg-bg-deep/95 border-b border-slate-800/80 backdrop-blur-xl shadow-2xl py-6 px-8 flex flex-col gap-4 animate-fade-in"
		>
			{#each navItems as item (item.id)}
				<a
					href="#{item.id}"
					onclick={(e) => handleNavLinkClick(e, item.id)}
					class="font-display py-2.5 text-base transition-colors border-b border-white/5 cursor-pointer {activeSection ===
					item.id
						? 'text-accent-cyan font-bold border-accent-cyan/10'
						: 'text-slate-400 hover:text-white'}"
				>
					{item.name}
				</a>
			{/each}
		</div>
	{/if}
</header>
