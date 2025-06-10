const destinations_content = [
  {
          
    name: "Paris",
    image: "images/paris.jpg",
    message: `Explore the timeless beauty of Paris, where romance meets art at every corner. From the Eiffel Tower to the charming cafés in Montmartre, this city breathes life into your dreams.

Wander through the Louvre, cruise along the Seine, and let the magic of the City of Light captivate your soul.`
  },
  {
    name: "Maldives",
    image: "images/maldives.jpg",
    message: `Escape to the turquoise waters of the Maldives where serenity meets luxury. The islands offer unmatched beauty with overwater bungalows and coral reefs that sparkle beneath the sun.

It's the perfect getaway for honeymooners, divers, or anyone craving peace and paradise under the stars.`
  },
  {
    name: "Singapore",
    image: "images/singapore.jpg",
    message: `Discover the dynamic fusion of tradition and innovation in Singapore. Whether you're exploring the Supertree Grove or savoring local hawker food, the city is a blend of culture and modernity.

With gardens in the sky and technology at your fingertips, Singapore is a vision of the future grounded in rich heritage.`
  },
  {
    name: "Dubai",
    image: "images/dubai.jpg",
    message: `Feel the thrill of the desert in Dubai, where skyscrapers rise from golden sands. Visit the Burj Khalifa, the world’s tallest building, or shop till you drop in dazzling mega malls.

Dubai invites you to experience luxury, adventure, and Arabian charm all in one unforgettable journey.`
  },
  {
    name: "Bali",
    image: "images/bali.jpg",
    message: `Unwind in the spiritual heart of Indonesia—Bali. With lush rice fields, volcanoes, and temples that echo ancient tales, this island is a refuge for soul seekers and adventurers alike.

Surf the waves, explore the rainforests, or find peace in a jungle-side yoga retreat.`
  },
  {
    name: "Switzerland",
    image: "images/switzerland.jpg",
    message: `Step into a fairy tale in Switzerland with its snowy Alps, pristine lakes, and picturesque villages. Whether you're skiing or riding scenic trains, every moment feels like a postcard.

Taste the finest chocolates and cheeses while soaking in the tranquility of the alpine countryside.`
  },
  {
    name: "Rome, Italy",
    image: "images/rome.jpg",
    message: `Walk through the ancient streets of Rome where history echoes through the Colosseum and Vatican City. Marvel at the Sistine Chapel and toss a coin into the Trevi Fountain.

From pasta perfection to Roman ruins, every step here is a step through time.`
  },
  {
    name: "Tokyo, Japan",
    image: "images/tokyo.jpg",
    message: `Enter the vibrant pulse of Tokyo—a city where tradition meets neon lights. Visit ancient temples, robot cafés, and cherry blossom parks all in a single day.

Whether you're a foodie, tech enthusiast, or culture lover, Tokyo leaves an unforgettable mark.`
  },
  {
    name: "Kyoto, Japan",
    image: "images/kyoto.jpg",
    message: `Travel back in time to Kyoto, Japan’s cultural jewel. Walk under red torii gates at Fushimi Inari Shrine and sip matcha in serene tea houses.

Spring brings cherry blossoms, autumn fiery leaves—every season paints Kyoto in breathtaking beauty.`
  },
  {
    name: "Reykjavik, Iceland",
    image: "images/reykjavik.jpg",
    message: `Explore Reykjavik, gateway to Iceland's natural wonders. From geysers and waterfalls to the Northern Lights, it's a land of fire and ice.

Unwind in the Blue Lagoon and uncover the mystical charm of Iceland’s landscapes.`
  },
  {
    name: "Marrakech, Morocco",
    image: "images/marrakech.jpg",
    message: `Lose yourself in the colors of Marrakech—home to bustling souks, intricate architecture, and the scent of exotic spices.

Every alley hides a story, every market a mystery—this is where ancient charm meets vibrant life.`
  },
  {
    name: "Queenstown, New Zealand",
    image: "images/queenstown.jpg",
    message: `Find your adrenaline rush in Queenstown, the adventure capital of the world. From skydiving to serene lake cruises, it's a haven for thrill-seekers and nature lovers.

Breathtaking mountains, friendly locals, and starry skies await in this southern gem.`
  }
];


function descshowDetails(title, image, description) {
  const destination = destinations_content?.find(dest => dest?.name === title);
  const desc=destination?.message+description;
  if (!destination) {
    console.error("Destination not found");
    return;
  }
  document.getElementById('destinationModalLabel').textContent = title;
  document.getElementById('destinationImg').src = image;
  document.getElementById('destinationImg').alt = title;
  document.getElementById('destinationDesc').textContent = desc;
  var modal = new bootstrap.Modal(document.getElementById('destinationModal'));
  modal.show();
}


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('destinationSearch');
  let debounceTimeout = null;

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      const query = searchInput.value.trim().toLowerCase();
      
      const packages = document.querySelectorAll('.container .row.g-4 > .col-md-4');

      packages.forEach(pkg => {
        const title = pkg.querySelector('.card-title').textContent.toLowerCase();
        const alt = pkg.querySelector('img').alt.toLowerCase();

        const match = title.includes(query) || alt.includes(query);
        pkg.style.display = match || query === '' ? '' : 'none';
      });
    }, 1000); 
  });
});


