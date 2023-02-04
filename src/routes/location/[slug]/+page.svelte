<script>
    /** @type {import('./$types').PageData} */
    import Location from './tab-location.svelte';
    export let data;
    let role = data.user.users.role
    let admin =false;
    if (role==="admin")
    {
        admin =true;
    }
    import { enhance } from '$app/forms';

    let showAddLocation = false;
    function ButtonModifyLocation() {
        showAddLocation = !showAddLocation;
    }
</script>
<svelte:head>
    <title>{data.location.location.filmName}</title>
</svelte:head>
<body>
<div class="banner">
    <marquee>Le site des fans de cinéma !</marquee>
</div>
<div class="stonks">
    <img stonks src="/Stonks.png" alt="Stonks" width="300"
         height="300">
</div>
<div class="Pengu">
    <img stonks src="/DabbingPengu.png" alt="Stonks">
</div>
<div class="cinema">
    <img stonks src="/cinema.jpg" alt="cinema">
</div>
<table class="location-tab">
    <Location location={data.location.location} />
</table>
<button  onClick="window.location.href=`/locations`;">Retour aux Locations</button>
{#if admin}

    <div class="Del-Modify">
        <form use:enhance method="POST" action="?/delete_location">
            <button>Delete this Location</button>
        </form>
        <button  on:click={ButtonModifyLocation}>Modify this Location</button>
        {#if showAddLocation}
            <form use:enhance method="POST" action="?/modify_location">
                <fieldset >
                    <input
                      name="filmName"
                      type="text"
                      placeholder="filmName"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="filmType"
                      type="text"
                      placeholder="filmType"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="year"
                      type="text"
                      placeholder="year"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="address"
                      type="text"
                      placeholder="address"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="district"
                      type="text"
                      placeholder="district"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="sourceLocationId"
                      type="text"
                      placeholder="sourceLocationId"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="filmDirectorName"
                      type="text"
                      placeholder="filmDirectorName"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="filmProducerName"
                      type="text"
                      placeholder="filmProducerName"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="startDate"
                      type="text"
                      placeholder="startDate"
                    />
                </fieldset>
                <fieldset >
                    <input
                      name="endDate"
                      type="text"
                      placeholder="endDate"
                    />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        {/if}

    </div>
{/if}
</body>
<style>
    .location-tab{
        position: absolute;
        left: 70%;
        top: 70%;
        transform: translate(-50%,-50%);
    }
    .Del-Modify{
             position: absolute;
             left: 50%;
             top: 80%;
             transform: translate(-50%,-50%);
         }
    .stonks {
        position: absolute;
        left: 10%;
        top: 80%;
        transform: translate(-50%,-50%);
    }
    .cinema {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%,-50%);
    }
    .Pengu {
        position: absolute;
        left: 90%;
        top: 80%;
        transform: translate(-50%,-50%);
    }
    .banner {
        position: fixed;
        top: 5%;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #f2f2f2;
        text-align: center;
        padding: 10px;
        box-sizing: border-box;
        transition: right 10s;
    }
    body {
        background-color: #ADD8E6;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    table {
        position: absolute;
        left: 15%;
        top: 40%;
        width: 100%;
        border-collapse: collapse;
        margin: auto;
        height: 66.66%;
        font-size: 1em;
    }
</style>

