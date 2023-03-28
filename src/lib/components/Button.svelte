<div class="button">
	<div class="inner">
		<slot />
	</div>
</div>

<style>
	.button {
		background-color: white;
		border: 5px solid black;
		box-shadow: 5px 5px 0px black;
		/* border-radius: 12px; */
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
