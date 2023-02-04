<script>
    /** @type {import('./$types').PageData} */
    import Location from './location.svelte';
    import { enhance } from '$app/forms';
    export let data;

    let role = data.user.users.role
    let admin =false;
    if (role==="admin")
    {
      admin =true;
    }

    let showAddLocation = false;

    function ButtonAddLocation() {
      showAddLocation = !showAddLocation;
    }

</script>
<svelte:head>
    <title>{"Locations"}</title>
</svelte:head>
<body>
<div class="locations-page">
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
  <div class="tableau-loc">
  <table>

    <tbody>
    {#each data.locations.locations as location}
      <Location location={location} />
    {/each}
    </tbody>
  </table>
  </div>
</div>
<form use:enhance method="POST" action="?/disconnect">
  <div class="link" >
    <button on:click={"?/disconnect"}>Logout</button>
  </div>
</form>
{#if admin}
    <div class="Add_Loc" >
      <button on:click={ButtonAddLocation}>Add New Location</button>
      {#if showAddLocation}
        <form use:enhance method="POST" action="?/add_location">
          <fieldset >
            <input
              name="filmName"
              type="text"
              required
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
      .Add_Loc {
          position: absolute;
          left: 88%;
          top: 30%;
          transform: translate(-50%,-50%);
          padding: 15px 30px;
          background-color: darkslategray;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
      }
      .link {
          position: absolute;
          left: 12%;
          top: 30%;
          transform: translate(-50%,-50%);
          padding: 15px 30px;
          background-color: darkslategray;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 18px;
          cursor: pointer;
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
          top: 15%;
          transform: translate(-50%,-50%);
      }
      .Pengu {
          position: absolute;
          left: 90%;
          top: 80%;
          transform: translate(-50%,-50%);
      }
      body {
          background-color: #ADD8E6;
          font-family: Arial, sans-serif;
          color: #333;
          text-align: center;
      }
      table {
          position: absolute;
          left: 25%;
          top: 25%;
          width: 100%;
          border-collapse: collapse;
          margin: auto;
          height: 66.66%;
          font-size: 1em;
      }
  </style>

