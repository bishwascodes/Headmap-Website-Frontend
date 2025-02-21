document.addEventListener("DOMContentLoaded", (event) => {
    //mobile menu
    document.getElementById('menu-toggle').addEventListener('click', function () {
        // Toggle the 'active' class on the menu
        var mainMenu = document.querySelector('#main-menu');
        mainMenu.classList.toggle('active');

        // Toggle between 'fa-search' and 'fa-times' icons
        var menuToggleIcon = document.getElementById('menu-toggle-icon');
        menuToggleIcon.classList.toggle('fa-bars');
        menuToggleIcon.classList.toggle('fa-times');
    });

    // Search
    document.getElementById('search').addEventListener('click', function () {
        // Toggle the 'active' class on the search form
        var searchForm = document.querySelector('.search-form');
        searchForm.classList.toggle('active');

        // Toggle between 'fa-search' and 'fa-times' icons
        var searchIcon = document.getElementById('search');
        searchIcon.classList.toggle('fa-search');
        searchIcon.classList.toggle('fa-times');
    });
});