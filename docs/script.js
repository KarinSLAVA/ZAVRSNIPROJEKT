document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Hvala na vašem kontaktu! Uskoro ćemo vam se javiti.');
});
let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = product + " - €" + price;
    cartItems.appendChild(listItem);

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    alert(product + " je dodan u košaricu!");
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
<<<<<<< HEAD
=======
    });
>>>>>>> f8298badfa3f0841a92fe80673889fba0fa82f25
}
document.querySelector('#membership-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`Čestitamo, ${firstName} ${lastName}! Postali ste član teretane.`);
});


    const servicePlans = {
        groupTraining: `
            <h4>Video:</h4>
            <video width="100%" controls>
                <source src="https://youtube.com/shorts/fbSM7oCY--g?si=-yx3a615U80ndM00" type="video/mp4">
              
            </video>
        `,
        personalTraining: `
            <h4>Video:</h4>
            <video width="100%" controls>
                <source src="https://youtu.be/3gliq0FnO94?si=ELBd3ZKi1G-rUw9a" type="video/mp4">
              
            </video>
        `,
        cardio: `
            <h4>Video:</h4>
            <video width="100%" controls>
                <source src="https://youtube.com/shorts/cffLd6qkXOk?si=Wpep-jihDlOT57No" type="video/mp4">
                Vaš preglednik ne podržava video oznaku.
            </video>
        `
    };

    function showServiceDetails(service) {
        document.getElementById('service-details').style.display = 'block';
        document.getElementById('service-content').innerHTML = servicePlans[service] || '<p>Trenutno nema dostupnih informacija.</p>';
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

