<script>
	import Header from './sections/Header.svelte';
	import Hi from './sections/Hi.svelte';
	import Skills from './sections/Skills.svelte';
</script>

<style>
	.center{
		margin-left: 4vw;
		margin-right: 4vw;
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.center{
			margin-left: 4vw;
			margin-right: 4vw;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .center{
			margin-left: 15vw;
			margin-right: 15vw;
		}
    }
</style>

<Header />

<div class="center" id="hi">
	<Hi />
</div>

<div class="center" id="skills">
	<Skills />
</div>