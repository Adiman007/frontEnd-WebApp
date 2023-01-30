<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<svelte:head>
    <title>{data.locations.title}</title>
</svelte:head>

<div class="locations-page">
    <div class="banner">
        <div class="container">
            <h1>{data.locations.title}</h1>
        </div>
    </div>

    <div class="container page">
        <div class="row article-content">
            <div class="col-xs-12">

                <ul class="tag-list">
                    {#each data.locations.filmName as tag}
                        <li class="tag-default tag-pill tag-outline">{tag}</li>
                    {/each}
                </ul>
            </div>
        </div>

        <hr />

        <div class="article-actions" />

    </div>
</div>