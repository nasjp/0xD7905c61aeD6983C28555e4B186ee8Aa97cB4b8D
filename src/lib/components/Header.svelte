<div class="header data">
	<h1><a href="/">kazenomori</a></h1>
	<nav>
		<div class="navItem"><a href="/about">かぜのもりとは</a></div>
		<div class="navItem"><a href="/portfolio">実装</a></div>
		<div class="navItem"><a href="/">記事</a></div>
	</nav>
</div>

<style>
	.header {
		margin-bottom: 20px;
	}

	.header h1 {
		font-weight: 300;
		font-size: 30px;
	}

	.header nav {
		margin-top: 20px;
		/* color: #828c96; */
		border-top: 1px solid;
		border-bottom: 1px solid;
		border-color: #dce6f0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 8px 0;
		font-size: 13px;
	}

	.header .navItem {
		border-right: 1px solid;
		display: grid;
		height: 40px;
		list-style: none;
		place-items: center normal;
		padding-left: 8px;
		text-decoration: none;
		cursor: pointer;
		border-color: #dce6f0;
	}

	.header .navItem:last-child {
		border: none;
	}
</style>
