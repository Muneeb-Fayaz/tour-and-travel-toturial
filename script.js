// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hide/show navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-70px'; // Hide navbar on scroll down
    } else {
        navbar.style.top = '0'; // Show navbar on scroll up
    }
    
    lastScrollTop = scrollTop;
});

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

// Generate Package Cards
const destinations = [
    {
        name: "Srinagar",
        description: "The heart of Kashmir, famous for Dal Lake and Mughal Gardens.",
        image: "wa.jpg", // Thumbnail image
        background: "bg-srinagar.jpg" // Background image placeholder
    },
    {
        name: "Gulmarg",
        description: "A paradise for skiers and nature lovers.",
        image: "gulmarg.jpg",
        background: "bg-gulmarg.jpg"
    },
    {
        name: "Pahalgam",
        description: "Known for its scenic meadows and river views.",
        image: "pahalgam.jpg",
        background: "bg-pahalgam.jpg"
    },
    {
        name: "Sonamarg",
        description: "The meadow of gold, gateway to Ladakh.",
        image: "sonmarg.jpg",
        background: "bg-sonamarg.jpg"
    },
    {
        name: "Betaab Valley",
        description: "A lush valley surrounded by mountains.",
        image: "betaabvalley.jpg",
        background: "bg-betaab.jpg"
    },
    {
        name: "Yusmarg",
        description: "A tranquil meadow with pine forests.",
        image: "yusmarg.jpg",
        background: "bg-yusmarg.jpg"
    },
    {
        name: "Doodhpathri",
        description: "A hidden gem with rolling green pastures.",
        image: "Doodhpathri.jpg",
        background: "bg-doodhpathri.jpg"
    },
    {
        name: "Aru Valley",
        description: "A base for treks and camping in Kashmir.",
        image: "Aru Valley.jpg",
        background: "bg-aru.jpg"
    },
    {
        name: "Verinag",
        description: "Famous for its spring and Mughal garden.",
        image: "Verinag.jpg",
        background: "bg-verinag.jpg"
    },
    {
        name: "Kupwara",
        description: "Known for its untouched natural beauty.",
        image: "Kupwara.jpg",
        background: "bg-kupwara.jpg"
    },
    {
        name: "Kokernag",
        description: "Famous for its fresh water springs and gardens.",
        image: "Kokernag.jpg",
        background: "bg-kokernag.jpg"
    },
    {
        name: "Gurez Valley",
        description: "A remote paradise with pristine landscapes.",
        image: "Gurez Valley.jpg",
        background: "bg-gurez.jpg"
    },
    {
        name: "Aharbal Falls",
        description: "The 'Niagara Falls' of Kashmir, perfect for nature lovers.",
        image: "Aharbal Falls.jpg",
        background: "bg-aharbal.jpg"
    },
    {
        name: "Lolab Valley",
        description: "A valley of enchanting meadows and dense forests.",
        image: "Lolab Valley.jpg",
        background: "bg-lolab.jpg"
    },
    {
        name: "Sinthan Top",
        description: "High-altitude pass with breathtaking views.",
        image: "Sinthan Top.jpg",
        background: "bg-sinthan.jpg"
    }
];

const packagesGrid = document.querySelector('.packages-grid');
destinations.forEach(destination => {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.style.backgroundImage = `url('${destination.background}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <div class="package-info">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <button class="whatsapp-btn" onclick="getPackageDetails('${destination.name}')">
                Get Details
            </button>
        </div>
    `;
    packagesGrid.appendChild(card);
});

// Generate Testimonials
const testimonials = [
    { name: 'Muneeb Fayaz.', rating: 5, text: 'Amazing experience! The team made our Kashmir trip unforgettable.' },
    { name: 'Asra.', rating: 5, text: 'Excellent service and beautiful locations. Highly recommended!' },
    { name: 'Raj.', rating: 4, text: 'Great tour packages and professional guides.' }
];

const testimonialContainer = document.querySelector('.testimonials-container');
testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
        <div class="rating">
            ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5-testimonial.rating)}
        </div>
        <p>${testimonial.text}</p>
        <h4>${testimonial.name}</h4>
    `;
    testimonialContainer.appendChild(card);
});

// WhatsApp Integration
function contactWhatsApp() {
    const message = "Hi! I'm interested in knowing more about your Kashmir tour packages.";
    const whatsappNumber = "919797865597";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function getPackageDetails(packageName) {
    const message = `Hi! I'm interested in getting details about ${packageName}.`;
    const whatsappNumber = "919797865597";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Generate Hotel Cards
const hotels = [
    {
        name: "Luxury Palace Hotel",
        location: "Dal Lake, Srinagar",
        price: "₹4,500/night",
        rating: 4.5,
        amenities: ["WiFi", "Room Service", "Lake View", "Restaurant"],
        image: "LuxuryPalace.jpg",
        background: "bg-hotel1.jpg" // Background image placeholder
    },
    {
        name: "Mountain View Resort",
        location: "Gulmarg",
        price: "₹5,500/night",
        rating: 4.8,
        amenities: ["Skiing Access", "Spa", "Mountain View", "Restaurant"],
        image: "gulmarg22.jpg",
        background: "bg-hotel2.jpg"
    },
    {
        name: "Heritage Houseboat",
        location: "Dal Lake, Srinagar",
        price: "₹3,500/night",
        rating: 4.3,
        amenities: ["Lake View", "Traditional Decor", "Room Service"],
        image: "Heritage22.jpg",
        background: "bg-hotel3.jpg"
    },
    {
        name: "Pine View Hotel",
        location: "Pahalgam",
        price: "₹4,000/night",
        rating: 4.6,
        amenities: ["River View", "Trekking Tours", "Restaurant", "WiFi"],
        image: "pine3.jpg",
        background: "bg-hotel4.jpg"
    },
    {
        name: "Royal Paradise Resort",
        location: "Sonamarg",
        price: "₹6,000/night",
        rating: 4.7,
        amenities: ["Mountain View", "Luxury Spa", "Restaurant", "Activities"],
        image: "royall22.jpg",
        background: "bg-hotel5.jpg"
    }
];

const hotelsGrid = document.querySelector('.hotels-grid');
hotels.forEach(hotel => {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    card.style.backgroundImage = `url('${hotel.background}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-details">
            <h3>${hotel.name}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
            <div class="rating">
                ${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 ? '½' : ''}
                ${hotel.rating}/5
            </div>
            <div class="hotel-amenities">
                ${hotel.amenities.map(amenity => `<span class="amenity">${amenity}</span>`).join('')}
            </div>
            <p class="price">${hotel.price}</p>
            <button class="whatsapp-btn" onclick="getHotelDetails('${hotel.name}')">
                Book Now
            </button>
        </div>
    `;
    hotelsGrid.appendChild(card);
});

function getHotelDetails(hotelName) {
    const message = `Hi! I'm interested in booking ${hotelName}. Please provide me with availability and booking details.`;
    const whatsappNumber = "919797865597";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
