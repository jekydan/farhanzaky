<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		variant?: 'cyan' | 'purple' | 'mint' | 'blue' | 'gray';
		class?: string;
	}

	let { children, variant = 'gray', class: className = '' }: Props = $props();

	const variants = {
		cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.05)]',
		purple:
			'bg-purple-500/10 text-purple-400 border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.05)]',
		mint: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]',
		blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.05)]',
		gray: 'bg-slate-850 text-slate-300 border-slate-700/50'
	};
</script>

<span
	class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border transition-colors duration-300 {variants[
		variant
	]} {className}"
>
	{@render children?.()}
</span>
