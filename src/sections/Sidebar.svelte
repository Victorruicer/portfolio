<script>
    import { fly } from 'svelte/transition';

    export let show = false;

    let skills = '<skills/>'
    let work = '<work/>'
    let about = '<about/>'
    let ex = 'X'
</script>

{#if show}
  <nav transition:fly={{x:0}}>
    <span class="ex" on:click={() => show = !show}>{ex}</span>
    <div class="sideOptions">
        <a href="#about">{about}</a>
        <a href="#skills">{skills}</a>
        <a href="#work">{work}</a>
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

    a{
        text-decoration: none;
        margin-right: 10px;
        transition: color 0.5s;
    }
    
    a:hover{
        color: var(--purple);
    }

    .ex{
        color: var(--purple);
        cursor: pointer;
        font-size: 2.3em;
        display: flex;
        justify-content: flex-end;
        margin-right: 11px;
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
    }
</style>