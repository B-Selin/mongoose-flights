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

<!-- start tickets list -->

<% if (flight.ticket && flight.tickets.length > 0) { %>

  <h3>Tickets</h3>
  <table>
    <thead>
      <tr>
        <th>Seat Number</th>
        <th>Ticket Price</th>
      </tr>
    </thead>
  
    <tbody>
      <% flight.tickets.forEach(ticket => { %>
      <tr>
        <td><%= ticket.seat %></td>
        <td><%= ticket.price %></td>
      </tr>
      <% }) %>
    </tbody>
    </table>
    <% } else { %>
      <p>No tickets found for this flight.</p>
    <% } %>
  <!-- End tickets list -->
