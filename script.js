// Show alert when Add to Cart is clicked
document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".product-card .btn");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
