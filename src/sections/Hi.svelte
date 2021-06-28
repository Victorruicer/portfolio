<script>
	
</script>

<div class="presentation">
	<h1>Hi! I'm <span class="name">Víctor Ruiz</span></h1>
	<h2>I'm a junior full-stack web developer eager to learn all kind of new technologies and improve on the already known</h2>
</div>

<style>
	h1, h2{
		color: var(--light);
	}
	
	.name{
		color: var(--purple);
	}

	.presentation{
		height: 80vh;
		padding-top: 75%;
	}

	.presentation h1{
			font-size: 2.3em;
	}

	.presentation h2{
		font-size: 1.3em;
	}
	
	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.presentation{
			padding-top: 50%;
		}

		.presentation h1{
			font-size: 3.6em;
		}

		.presentation h2{
			font-size: 1.6em;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .presentation{
			padding-top: 25%;
		}

		.presentation h1{
			font-size: 5em;
		}

		.presentation h2{
			font-size: 2em;
		}
    }
</style>
