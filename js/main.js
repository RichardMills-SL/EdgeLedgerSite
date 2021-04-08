// initialise and add map
function initMap() {
    //Location
    const loc = { lat: -33.815102, lng: 151.003235 };
    //Center Map on location
    const map = new google.maps.Map(document.querySelector('.map'),
     {
         zoom: 16,
         center: loc
     });
     // Marker position at Location
     const marker = new google.maps.Marker({ position: loc, maps: map });
}

//Sticky Menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 295) {
        document.querySelector('#navbar').style.opacity = 0.85;
        
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 65
            },
            800
        );
    }
});