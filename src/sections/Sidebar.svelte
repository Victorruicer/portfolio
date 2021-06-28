<script>
    import { fly } from 'svelte/transition';

    export let show = false;

    let home = '<home/>'
    let skills = '<skills/>'
    let work = '<work/>'
    let about = '<about/>'
</script>

{#if show}
  <nav transition:fly={{duration: 600}}>
    <div class="head" >
        <span class="home"><a href="#hi" on:click={() => show = !show}>{home}</a></span>
        <span class="cross" on:click={() => show = !show}>X</span>
    </div>
    <div class="sideOptions">
        <a href="#about" on:click={() => show = !show}>{about}</a>
        <a href="#skills" on:click={() => show = !show}>{skills}</a>
        <a href="#work" on:click={() => show = !show}>{work}</a>
    </div>
  </nav>
{/if}
		
<style>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        background: rgb(14, 18, 18, 0.9);
        overflow-y: auto;
        width: 100%;
    }

    .head{
        display: flex;
        justify-content: space-between;
    }

    .home{
        font-size: 1.4em;
        cursor: pointer;
        margin-top: 5px;
        padding-left: 7px;
    }
    
    .home a{
        color: var(--purple);
        text-decoration: none;
    }

    .cross{
        color: var(--purple);
        cursor: pointer;
        font-size: 2.3em;
        margin-right: 11px;
        text-decoration: none;
    }

    .sideOptions{
        font-size: 2em;
        float: right;
        display: flex;
        flex-direction: column-reverse;
        height: 75%;
    }

    .sideOptions a{
        color: var(--light);
        margin-top: 3.5vh;
        text-decoration: none;
        margin-right: 10px;
        transition: color 0.5s;
    }

    .sideOptions a:hover{
        color: var(--purple);
    }
</style>