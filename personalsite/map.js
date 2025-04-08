document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([43.825, -111.793], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const pickleballCourts = [
        { lat: 43.819612, lon: -111.786085, title: "Court 1" },
        { lat: 43.818611, lon: -111.785511, title: "Court 2" },
        { lat: 43.819422, lon: -111.787044, title: "Court 3" },
        { lat: 43.822336, lon: -111.791036, title: "Court 4" },
        { lat: 43.832960, lon: -111.801260, title: "Court 5" },
        { lat: 43.826720, lon: -111.774565, title: "Court 6" },
        { lat: 43.830920, lon: -111.771332, title: "Court 7" }
    ];

    pickleballCourts.forEach(function(court) {
        L.marker([court.lat, court.lon])
            .addTo(map)
            .bindPopup(`<b>${court.title}</b><br>Pickleball Court`);
    });

    if (window.innerWidth < 768) {
        map.setView([43.825, -111.793], 12); 
    }
});
