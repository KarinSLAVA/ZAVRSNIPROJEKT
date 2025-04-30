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
function showDetails(option) {
    const detailsContent = document.getElementById('details-content');
    const detailsSection = document.getElementById('details');
    
    if (option === 'group') {
        detailsContent.textContent = 'Grupni trening uključuje vježbe prilagođene svima, uz motivaciju stručnih trenera i energiju grupe.';
    } else if (option === 'personal') {
        detailsContent.textContent = 'Osobni trening je prilagođen vašim specifičnim ciljevima i potrebama, uz stalnu podršku trenera.';
    } else if (option === 'weeklyPlan') {
        detailsContent.innerHTML = `
            <strong>Plan treninga za radni tjedan:</strong>
            <ul>
                <li>Ponedjeljak: Kardio i noge</li>
                <li>Utorak: Leđa i biceps</li>
                <li>Srijeda: Odmor</li>
                <li>Četvrtak: Prsa i triceps</li>
                <li>Petak: Ramena i core</li>
                <li>Subota: Full body trening</li>
                <li>Nedjelja: Aktivno opuštanje</li>
            </ul>
        `;
    } else if (option === 'nutrition') {
        detailsContent.innerHTML = `
            <strong>Preporučeni popis hrane:</strong>
            <ul>
                <li>Piletina, riba, jaja</li>
                <li>Riža, krumpir, zobene pahuljice</li>
                <li>Svježe povrće i voće</li>
                <li>Proteinski dodaci</li>
                <li>Oraščasti plodovi i maslinovo ulje</li>
            </ul>
        `;
    }
    
    detailsSection.style.display = 'block';
}
function showServiceDetails(service) {
    const serviceContent = document.getElementById('service-content');
    const serviceDetails = document.getElementById('service-details');

    if (service === 'groupTraining') {
        serviceContent.innerHTML = `
            <strong>Grupni treninzi:</strong>
            <ul>
                <li>Dinamični treninzi za sve razine fitnessa.</li>
                <li>Tim treneri za podršku i motivaciju.</li>
                <li>Rad na izdržljivosti, snazi i fleksibilnosti.</li>
            </ul>
            <p><strong>Plan prehrane:</strong> Povećajte unos proteina i kompleksnih ugljikohidrata.</p>
        `;
    } else if (service === 'personalTraining') {
        serviceContent.innerHTML = `
            <strong>Osobni treninzi:</strong>
            <ul>
                <li>Individualizirani pristup temeljen na vašim ciljevima.</li>
                <li>Detaljna analiza tehnike izvođenja vježbi.</li>
            </ul>
            <p><strong>Plan prehrane:</strong> Balansirana prehrana s naglaskom na makronutrijente.</p>
        `;
    } else if (service === 'powerlifting') {
        serviceContent.innerHTML = `
            <strong>Opremanje za powerlifting:</strong>
            <ul>
                <li>Programi za povećanje snage u čučnju, bench pressu i deadliftu.</li>
                <li>Specijalizirana oprema za trening i natjecanja.</li>
            </ul>
            <p><strong>Plan prehrane:</strong> Fokus na visokoproteinske obroke i kalorijski suficit.</p>
        `;
    }

    serviceDetails.style.display = 'block';
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Glatki efekt pomicanja
    });
}

document.querySelector('#membership-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprječava ponovno učitavanje stranice

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    alert(`Čestitamo, ${firstName} ${lastName}! Postali ste član teretane.`);
});


    const servicePlans = {
        groupTraining: `
            <h4>Plan prehrane:</h4>
            <p>Ponedjeljak - Visokoproteinski obroci</p>
            <p>Utorak - Niskomasni obrok s povrćem</p>
            

            <h4>Plan treninga:</h4>
            <p>Ponedjeljak - Full body workout (40 minuta)</p>
            <p>Utorak - Cardio (30 minuta)</p>
           

            <h4>Video:</h4>
            <video width="100%" controls>
                <source src="https://youtube.com/shorts/fbSM7oCY--g?si=-yx3a615U80ndM00" type="video/mp4">
              
            </video>
        `,
        personalTraining: `
            <h4>Plan prehrane:</h4>
            <p>Individualni plan prema vašim potrebama</p>
          

            <h4>Plan treninga:</h4>
            <p>Osobni plan sa svakodnevnim vježbama</p>

            <h4>Video:</h4>
            <video width="100%" controls>
                <source src="https://youtu.be/3gliq0FnO94?si=ELBd3ZKi1G-rUw9a" type="video/mp4">
              
            </video>
        `,
        cardio: `
            <h4>Plan prehrane:</h4>
            <p>Obroci bogati energijom za izdržljivost</p>

            <h4>Plan treninga:</h4>
            <p>Svaki dan - 45 minuta kardio vježbi</p>

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

