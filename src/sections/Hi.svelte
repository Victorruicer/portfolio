<script>
	
</script>

<style>
	h1{
		color: var(--light);
	}
	h2{
		color: var(--light);
	}
	.name{
		color: var(--purple);
	}

	.presentation{
		margin-top: 70%;
		margin-bottom: 70%;

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.presentation{
			margin-top: 55%;
			margin-bottom: 55%;
			margin-left: 4vw;
			margin-right: 4vw;
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
			margin-top: 17%;
			margin-bottom: 17%;
			margin-left: 15vw;
			margin-right: 15vw;
		}

		.presentation h1{
			font-size: 5em;
		}

		.presentation h2{
			font-size: 2em;
		}
    }
</style>


<div class="presentation">
	<h1>Hi! I'm <span class="name">Víctor Ruiz</span></h1>
	<h2>I'm a junior full-stack web developer eager to learn all kind of new technologies and improve on the already known</h2>
</div>
