<main>
	<div class="header">
		<h1>kazenomori</h1>
		<nav>
			<a href="/about">かぜのもりについて</a>
			<a href="/about">ポートフォリオ</a>
			<a href="/about">お問い合わせ</a>
		</nav>

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

	nav {
		/* color: #19232d; */
		color: #828c96;
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

	a {
		border-right: 1px solid;
		border-color: #dce6f0;
		display: grid;
		height: 40px;
		list-style: none;
		place-items: center normal;
		padding-left: 8px;
		color: inherit;
		text-decoration: none;
		cursor: pointer;
	}

	a:last-child {
		border: none;
	}
</style>
