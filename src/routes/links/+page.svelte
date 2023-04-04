<script lang="ts">
	import { Wrap, Line, Button } from '$lib/components';
</script>

<Line />

<Wrap>
	<Button>
		<a href="https://twitter.com/0xD790/" target="_blank" rel="noreferrer" class="link"
			><span>twitter</span></a
		>
	</Button>
</Wrap>

<Wrap>
	<Button>
		<a href="https://scrapbox.io/0xd790/" target="_blank" rel="noreferrer" class="link">
			<span>scrapbox</span>
		</a>
	</Button>
</Wrap>

<Wrap>
	<Button>
		<a
			href="https://etherscan.io/address/0xD7905c61aeD6983C28555e4B186ee8Aa97cB4b8D"
			target="_blank"
			rel="noreferrer"
			class="link"
		>
			<span>etherscan</span>
		</a>
	</Button>
</Wrap>

<style>
	.link {
		height: 48px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 24px;
	}
</style>
