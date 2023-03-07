<script lang="ts">
	import type { Action } from 'svelte/types/runtime/action';

	const drag: Action = (node) => {
		node.ondragstart = () => {
			return false;
		};

		node.onmousedown = (e: MouseEvent) => {
			const shiftX = e.clientX - node.getBoundingClientRect().left;
			const shiftY = e.clientY - node.getBoundingClientRect().top;

			const moveAt = (e: MouseEvent) => {
				node.style.left = e.pageX - shiftX + 'px';
				node.style.top = e.pageY - shiftY + 'px';
			};

			node.style.position = 'absolute';
			node.style.zIndex = '1000';
			document.body.append(node);

			moveAt(e);

			document.addEventListener('mousemove', moveAt);

			node.onmouseup = () => {
				document.removeEventListener('mousemove', moveAt);
				node.onmouseup = null;
			};

			return {
				destroy() {
					document.removeEventListener('mousemove', moveAt);
				}
			};
		};

		node.ontouchstart = (e: TouchEvent) => {
			e.preventDefault();

			const shiftX = e.changedTouches[0].clientX - node.getBoundingClientRect().left;
			const shiftY = e.changedTouches[0].clientY - node.getBoundingClientRect().top;

			const moveAt = (e: TouchEvent) => {
				node.style.left = e.changedTouches[0].pageX - shiftX + 'px';
				node.style.top = e.changedTouches[0].pageY - shiftY + 'px';
			};

			node.style.position = 'absolute';
			node.style.zIndex = '1000';
			document.body.append(node);

			moveAt(e);

			document.addEventListener('touchmove', moveAt);

			node.ontouchend = () => {
				document.removeEventListener('touchmove', moveAt);
				node.ontouchend = null;
			};

			return {
				destroy() {
					document.removeEventListener('touchmove', moveAt);
				}
			};
		};
	};

	export let topPercent: number;
	export let leftPercent: number;
	export let headerTxt: string;

	$: startPosStyle = `top:${topPercent}%;left:${leftPercent}%;`;
</script>

<div class="virtual" style={startPosStyle} use:drag>
	<div class="header">
		{headerTxt}
	</div>
	<div class="body">
		<slot />
	</div>
</div>

<style>
	.virtual {
		position: absolute;
		width: 200px;
		height: 150px;
		display: grid;
		grid-template-rows: 30px 1fr;
		cursor: grab;
	}

	.header {
		border: solid 1px;
		background: var(--back-color);
		border-bottom: 0;
		border-radius: 10px 10px 0 0;
		text-align: center;
	}

	.body {
		border: solid 1px;
		background: var(--back-color);
		border-radius: 0 0 10px 10px;
		overflow: hidden;
	}
</style>
