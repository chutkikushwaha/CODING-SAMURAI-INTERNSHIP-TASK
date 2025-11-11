// Generate seat buttons dynamically for redesigned UI
const seatContainer = document.getElementById("seat-container");
for (let i = 1; i <= 12; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");
  seat.textContent = i;
  seat.addEventListener("click", () => seat.classList.toggle("selected"));
  seatContainer.appendChild(seat);
}

// Elements
const bookBtn = document.getElementById("book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const message = document.getElementById("message");
const toast = document.getElementById("toast");

// Booking
bookBtn.addEventListener("click", () => {
  message.style.display = "none";
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!date || !time) {
    showError("Please select date and time.");
    return;
  }

  if (selectedSeats.length === 0) {
    showError("Select at least one seat.");
    return;
  }

  showToast("Booking Confirmed ✔");
});

// Cancel
cancelBtn.addEventListener("click", () => {
  document
    .querySelectorAll(".seat.selected")
    .forEach((s) => s.classList.remove("selected"));
  showError("Booking cancelled.");
});

// Helper functions
function showError(text) {
  message.textContent = text;
  message.style.display = "block";
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}
