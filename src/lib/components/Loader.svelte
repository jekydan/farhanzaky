<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		onComplete?: () => void;
	}

	let { onComplete = undefined }: Props = $props();

	let count = $state(0);
	let statusIndex = $state(0);
	let show = $state(true);

	const statuses = [
		'Initializing environment...',
		'Importing Svelte 5 runes...',
		'Compiling tailwind.css variables...',
		'Retrieving project matrices...',
		'Establishing neural link...',
		"Welcome to Farhan's Portfolio."
	];

	onMount(() => {
		// Increment status texts
		const statusInterval = setInterval(() => {
			if (statusIndex < statuses.length - 1) {
				statusIndex++;
			}
		}, 400);

		// Count up 0 to 100
		const countInterval = setInterval(() => {
			if (count < 100) {
				count += Math.floor(Math.random() * 4) + 1;
				if (count > 100) count = 100;
			} else {
				clearInterval(countInterval);
				clearInterval(statusInterval);
				statusIndex = statuses.length - 1; // set to last welcome status

				// Hold for a moment then transition
				setTimeout(() => {
					show = false;
					// Trigger callbacks after slide transition completes
					setTimeout(() => {
						if (onComplete) onComplete();
					}, 600);
				}, 400);
			}
		}, 40);

		return () => {
			clearInterval(countInterval);
			clearInterval(statusInterval);
		};
	});
</script>

<div
	class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-deep transition-all duration-700 ease-in-out"
	class:opacity-0={!show}
	class:pointer-events-none={!show}
	class:-translate-y-full={!show}
>
	<!-- Background glowing ambient lights -->
	<div
		class="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-pulse"
	></div>
	<div
		class="absolute w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-700"
	></div>

	<div class="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
		<!-- Futuristic spinner -->
		<div class="relative w-20 h-20 mb-8">
			<div class="absolute inset-0 rounded-full border border-slate-800"></div>
			<div
				class="absolute inset-0 rounded-full border-2 border-t-accent-cyan border-r-accent-mint animate-spin"
			></div>
			<div class="absolute inset-0 flex items-center justify-center">
				<span class="text-sm font-mono font-bold text-white text-glow-cyan">{count}%</span>
			</div>
		</div>

		<!-- Title / Name -->
		<h1 class="text-2xl font-display font-bold tracking-widest text-white mb-2 uppercase">
			Farhan <span
				class="bg-linear-to-r from-accent-cyan to-accent-mint bg-clip-text text-transparent"
				>Zaky</span
			>
		</h1>

		<!-- Status Logs -->
		<div class="h-6 flex items-center">
			<p class="text-xs font-mono text-slate-400 flex items-center gap-1.5">
				<span class="inline-block w-1.5 h-1.5 rounded-full bg-accent-mint animate-ping"></span>
				<span>{statuses[statusIndex]}</span>
			</p>
		</div>

		<!-- Linear Load Indicator -->
		<div
			class="w-full bg-slate-900/80 h-[2px] rounded-full mt-6 overflow-hidden border border-white/5"
		>
			<div
				class="bg-linear-to-r from-accent-cyan to-accent-mint h-full transition-all duration-100 ease-out"
				style="width: {count}%"
			></div>
		</div>
	</div>
</div>
