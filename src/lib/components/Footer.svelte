<script lang="ts">
	const footerLinks = [
		{ name: 'Home', id: 'home' },
		{ name: 'About', id: 'about' },
		{ name: 'Tech Stack', id: 'techstack' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Certificates', id: 'certificates' },
		{ name: 'Skills', id: 'skills' },
		{ name: 'Contact', id: 'contact' }
	];

	const currentYear = new Date().getFullYear();

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	function handleLinkClick(e: MouseEvent, id: string) {
		e.preventDefault();
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
</script>

<footer class="relative z-10 border-t border-slate-900 bg-bg-deep/80 backdrop-blur-md py-12">
	<div
		class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6"
	>
		<!-- Brand / Copyright -->
		<div class="flex flex-col items-center md:items-start gap-2">
			<div class="flex items-center gap-2">
				<div
					class="w-7 h-7 rounded bg-linear-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-display font-bold text-slate-950 text-xs"
				>
					F
				</div>
				<span class="font-display font-bold text-sm tracking-wider text-white">FARHAN ZAKY</span>
			</div>
			<p class="text-xs font-mono text-slate-500">
				&copy; {currentYear} Farhan Zaky. All Rights Reserved.
			</p>
		</div>

		<!-- Navigation List -->
		<nav class="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
			{#each footerLinks as item (item.id)}
				<a
					href="#{item.id}"
					onclick={(e) => handleLinkClick(e, item.id)}
					class="text-xs font-display text-slate-400 hover:text-accent-cyan transition-colors duration-300"
				>
					{item.name}
				</a>
			{/each}
		</nav>

		<!-- Scroll to Top Button -->
		<button
			onclick={scrollToTop}
			aria-label="Scroll to top"
			class="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/35 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-slate-950 cursor-pointer"
		>
			<div
				class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent-cyan/5 blur-sm"
			></div>
			<svg
				class="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-300"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
			</svg>
		</button>
	</div>
</footer>
