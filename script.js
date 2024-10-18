// Function to handle booking a slot
function bookSlot(button) {
    if (!button.classList.contains("booked")) {
        button.classList.add("booked");
        button.innerHTML += " (Booked)";
        alert("You have successfully booked this slot!");
    } else {
        alert("This slot is already booked!");
    }
}
