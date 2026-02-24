document.addEventListener('DOMContentLoaded', () => {
    // 1. Page Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000);
            }, 500);
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('py-6');
            navbar.classList.add('py-4');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-6');
        }
    });

    // 3. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                if (bar1 && bar2) {
                    bar1.style.transform = 'none';
                    bar2.style.transform = 'none';
                }
            } else {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                if (bar1 && bar2) {
                    bar1.style.transform = 'translateY(4px) rotate(45deg)';
                    bar2.style.transform = 'translateY(-4px) rotate(-45deg)';
                }
            }
        });

        // Close menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                if (bar1 && bar2) {
                    bar1.style.transform = 'none';
                    bar2.style.transform = 'none';
                }
            });
        });
    }

    // 4. Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active', 'opacity-100');
            slide.classList.add('opacity-0');
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active', 'opacity-100');
        slides[index].classList.remove('opacity-0');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    if (slides.length > 0) {
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }, 6000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });
    }

    // 5. Scroll Reveal (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. Counter Animation
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                let count = 0;
                const increment = target / 100;
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        entry.target.innerText = Math.ceil(count);
                        setTimeout(updateCount, 20);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                updateCount();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
});






const properties = {

  1: {
     slug: "riverside-bungalow",
    title: "Riverside Bungalow",
    location: "Brooklyn",
    price: "210€ mila",
    

  intro: {
    title: "villa ",
    description: "Splendida villa situata nella tranquilla e prestigiosa zona di Pessano con Bornago, in via provinciale 58, cap 20042.  Questa villa in vendita al piano in alzato offre ampi spazi interni, luminosi soggiorni e camere confortevoli, perfetta per famiglie che cercano eleganza e comfort.  La proprietà è circondata da un giardino privato ben curato, ideale per momenti di relax all'aperto o per intrattenere ospiti.  Costruita nel 1970, la villa combina uno stile classico con moderni aggiornamenti, tra cui aria condizionata nuova e impianti efficienti. La posizione è strategica, con facile accesso ai trasporti pubblici e servizi locali, garantendo una vita comoda e tranquilla.  Senza spese condominiali e con ampi spazi interni, questa villa rappresenta un'opportunità unica per chi desidera una residenza di qualità. Prezzo richiesto: 210€ mila.."
  },

    images: [
      "./img/villa-1.jpg",
      "./img/villa-1(1).jpg",
      
    ],

    details: {
      size: "80 m2",
      price : "210€ mila",
      floor: "vendita piano in alzato",
      bedrooms: "1",
      bathrooms: "1",
      kitchen:"1",
      store: "1",
      additionalSpace: "Storage",
      garden: "1",
      Hall: "1",
      furnishing: "Fully furnished",
      constructionYear: "1970"
    },

    // utility: {
    //   heating: "Gas",
    //   airCondition: "Yes",
    //   fireplace: "No",
    //   elevator: "Yes",
    //   ventilation: "Yes",
    //   intercom: "Yes",
    //   windowType: "Aluminum",
    //   cableTV: "Yes",
    //   wifi: "Yes"
    // }
  },
  2: {
  title: "Modern City Apartment",
  location: "Manhattan",
  price: "$120,000",

   intro: {
    title: " appartamento",
    description: "Splendido appartamento situato nella rinomata e tranquilla zona di Voghera, a pochi passi dalla stazione ferroviaria e vicino a tutti i principali servizi della città. L'immobile, posto al terzo piano, offre ampi spazi interni, con due camere da letto confortevoli e luminose, un soggiorno spazioso ideale per momenti di relax o per accogliere ospiti, un bagno funzionale e una cucina completamente attrezzata. Costruito nel 1970, l'appartamento combina uno stile classico con aggiornamenti moderni per garantire comfort e praticità quotidiana. La presenza di una cantina offre spazio aggiuntivo per riporre oggetti e mantenere l'abitazione ordinata.  La posizione strategica dell'immobile permette un facile accesso ai trasporti pubblici, rendendo semplici gli spostamenti verso altre zone di Voghera e del Ticino. L'ambiente circostante è tranquillo, perfetto per chi desidera vivere in una zona residenziale sicura e serena.  Senza spese condominiali elevate, l'appartamento rappresenta un'ottima opportunità sia per giovani coppie che per famiglie. Prezzo richiesto: 89.000€"
  },

  images: [
    "./img/1 (1).jpeg",
    "./img/1 (2).jpeg",
    "./img/1 (3).jpeg",
    "./img/1 (4).jpeg",
  ],

details: {
      size: "90 m2",
      price : " 89.000€",
      floor: "Terzo piano",
      bedrooms: "2",
      bathrooms: "1",
      kitchen:"1",
      store: "1",
      additionalSpace: "Storage",
      // garden: "",
      Hall: "1",
      furnishing: "Fully furnished",
      constructionYear: "1970"
    },

  utility: {
    heating: "Central heating",
    airCondition: "Yes",
    fireplace: "No",
    elevator: "Yes",
    ventilation: "Yes",
    intercom: "Yes",
    windowType: "Double glass",
    cableTV: "Yes",
    wifi: "Yes"
  }
},
3: {
  title: "Green Valley House",
  location: "Queens",
  price: "$210,000",

  images: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  ],

  details: {
    size: "210 m2",
    bedrooms: "4",
    bathrooms: "3",
    floor: "2 Floors",
    additionalSpace: "Garden",
    ceilingHeight: "3.5m",
    renovation: "2023",
    furnishing: "Semi furnished",
    constructionYear: "2018"
  },

  utility: {
    heating: "Central",
    airCondition: "Yes",
    fireplace: "Yes",
    elevator: "No",
    ventilation: "Yes",
    intercom: "Yes",
    windowType: "Double glass",
    cableTV: "Yes",
    wifi: "Yes"
  }
},
4: {
  title: "Green House",
  location: "Queens",
  price: "$210,000",

  images: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  ],

  details: {
    size: "210 m2",
    bedrooms: "4",
    bathrooms: "3",
    floor: "2 Floors",
    additionalSpace: "Garden",
    ceilingHeight: "3.5m",
    renovation: "2023",
    furnishing: "Semi furnished",
    constructionYear: "2018"
  },

  utility: {
    heating: "Central",
    airCondition: "Yes",
    fireplace: "Yes",
    elevator: "No",
    ventilation: "Yes",
    intercom: "Yes",
    windowType: "Double glass",
    cableTV: "Yes",
    wifi: "Yes"
  }
},
5: {
  title: "Green Valley House",
  location: "Queens",
  price: "$210,000",

  images: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  ],

  details: {
    size: "210 m2",
    bedrooms: "",
    bathrooms: "3",
    floor: "2 Floors",
    additionalSpace: "Garden",
    ceilingHeight: "3.5m",
    renovation: "2023",
    furnishing: "Semi furnished",
    constructionYear: "2018"
  },

  utility: {
    heating: "Central",
    airCondition: "Yes",
    fireplace: "Yes",
    elevator: "No",
    ventilation: "Yes",
    intercom: "Yes",
    windowType: "Double glass",
    cableTV: "Yes",
    wifi: "Yes"
  }
}



};



