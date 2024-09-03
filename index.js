// JavaScript for toggling the dropdown menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
