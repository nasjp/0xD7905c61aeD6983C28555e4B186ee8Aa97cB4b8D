<div class="button">
	<slot />
</div>

<style>
	.button {
		background-color: white;
		border: 5px solid black;
		box-shadow: 5px 5px 0px black;
		cursor: pointer;
		user-select: none;
	}

	.button:hover {
		position: relative;
		top: 5px;
		left: 5px;
		transition: all 0;
		box-shadow: none;
		text-decoration: none;
	}
</style>
