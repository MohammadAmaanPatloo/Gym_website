
// Set the countdown date
var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();
 // Update the countdown every second
var x = setInterval(function() {
  // Get the current time
  var now = new Date().getTime();
  // Calculate the distance between the countdown date and the current time
  var distance = countDownDate - now;
  // Calculate days, hours, minutes, and seconds from the distance
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the countdown in the "demo" element
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the countdown is finished, display "EXPIRED" and clear the interval
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 