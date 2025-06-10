{/* <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script> */}

  // Initialize EmailJS
  (function () {
    emailjs.init("I4Q1eyZhvVtqXe5jL"); //  public key
  })();

  const destinations = [
    {
      name: "Paris",
      message: `Explore the timeless beauty of Paris, where romance meets art at every corner. From the Eiffel Tower to the charming cafés in Montmartre, this city breathes life into your dreams.

Wander through the Louvre, cruise along the Seine, and let the magic of the City of Light captivate your soul.`,
    },
    {
      name: "Maldives",
      message: `Escape to the turquoise waters of the Maldives where serenity meets luxury. The islands offer unmatched beauty with overwater bungalows and coral reefs that sparkle beneath the sun.

It's the perfect getaway for honeymooners, divers, or anyone craving peace and paradise under the stars.`,
    },
    {
      name: "Singapore",
      message: `Discover the dynamic fusion of tradition and innovation in Singapore. Whether you're exploring the Supertree Grove or savoring local hawker food, the city is a blend of culture and modernity.

With gardens in the sky and technology at your fingertips, Singapore is a vision of the future grounded in rich heritage.`,
    },
    {
      name: "Dubai",
      message: `Feel the thrill of the desert in Dubai, where skyscrapers rise from golden sands. Visit the Burj Khalifa, the world’s tallest building, or shop till you drop in dazzling mega malls.

Dubai invites you to experience luxury, adventure, and Arabian charm all in one unforgettable journey.`,
    },
    {
      name: "Bali",
      message: `Unwind in the spiritual heart of Indonesia—Bali. With lush rice fields, volcanoes, and temples that echo ancient tales, this island is a refuge for soul seekers and adventurers alike.

Surf the waves, explore the rainforests, or find peace in a jungle-side yoga retreat.`,
    },
    {
      name: "Switzerland",
      message: `Step into a fairy tale in Switzerland with its snowy Alps, pristine lakes, and picturesque villages. Whether you're skiing or riding scenic trains, every moment feels like a postcard.

Taste the finest chocolates and cheeses while soaking in the tranquility of the alpine countryside.`,
    },
    {
      name: "Rome, Italy",
      message: `Walk through the ancient streets of Rome where history echoes through the Colosseum and Vatican City. Marvel at the Sistine Chapel and toss a coin into the Trevi Fountain.

From pasta perfection to Roman ruins, every step here is a step through time.`,
    },
    {
      name: "Tokyo, Japan",
      message: `Enter the vibrant pulse of Tokyo—a city where tradition meets neon lights. Visit ancient temples, robot cafés, and cherry blossom parks all in a single day.

Whether you're a foodie, tech enthusiast, or culture lover, Tokyo leaves an unforgettable mark.`,
    },
    {
      name: "Kyoto, Japan",
      message: `Travel back in time to Kyoto, Japan’s cultural jewel. Walk under red torii gates at Fushimi Inari Shrine and sip matcha in serene tea houses.

Spring brings cherry blossoms, autumn fiery leaves—every season paints Kyoto in breathtaking beauty.`,
    },
    {
      name: "Reykjavik, Iceland",
      message: `Explore Reykjavik, gateway to Iceland's natural wonders. From geysers and waterfalls to the Northern Lights, it's a land of fire and ice.

Unwind in the Blue Lagoon and uncover the mystical charm of Iceland’s landscapes.`,
    },
    {
      name: "Marrakech, Morocco",
      message: `Lose yourself in the colors of Marrakech—home to bustling souks, intricate architecture, and the scent of exotic spices.

Every alley hides a story, every market a mystery—this is where ancient charm meets vibrant life.`,
    },
    {
      name: "Queenstown, New Zealand",
      message: `Find your adrenaline rush in Queenstown, the adventure capital of the world. From skydiving to serene lake cruises, it's a haven for thrill-seekers and nature lovers.

Breathtaking mountains, friendly locals, and starry skies await in this southern gem.`,
    },
  ];

  function sendNewsletterSubscription(e) {
    e.preventDefault();
  
    const userEmail = document.getElementById("newsletterEmail").value.trim();
  
    // ✅ Check if email is empty
    if (!userEmail) {
      alert("Please enter your Gmail address.");
      return;
    }
  
    // ✅ Check for valid Gmail format
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(userEmail)) {
      alert("Please enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }
  
    const selected = destinations[Math.floor(Math.random() * destinations.length)];
  
    const templateParams = {
      user_email: userEmail,
      user_name: "Subscriber",
      destination: selected.name,
      message: selected.message,
      year: new Date().getFullYear()
    };
  
    emailjs.send("service_pzydcta", "template_1e9linm", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        showSuccessModal();
      }, function (error) {
        console.error("FAILED...", error);
        alert("Something went wrong. Please check your email and try again.");
      });
  }
  

  function showSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) {
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    } else {
      alert("Subscribed successfully! 🎉");
    }
  }
