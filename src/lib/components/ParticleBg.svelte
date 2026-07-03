<script lang="ts">
	let canvasEl = $state<HTMLCanvasElement | null>(null);
	let isMobile = $state(false);

	$effect(() => {
		if (!canvasEl) return;
		const ctx = canvasEl.getContext('2d');
		if (!ctx) return;

		let particles: Array<{
			x: number;
			y: number;
			vx: number;
			vy: number;
			size: number;
		}> = [];

		let width = 0;
		let height = 0;
		let animationFrameId: number;

		const resize = () => {
			if (!canvasEl) return;
			width = canvasEl.width = window.innerWidth;
			height = canvasEl.height = window.innerHeight;
			isMobile = width < 768;
			initParticles();
		};

		const initParticles = () => {
			particles = [];
			const particleCount = isMobile ? 30 : 70;
			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.18,
					vy: (Math.random() - 0.5) * 0.18,
					size: Math.random() * 1.5 + 0.5
				});
			}
		};

		let mouse = { x: -2000, y: -2000 };
		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		const handleMouseLeave = () => {
			mouse.x = -2000;
			mouse.y = -2000;
		};

		window.addEventListener('resize', resize);
		window.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseleave', handleMouseLeave);

		resize();

		const loop = () => {
			if (!ctx || !canvasEl) return;
			ctx.clearRect(0, 0, width, height);

			// Faint lines configuration
			ctx.strokeStyle = 'rgba(0, 245, 255, 0.03)';
			ctx.lineWidth = 0.5;

			const connectionDistance = isMobile ? 80 : 120;
			const repelDistance = 100;

			for (let i = 0; i < particles.length; i++) {
				const p1 = particles[i];

				// Repulsion physics from mouse
				const dx = p1.x - mouse.x;
				const dy = p1.y - mouse.y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < repelDistance) {
					const force = (repelDistance - dist) / repelDistance;
					p1.x += (dx / dist) * force * 1.5;
					p1.y += (dy / dist) * force * 1.5;
				}

				// Apply physics
				p1.x += p1.vx;
				p1.y += p1.vy;

				// Boundaries check
				if (p1.x < 0) {
					p1.x = 0;
					p1.vx *= -1;
				} else if (p1.x > width) {
					p1.x = width;
					p1.vx *= -1;
				}

				if (p1.y < 0) {
					p1.y = 0;
					p1.vy *= -1;
				} else if (p1.y > height) {
					p1.y = height;
					p1.vy *= -1;
				}

				// Draw particle node
				ctx.fillStyle = 'rgba(0, 245, 255, 0.12)';
				ctx.beginPath();
				ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
				ctx.fill();

				// Connect nearby nodes
				for (let j = i + 1; j < particles.length; j++) {
					const p2 = particles[j];
					const cdx = p1.x - p2.x;
					const cdy = p1.y - p2.y;
					const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

					if (cdist < connectionDistance) {
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(loop);
		};

		loop();

		return () => {
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas bind:this={canvasEl} class="fixed inset-0 w-full h-full pointer-events-none z-0"></canvas>
