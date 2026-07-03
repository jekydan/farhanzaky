<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import ParticleBg from '$lib/components/ParticleBg.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let loadingCompleted = $state(false);

	function handleLoadingComplete() {
		loadingCompleted = true;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Global loading screen boot-up -->
<Loader onComplete={handleLoadingComplete} />

{#if loadingCompleted}
	<!-- Dynamic backdrops -->
	<ParticleBg />
	<CursorGlow />

	<!-- Layout shell structure -->
	<div
		class="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-cyan-500/25 selection:text-cyan-400"
	>
		<!-- Sticky Header Navigation -->
		<Navbar />

		<!-- Page core entries -->
		<main id="main-content" class="grow w-full relative z-10">
			{@render children()}
		</main>

		<!-- Bottom Footer -->
		<Footer />
	</div>
{/if}
