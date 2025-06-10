document.addEventListener('DOMContentLoaded', () => {
  const filterBtn = document.getElementById('applyFilterBtn');

  filterBtn.addEventListener('click', () => {
    const destinationFilter = document.getElementById('destination').value.toLowerCase();
    const priceFilter = document.getElementById('priceRange').value;

    const packages = document.querySelectorAll('.container.mt-5 .row.g-4 > .col-md-4');

    packages.forEach(pkg => {
      const title = pkg.querySelector('.card-title').textContent.toLowerCase();
      const imgAlt = pkg.querySelector('img').alt.toLowerCase();
      const priceText = pkg.querySelector('.card-text').textContent;
      const priceMatch = priceText.match(/₹([\d,]+)/);
      let price = priceMatch ? Number(priceMatch[1].replace(/,/g, '')) : null;

      const matchesDestination = destinationFilter === "choose..." || destinationFilter === "" || title.includes(destinationFilter) || imgAlt.includes(destinationFilter);

      let matchesPrice = true;
      if (price !== null) {
        if (priceFilter === "under") {
          matchesPrice = price < 50000;
        } else if (priceFilter === "mid") {
          matchesPrice = price >= 50000 && price <= 100000;
        } else if (priceFilter === "above") {
          matchesPrice = price > 100000;
        }
      }

      pkg.style.display = (matchesDestination && matchesPrice) ? "" : "none";
    });
  });
});

