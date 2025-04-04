document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const rolloutText = button.parentElement.nextElementSibling;
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", !isExpanded);
        rolloutText.classList.toggle("expanded");

        if(!isExpanded) {
            button.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
        } else {
            button.style.backgroundImage = "url('./assets/images/icon-plus.svg')"; 
        }
    });
});
