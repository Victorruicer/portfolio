<script>
    import Sidebar from './Sidebar.svelte';

    let sidebar_show = false;

    let home = '<home/>'
    let skills = '<skills/>'
    let work = '<work/>'
    let about = '<about/>'
</script>


<div class="sticky">
    <header>
        <div>
            <span class="home"><a href="#hi">{home}</a></span>
        </div>
        
        <!-- MOBILE -->
        {#if !sidebar_show}
            <div class="burger" on:click={() => sidebar_show = !sidebar_show}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        {/if}
        
        <!-- PC -->
        <div class="nav-links">
            <a href="#skills">{skills}</a>
            <a href="#work">{work}</a>
            <a href="#about" style="margin-right: 5vw;">{about}</a>
        </div>
    </header>
</div>

<Sidebar bind:show={sidebar_show} />

<style>
    header{
        display: flex;
        justify-content: space-between;
    }

    .sticky{
        position: fixed;
        width: 100%;
        top: 0;
        margin-top: 5px;
        padding-left: 7px;
        padding-bottom: 5vh;
        background: linear-gradient(rgb(14, 18, 18, 1) 50%, rgb(14, 18, 18, 0));
    }

    .home{
        color: var(--purple);
        font-size: 1.4em;
        cursor: pointer;
    }
    
    a{
        color: var(--purple);
        text-decoration: none;
    }

    .burger{
        cursor: pointer;
        display: block;
        padding-right: 15px;
    }

    .burger div{
        width: 23px;
        height: 4px;
        background-color: var(--light);
        margin: 5px;
    }

    .nav-links{
        display: none;
        font-size: 1.4em;
    }

    .nav-links a{
        margin-right: 1em;
        color: var(--light);
        transition: color 0.5s;
    }
    
    .nav-links a:hover{
        color: var(--purple);
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        header{
            padding-left: 17vw;
            padding-right: 17vw;
        }

        .nav-links{
            display: flex;
            justify-content: space-around;
        }

        .burger{
            display: none;
        }

    }

</style>
