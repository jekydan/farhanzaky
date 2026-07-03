<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		glow?: boolean;
		tilt?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		children,
		class: className = '',
		glow = true,
		tilt = false,
		onclick = undefined
	}: Props = $props();

	let cardEl: HTMLElement | null = $state(null);
	let rotateX = $state(0);
	let rotateY = $state(0);
	let isHovered = $state(false);

	// Spotlight coordinates inside card
	let spotX = $state(0);
	let spotY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!cardEl) return;

		const rect = cardEl.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		// Spotlight position
		spotX = e.clientX - rect.left;
		spotY = e.clientY - rect.top;

		if (!tilt) return;

		const mouseX = e.clientX - rect.left - width / 2;
		const mouseY = e.clientY - rect.top - height / 2;

		// Limit rotation to maximum of 8 degrees
		rotateX = -(mouseY / (height / 2)) * 8;
		rotateY = (mouseX / (width / 2)) * 8;
		isHovered = true;
	}

	function handleMouseLeave() {
		rotateX = 0;
		rotateY = 0;
		isHovered = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	bind:this={cardEl}
	{onclick}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	class="relative rounded-2xl glass-card transition-all duration-300 overflow-hidden group {className}"
	style:transform={tilt && isHovered
		? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
		: ''}
	style:transition={!isHovered
		? 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
		: 'transform 0.1s ease-out, border-color 0.3s ease'}
>
	{#if glow}
		<!-- Cursor spotlight overlay background glow -->
		<div
			class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
			style="background: radial-gradient(350px circle at {spotX}px {spotY}px, rgba(0, 245, 255, 0.08), rgba(139, 92, 246, 0.02) 50%, transparent 80%);"
		></div>

		<!-- Glowing card border -->
		<div
			class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
			style="background: radial-gradient(150px circle at {spotX}px {spotY}px, rgba(0, 245, 255, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%); margin: -1px; border-radius: inherit; padding: 1px; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
		></div>
	{/if}

	<div class="relative z-10 h-full w-full">
		{@render children?.()}
	</div>
</div>