const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const property = properties[id];

if(property){

  // ---------- Gallery ----------
  const mainImage = document.getElementById("mainImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");

  mainImage.src = property.images[0];

  property.images.forEach((img, index) => {

    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.className = `
      w-28 h-20 object-cover rounded-lg cursor-pointer
      border-2 ${index === 0 ? "border-black" : "border-transparent"}
      hover:border-black transition
    `;

    thumb.addEventListener("click", () => {
      mainImage.src = img;

      document.querySelectorAll("#thumbnailContainer img")
        .forEach(t => t.classList.remove("border-black"));

      thumb.classList.add("border-black");
    });

    thumbnailContainer.appendChild(thumb);
  });


  // ---------- Details ----------
  document.getElementById("property-details").innerHTML = `
    ${createRow("fa-ruler-combined","Size",property.details.size)}
    ${createRow("fas fa-dollar-sign"," Prezzo",property.details.price)}
    ${createRow("fas fa-building","Pavimento",property.details.floor)}
    ${createRow("fa-bed","Camera di letto",property.details.bedrooms)}
    ${createRow("fa-bath","Bagno",property.details.bathrooms)}
    ${createRow("fa-warehouse","cantina ",property.details.store)}
    ${createRow("fas fa-utensils","cucina ",property.details.kitchen)}
    ${createRow("fas fa-tree","Giardino ",property.details.garden)}
    ${createRow("fas fa-couch","soggiorno  ",property.details.Hall)}
    ${createRow("fa-calendar","anno di costruzione",property.details.constructionYear)}
  `;

  // ---------- Utility ----------
  // document.getElementById("property-utility").innerHTML = `
  //   ${createRow("fa-fire","Heating",property.utility.heating)}
  //   ${createRow("fa-snowflake","Air Condition",property.utility.airCondition)}
  //   ${createRow("fa-fire","Fireplace",property.utility.fireplace)}
  //   ${createRow("fa-elevator","Elevator",property.utility.elevator)}
  //   ${createRow("fa-fan","Ventilation",property.utility.ventilation)}
  //   ${createRow("fa-phone","Intercom",property.utility.intercom)}
  //   ${createRow("fa-window-maximize","Window Type",property.utility.windowType)}
  //   ${createRow("fa-tv","Cable TV",property.utility.cableTV)}
  //   ${createRow("fa-wifi","Wifi",property.utility.wifi)}
  // `;

 

}

function createRow(icon,label,value){
  return `
    <div class="flex justify-between border-b pb-3">
      <div class="flex items-center gap-3 text-gray-500">
        <i class="fa-solid ${icon} text-sm"></i>
        <span>${label}:</span>
      </div>
      <span class="text-black font-medium">${value}</span>
    </div>
  `;
}




// افترض ان properties موجودة زي ما انت خليتها
// const properties = { 1: { title: ..., intro: { title: ..., description: ... }, ... } }

// اقرأ الـ id من الرابط، مثلا property.html?id=1
const params = new URLSearchParams(window.location.search);
const propertyId = params.get("id");

// اختار property المناسب
const propertyy = properties[propertyId];

if(propertyy && property.intro){
  // العنوان من intro.title
  document.getElementById("property-title").textContent = property.intro.title;

  // الوصف من intro.description
  document.getElementById("property-description").textContent = propertyy.intro.description;
}
