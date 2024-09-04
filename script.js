document.querySelector(".dropdown-label").addEventListener("click", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show"); // Mostra ou oculta o menu
});

document.querySelectorAll(".dropdown-menu li").forEach(function (item) {
    item.addEventListener("click", function () {
        var selectedValue = this.getAttribute("data-value");
        var hiddenInput = document.getElementById("opcoes");

        // Atualiza o texto da label e o valor do input oculto
        document.querySelector(".dropdown-label").textContent = this.textContent;
        hiddenInput.value = selectedValue;

        // Oculta o menu após a seleção
        document.getElementById("dropdown-menu").classList.remove("show");
    });
});

// Oculta o menu se o usuário clicar fora dele
document.addEventListener("click", function (event) {
    var dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
        document.getElementById("dropdown-menu").classList.remove("show");
    }
});
