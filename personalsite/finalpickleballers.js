document.addEventListener('DOMContentLoaded', function() {
    const mapLink = document.querySelector('a');
    
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
        mapLink.style.color = '#2a9d8f'; 
    } else if (currentHour >= 12 && currentHour < 18) {
        mapLink.style.color = '#e63946'; 
    } else {
        mapLink.style.color = '#1d3557'; 
    }
});
