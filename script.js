const navSetup = (() => {
    const burgerNav = document.querySelector(".nav-img");
    const sidebarNav = document.querySelector(".header-sidebar");

    burgerNav.addEventListener("click", () => {
        sidebarNav.classList.toggle("active");
    });

})();