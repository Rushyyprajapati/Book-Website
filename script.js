function reserveBook() {
    // Assuming you would make an asynchronous request to reserve the book
    // For demonstration purposes, an alert is used here.
    alert('Book Reserved!');
}
function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
}
function toggleCart() {
    var cartLogo = document.getElementById("cartLogo");
    cartLogo.classList.toggle("active-cart");
}