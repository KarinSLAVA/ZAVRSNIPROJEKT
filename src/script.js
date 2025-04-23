// Scroll na vrh
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alert za prijavu članstva
document.getElementById("membership-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Hvala što ste se prijavili! Uskoro ćemo vas kontaktirati.");
});

// Alert za kontakt formu
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Poruka poslana! Hvala na javljanju.");
});

// Dodavanje u košaricu
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${product} - €${price}`;
    cartItems.appendChild(listItem);

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    alert(`${product} je dodan u košaricu!`);
}

// Detalji usluga + VIDEO dodan za "Grupni treninzi"
function showServiceDetails(service) {
    const content = document.getElementById('service-content');
    const video = document.getElementById('video-container');
    document.getElementById('service-details').style.display = 'block';

    if (service === 'groupTraining') {
        content.innerHTML = `
            <p><strong>Grupni treninzi</strong> su idealni za sve koji vole vježbati u društvu. Treninzi uključuju kardio, HIIT i kružne vježbe uz vodstvo instruktora.</p>
        `;
        video.innerHTML = `
           <iframe width="560" height="315" src="https://www.youtube.com/embed/3gliq0FnO94?si=sx8y6ZwilwhRE4Pn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    } else if (service === 'personalTraining') {
        content.innerHTML = `
            <p><strong>Osobni treninzi</strong> pružaju individualizirani pristup vašem fitness cilju uz stručnu pomoć naših trenera.</p>
        `;
        video.innerHTML = ''; // Nema videa
    } else if (service === 'powerlifting') {
        content.innerHTML = `
            <p><strong>Opremanje za powerlifting</strong> nudi svu potrebnu opremu i programe za napredne vježbače usmjerene na snagu.</p>
        `;
        video.innerHTML = ''; // Nema videa
    }
<<<<<<< HEAD

    serviceDetails.style.display = 'block';
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
=======
>>>>>>> d6a830c70299e29b259ad1375667178b4b42287b
}
