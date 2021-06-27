<script>
	import Header from './sections/Header.svelte';
	import Hi from './sections/Hi.svelte';
	import Skills from './sections/Skills.svelte';
</script>

<style>
	div{
		padding: 6vw;
	}
</style>

<body>
	<Header />
	
	<div id="hi">
		<Hi />
	</div>
	
	<div id="skills">
		<Skills />
	</div>
</body>