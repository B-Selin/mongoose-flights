<!-- <script>
  function submitForm(event) {
    event.preventDefault();
    fetch('/flights/<%= flight._id %>/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        airport: event.target.airport.value,
        arrival: event.target.arrival.value
      })
    })
    .then(res => res.json())
    .then(flight => {
      // Re-render show view with updated flight
    })
  }
  </script>  -->
