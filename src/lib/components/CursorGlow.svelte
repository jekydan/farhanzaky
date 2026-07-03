<script lang="ts">
	let x = $state(-200);
	let y = $state(-200);
	let isMobile = $state(true);

	$effect(() => {
		const checkSettings = () => {
			const isTouch = window.matchMedia('(max-width: 767px)').matches || 'ontouchstart' in window;
			const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			isMobile = isTouch || reducedMotion;
		};

		checkSettings();
		window.addEventListener('resize', checkSettings);

		if (isMobile) return;

		let targetX = -200;
		let targetY = -200;
		let currentX = -200;
		let currentY = -200;
		let animationFrameId: number;

		const updatePosition = () => {
			// Lerp (linear interpolation) coefficient for smooth delay transition
			const ease = 0.08;
			currentX += (targetX - currentX) * ease;
			currentY += (targetY - currentY) * ease;

			x = currentX;
			y = currentY;

			animationFrameId = requestAnimationFrame(updatePosition);
		};

		const handleMouseMove = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);
		animationFrameId = requestAnimationFrame(updatePosition);

		return () => {
			window.removeEventListener('resize', checkSettings);
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

{#if !isMobile}
	<div
		class="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
		style="background: radial-gradient(700px circle at {x}px {y}px, rgba(0, 245, 255, 0.05), rgba(139, 92, 246, 0.02) 40%, transparent 80%);"
	></div>
{/if}
