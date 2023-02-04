<script>
  export let location;
</script>
<div>
<table class="location">
  <thead>
  <tr>
    <th>filmName</th>
    <th>filmType</th>
    <th>year</th>
    <th>All Info</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>{location.filmName}</td>
    <td>{location.filmType}</td>
    <td>{location.year}</td>
    <button  onClick="window.location.href=`/location/{location._id}`;">ALL INFO</button>
  </tr>
  </tbody>
</table>
</div>
<style>
    table {

        width: 50%;
        border-collapse: collapse;
    }
    button{
        width: 100%;
        padding: 8px;
        text-align: center;
    }
    th, td {
        width: 20%;
        border: 1px solid midnightblue;
        padding: 4px;
        text-align: center;
    }
</style>