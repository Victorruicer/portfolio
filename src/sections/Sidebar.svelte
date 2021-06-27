<script>
    import { fly } from 'svelte/transition';

    export let show = false;

    let skills = '<skills/>'
    let work = '<work/>'
    let about = '<about/>'
    let ex = 'X'
</script>

{#if show}
  <nav transition:fly={{x: 300, opacity: 1}}>
    <span class="ex" on:click={() => show = !show}>{ex}</span>
    <div class="sideOptions">
        <a href="#skills">{skills}</a>
        <a href="#work">{work}</a>
        <a href="#about">{about}</a>
    </div>
  </nav>
{/if}
		
<style>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(to left, rgb(14, 18, 18, 1) 50%, rgb(14, 18, 18, 0));
        overflow-y: auto;
        width: 100%;
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
        height: 70%;
    }

    .sideOptions a{
        color: var(--light);
        margin-top: 4vh;
    }
</style>