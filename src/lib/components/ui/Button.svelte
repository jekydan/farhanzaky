<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
		class?: string;
		download?: string | boolean;
	}

	let {
		variant = 'primary',
		href = undefined,
		type = 'button',
		disabled = false,
		onclick = undefined,
		children,
		class: className = '',
		download = undefined
	}: Props = $props();

	const baseStyles =
		'relative inline-flex items-center justify-center gap-2 font-medium overflow-hidden rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none tracking-wide font-display cursor-pointer select-none';

	const variants = {
		primary:
			'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-[size:200%_auto] hover:bg-right text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 py-3 px-6 border border-white/10 shine-overlay',
		secondary:
			'bg-slate-900/60 hover:bg-slate-900/90 border border-slate-700/50 hover:border-slate-600 text-slate-200 py-3 px-6 backdrop-blur-md',
		accent:
			'bg-gradient-to-r from-accent-cyan via-accent-mint to-accent-cyan bg-[size:200%_auto] hover:bg-right text-slate-950 font-semibold py-3 px-6 shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/35 border border-white/10 shine-overlay',
		outline:
			'border border-cyan-500/30 hover:border-cyan-400/80 text-cyan-400 hover:text-white bg-transparent hover:bg-cyan-500/10 py-3 px-6 transition-all duration-300',
		ghost: 'text-gray-400 hover:text-white hover:bg-white/5 py-2.5 px-4 transition-all duration-200'
	};
</script>

{#if href}
	<a {href} {download} {onclick} class="{baseStyles} {variants[variant]} {className}">
		{@render children?.()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class="{baseStyles} {variants[variant]} {className}">
		{@render children?.()}
	</button>
{/if}
