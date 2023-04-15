// Get the current date and time
let dateTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

// Display the current time and date
document.getElementById('date-time').textContent = dateTime;

// Update the current time and date every second
setInterval(() {
  // Get the updated date and time
  dateTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

  // Display the updated date and time
  document.getElementById('date-time').textContent = dateTime;
}, 1000);