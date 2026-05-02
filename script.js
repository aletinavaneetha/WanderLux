function calculateCost() {

  let destination = document.getElementById("destination").value;
  let travellers = parseInt(document.getElementById("travellers").value);
  let days = parseInt(document.getElementById("days").value);
  let style = parseFloat(document.getElementById("style").value);

  if (isNaN(travellers) || travellers <= 0 ||
      isNaN(days) || days <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid values.";
    return;
  }

  let baseCost = {
    "Bali": 130,
    "Paris": 220,
    "Dubai": 200
  };

  // Extra fixed costs (flight + hotel)
  let extraCost = 500;

  let total = (travellers * days * baseCost[destination] * style) + extraCost;

  document.getElementById("result").innerText =
    `Estimated cost for ${travellers} travellers to ${destination} for ${days} days: $${total} (${getStyle(style)} package)`;
}

function getStyle(style) {
  if (style == 1) return "Budget";
  if (style == 1.5) return "Standard";
  return "Luxury";
}

function validateForm() {
  alert("Appointment submitted successfully!");
  return true;
}
// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showSlide, 3000);