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
    title: "Riverside Bungalow",
    location: "Brooklyn",
    price: "$89,000",

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d49",
    ],

    details: {
      size: "125 m2",
      bedrooms: "2",
      bathrooms: "2",
      floor: "2nd",
      additionalSpace: "Storage",
      ceilingHeight: "3m",
      renovation: "2022",
      furnishing: "Fully furnished",
      constructionYear: "2020"
    },

    utility: {
      heating: "Gas",
      airCondition: "Yes",
      fireplace: "No",
      elevator: "Yes",
      ventilation: "Yes",
      intercom: "Yes",
      windowType: "Aluminum",
      cableTV: "Yes",
      wifi: "Yes"
    }
  },
  2: {
  title: "Modern City Apartment",
  location: "Manhattan",
  price: "$120,000",

  images: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  ],

  details: {
    size: "150 m2",
    bedrooms: "3",
    bathrooms: "2",
    floor: "5th",
    additionalSpace: "Balcony",
    ceilingHeight: "3.2m",
    renovation: "2023",
    furnishing: "Fully furnished",
    constructionYear: "2021"
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
    ${createRow("fa-bed","Bedrooms",property.details.bedrooms)}
    ${createRow("fa-bath","Bathrooms",property.details.bathrooms)}
    ${createRow("fa-layer-group","Floor",property.details.floor)}
    ${createRow("fa-warehouse","Additional Space",property.details.additionalSpace)}
    ${createRow("fa-arrows-up-down","Ceiling Height",property.details.ceilingHeight)}
    ${createRow("fa-hammer","Renovation",property.details.renovation)}
    ${createRow("fa-couch","Furnishing",property.details.furnishing)}
    ${createRow("fa-calendar","Construction Year",property.details.constructionYear)}
  `;

  // ---------- Utility ----------
  document.getElementById("property-utility").innerHTML = `
    ${createRow("fa-fire","Heating",property.utility.heating)}
    ${createRow("fa-snowflake","Air Condition",property.utility.airCondition)}
    ${createRow("fa-fire","Fireplace",property.utility.fireplace)}
    ${createRow("fa-elevator","Elevator",property.utility.elevator)}
    ${createRow("fa-fan","Ventilation",property.utility.ventilation)}
    ${createRow("fa-phone","Intercom",property.utility.intercom)}
    ${createRow("fa-window-maximize","Window Type",property.utility.windowType)}
    ${createRow("fa-tv","Cable TV",property.utility.cableTV)}
    ${createRow("fa-wifi","Wifi",property.utility.wifi)}
  `;

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


