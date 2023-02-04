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
      <th>address</th>
      <th>district</th>
      <th>sourceLocationId</th>
      <th>filmDirectorName</th>
      <th>filmProducerName</th>
      <th>startDate</th>
      <th>endDate</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{location.filmName}</td>
      <td>{location.filmType}</td>
      <td>{location.year}</td>
      <td>{location.address}</td>
      <td>{location.district}</td>
      <td>{location.sourceLocationId}</td>
      <td>{location.filmDirectorName}</td>
      <td>{location.filmProducerName}</td>
      <td>{location.startDate}</td>
      <td>{location.endDate}</td>
    </tr>
    </tbody>
  </table>
</div>
<style>
    table {
        background-color: darkslategray;
        font-palette: light;
        color: yellow;
        width: 50%;
        border-collapse: collapse;
    }
    th, td {
        color: beige;
        width: 20%;
        border: 1px solid midnightblue;
        padding: 4px;
        text-align: center;
    }
</style>