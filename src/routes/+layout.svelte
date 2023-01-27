<main>
	<div class="header">
		<h1>kazenomori</h1>
		<ul>
			<li>かぜのもりについて</li>
			<li>ポートフォリオ</li>
			<li>お問い合わせ</li>
		</ul>

		<slot />
	</div>
</main>

<style>
	main {
		font-family: 'Open Sans', sans-serif;
		margin-left: auto;
		margin-right: auto;
		max-width: 584px;
	}

	h1 {
		font-weight: 300;
	}

	ul {
		/* color: #19232d; */
		color: #828c96;
		cursor: pointer;
		border-top: 1px solid;
		border-bottom: 1px solid;
		border-color: #dce6f0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding-bottom: 8px;
		padding-left: 0;
		padding-right: 0;
		padding-top: 8px;
	}

	li {
		border-right: 1px solid;
		border-color: #dce6f0;
		display: grid;
		height: 40px;
		list-style: none;
		place-items: center normal;
		padding-left: 8px;
	}

	li:last-child {
		border: none;
	}
</style>