const packages = [
  {
    id: 1,
    name: "Maldives Honeymoon",
    image: "images/maldives.jpg",
    price: 89999,
    nights: "5 Nights",
    details: "Flights + Hotels + Activities. Starting from ₹89,999/person.",
    shortDescription: "A romantic getaway with crystal-clear waters and luxurious stays.",
    longDescription: "Escape to the idyllic islands of Maldives with your loved one. Enjoy luxurious overwater villas, private beaches, water sports, and candlelight dinners by the sea. Perfect for couples looking to unwind and celebrate their love in paradise.",
    placesToVisit: ["Male City", "Hulhumale Beach", "Vaadhoo Island", "Underwater Restaurant"]
  },
  {
    id: 2,
    name: "European Explorer",
    image: "images/european.jpeg",
    price: 150000,
    nights: "10 Days",
    details: "Multi-city Tour. Starting from ₹1,50,000/person.",
    shortDescription: "Discover the charm of Europe’s most iconic cities.",
    longDescription: "Travel through the heart of Europe exploring world-famous landmarks, diverse cultures, and rich history. This guided tour includes sightseeing in Paris, the Colosseum in Rome, canals of Amsterdam, and Berlin’s historical monuments.",
    placesToVisit: ["Paris", "Rome", "Amsterdam", "Berlin"]
  },
  {
    id: 3,
    name: "Dubai Adventure",
    image: "images/dubai.jpg",
    price: 75000,
    nights: "7 Nights",
    details: "Desert Safari + City Tour. Starting from ₹75,000/person.",
    shortDescription: "Experience luxury, thrill, and futuristic architecture.",
    longDescription: "Enjoy a thrilling week in Dubai with dune bashing, skyscraper sightseeing, and world-class shopping. Visit the iconic Burj Khalifa, enjoy luxury at Palm Jumeirah, and immerse yourself in Arabian culture with a desert safari.",
    placesToVisit: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert Safari Camp"]
  },
  {
    id: 4,
    name: "Paris Romance",
    image: "images/paris.jpg",
    price: 120000,
    nights: "6 Nights",
    details: "City Tour + Seine Cruise. Starting from ₹1,20,000/person.",
    shortDescription: "Celebrate love in the City of Lights.",
    longDescription: "Experience the magic of Paris with your partner. Visit the Eiffel Tower, cruise the Seine River at sunset, explore world-famous museums, and dine in romantic cafés. Ideal for honeymoons and anniversaries.",
    placesToVisit: ["Eiffel Tower", "Louvre Museum", "Montmartre", "Seine River"]
  },
  {
    id: 5,
    name: "Singapore Delight",
    image: "images/singapore.jpg",
    price: 65000,
    nights: "4 Nights",
    details: "City Attractions + Sentosa Island. Starting from ₹65,000/person.",
    shortDescription: "A perfect mix of nature, adventure, and modern life.",
    longDescription: "Discover the futuristic city-state of Singapore with a blend of vibrant culture, family attractions, and stunning gardens. Visit Marina Bay Sands, Sentosa Island, and experience nightlife, shopping, and local food scenes.",
    placesToVisit: ["Marina Bay Sands", "Sentosa", "Gardens by the Bay", "Universal Studios"]
  },
  {
    id: 6,
    name: "Bali Escape",
    image: "images/bali.jpg",
    price: 70000,
    nights: "5 Nights",
    details: "Beach Resort + Cultural Tours. Starting from ₹70,000/person.",
    shortDescription: "Relax in tropical paradise with culture and scenery.",
    longDescription: "Unwind on the beautiful beaches of Bali, immerse in rich Balinese traditions, and enjoy breathtaking views of rice terraces and temples. Perfect for both adventure seekers and those wanting a peaceful escape.",
    placesToVisit: ["Ubud", "Kuta Beach", "Tegallalang Rice Terraces", "Uluwatu Temple"]
  },
  {
    id: 7,
    name: "Historic Rome",
    image: "images/rome.jpeg",
    price: 110000,
    nights: "6 Nights",
    details: "Ancient Ruins + Vatican Tour. Starting from ₹1,10,000/person.",
    shortDescription: "Step into ancient history and timeless beauty.",
    longDescription: "Walk through ancient ruins and explore the grandeur of Roman architecture. Visit the Colosseum, explore Vatican City, and savor authentic Italian cuisine in this cultural and historical tour of Rome.",
    placesToVisit: ["Colosseum", "Roman Forum", "Pantheon", "Vatican City"]
  },
  {
    id: 8,
    name: "Tokyo Experience",
    image: "images/tokyo.jpeg",
    price: 130000,
    nights: "7 Nights",
    details: "City + Mt. Fuji Excursion. Starting from ₹1,30,000/person.",
    shortDescription: "Modern wonders meet traditional Japan.",
    longDescription: "Explore the electrifying streets of Tokyo, delve into ancient temples, and enjoy a scenic excursion to Mt. Fuji. From neon lights to peaceful shrines, Tokyo offers a dynamic experience for every traveler.",
    placesToVisit: ["Shibuya", "Asakusa", "Akihabara", "Mt. Fuji"]
  },
  {
    id: 9,
    name: "Kyoto Serenity",
    image: "images/kyoto.jpeg",
    price: 110000,
    nights: "5 Nights",
    details: "Temples + Traditional Culture. Starting from ₹1,10,000/person.",
    shortDescription: "Find peace and tradition in Japan’s cultural heart.",
    longDescription: "Immerse yourself in Japan's cultural heritage with Kyoto’s beautiful temples, geisha districts, and traditional tea ceremonies. Ideal for those seeking calm, history, and natural beauty.",
    placesToVisit: ["Fushimi Inari Shrine", "Kinkaku-ji", "Gion District", "Arashiyama Bamboo Grove"]
  },
  {
    id: 10,
    name: "Iceland Explorer",
    image: "images/reykjavik.webp",
    price: 180000,
    nights: "8 Nights",
    details: "Glaciers + Northern Lights. Starting from ₹1,80,000/person.",
    shortDescription: "Uncover dramatic landscapes and magical skies.",
    longDescription: "Witness nature’s wonders in Iceland—from geysers and glaciers to waterfalls and volcanoes. Chase the Northern Lights, bathe in the Blue Lagoon, and experience unforgettable adventures in the Arctic wild.",
    placesToVisit: ["Reykjavik", "Blue Lagoon", "Golden Circle", "Northern Lights Chase"]
  },
  {
    id: 11,
    name: "Marrakech Magic",
    image: "images/marrakech.jpeg",
    price: 90000,
    nights: "6 Nights",
    details: "Markets + Desert Tours. Starting from ₹90,000/person.",
    shortDescription: "Lose yourself in vibrant colors and exotic charm.",
    longDescription: "Explore Morocco’s cultural gem with bustling souks, enchanting palaces, and unforgettable desert landscapes. Ride camels, taste local cuisine, and discover ancient stories in every corner of Marrakech.",
    placesToVisit: ["Jemaa el-Fnaa", "Sahara Desert", "Bahia Palace", "Atlas Mountains"]
  },
  {
    id: 12,
    name: "New Zealand Thrill",
    image: "images/queenstown.jpeg",
    price: 200000,
    nights: "9 Nights",
    details: "Adventure + Nature. Starting from ₹2,00,000/person.",
    shortDescription: "A land of adventure, mountains, and pristine lakes.",
    longDescription: "Journey across New Zealand’s epic landscapes. From bungee jumping in Queenstown to geysers in Rotorua and fjords in Milford Sound—this trip is a dream for nature lovers and thrill seekers alike.",
    placesToVisit: ["Queenstown", "Rotorua", "Milford Sound", "Franz Josef Glacier"]
  }
];


document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const card = button.closest('.col-md-4');
    if (!card) return;

    const titleEl = card.querySelector('.card-title');
    const imgEl = card.querySelector('img');
    const descEl = card.querySelector('.card-text');

    if (!titleEl || !imgEl || !descEl) return;

    const title = titleEl.textContent;
    const image = imgEl.src;

    // Find matching package
    const selectedPackage = packages.find(pkg => pkg?.name === title);
    const placesToVisit = selectedPackage?.placesToVisit || [];
    const description = descEl.textContent.trim()+selectedPackage?.longDescription+selectedPackage?.shortDescription;

    showDetails(title, image, description, placesToVisit);
  });
});

function showDetails(title, image, description, placesToVisit) {
  document.getElementById('destinationModalLabel').textContent = title;
  document.getElementById('destinationImg').src = image;
  document.getElementById('destinationImg').alt = title;

  const placesHTML = placesToVisit?.length
  ? `<strong>Places to Visit:</strong><ul>${placesToVisit.map(place => `📍 ${place}`).join('')}</ul>`
  : '';



  document.getElementById('destinationDesc').innerHTML = `
    <p>${description}</p>
    ${placesHTML}
  `;

  const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
  modal.show();
}
