<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom' | 'fade';
		delay?: number; // millisecond delay
		duration?: number; // millisecond duration
		once?: boolean;
	}

	let {
		children,
		class: className = '',
		animation = 'fade-up',
		delay = 0,
		duration = 800,
		once = true
	}: Props = $props();

	let element = $state<HTMLElement | null>(null);
	let isVisible = $state(false);

	$effect(() => {
		if (!element) return;

		// Respect reduced-motion preferences
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			isVisible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						if (once) {
							observer.unobserve(element!);
						}
					} else if (!once) {
						isVisible = false;
					}
				});
			},
			{
				threshold: 0.08,
				rootMargin: '0px 0px -40px 0px'
			}
		);

		observer.observe(element);

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});

	const getAnimationClass = () => {
		if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';

		switch (animation) {
			case 'fade-up':
				return 'opacity-0 translate-y-8';
			case 'fade-left':
				return 'opacity-0 -translate-x-8';
			case 'fade-right':
				return 'opacity-0 translate-x-8';
			case 'zoom':
				return 'opacity-0 scale-95';
			case 'fade':
			default:
				return 'opacity-0';
		}
	};
</script>

<div
	bind:this={element}
	class="transition-all ease-out {getAnimationClass()} {className}"
	style="transition-delay: {delay}ms; transition-duration: {duration}ms;"
>
	{@render children?.()}
</div>
