const hotels = [
  {
    id: 1,
    price: "120",
    name: "Archway Inn",
    image: "../assets/images/hotel1.jpg",
    rating: 4.5,
    distance: 0.6,
    x: 370,
    y: 385,
  },
  {
    id: 2,
    price: "125",
    name: "The Connor Hotel",
    image: "../assets/images/hotel2.jpg",
    rating: 2.5,
    distance: 3,
    x: 161,
    y: 443,
  },
  {
    id: 3,
    price: "130",
    name: "Phoenician",
    image: "../assets/images/hotel3.jpg",
    rating: 4,
    distance: 1,
    x: 340,
    y: 624,
  },
  {
    id: 4,
    price: "160",
    name: "Grand Private",
    image: "../assets/images/hotel4.jpg",    
    rating: 5,
    distance: 0.1,
    x: 121,
    y: 700,
  },
];

const cardMatchesContainer = document.querySelector(".card-matches-container");

function filteredHotel(desc=false){
    let foo = [];
    if(desc){
        for (let i = hotels.length-1; i >= 0; i--) {
            foo.push(hotels[i]);
        }
        return foo;
    }
    return hotels;
    
}

function showInHtmlMatches(desc){
    const cards = filteredHotel(desc)
    .map((data) => {
      return `
              <div class='card'>
                  <div class='flex'>
                      <img src=${data.image} />
                      <div>
                          <h3>${data.name}</h3>
                          <div class='flex'>
                              <div class='flex rating'>
                                  <iconify-icon icon="clarity:star-solid" style="color: #ffce31; margin-right: 5px" width="15" height="14"></iconify-icon>
                                  <p>${data.rating}/5</p>
                              </div>
                              <div class='flex location'>
                                  <iconify-icon icon="el:map-marker" style="color: black;" width="14" height="14"></iconify-icon>
                                  <p>Moab, UT</p>
                              </div>
                          </div> 
                          <p class='price'>
                              $${data.price}<span>/night</span>
                          </p>
                      </div>
                  </div>
                  <a href="" class='bg-orange'>
                      <iconify-icon icon="bi:arrow-right" style="color: #F49338" width="20" height="20"></iconify-icon>
                  </a>
              </div>
          `;
    })
    .join("");
  
  cardMatchesContainer.innerHTML = cards;
}

let desc=false;
showInHtmlMatches(desc);

const filterBtn = document.querySelector('.match-container .filterBtn');
const textFilter = document.querySelector('.match-container .filterBtn p')
filterBtn.addEventListener('click', function(){
    desc = !desc;
    showInHtmlMatches(desc);
    filterBtn.classList.toggle('desc');
    if(desc){
        textFilter.innerHTML = "Price highest first"
    } else{
        textFilter.innerHTML = "Price lowest first"
    }
})





const mapContainer = document.querySelector(".floating-cards");

const cards = hotels
  .map((data) => {
    return `
        <div class="floating-card" style="top: ${data.y}px; left: ${data.x}px;">
            <div class="pin">
                <div class="price">
                    ${data.price}$
                </div>
                <div class="content">
                    <div class="card-img" style="background-image: url('${data.image}');">

                    </div>
                    <div class="text">
                        <h3>${data.name}</h3>
                        <div class="flex">
                            <iconify-icon icon="clarity:star-solid" style="color: #ffce31; margin: 5px 5px 0 0;"
                                width="14" height="14"></iconify-icon>
                            <p>${data.rating}/5 - ${data.distance}km</p>
                        </div>
                    </div>
                    <a href="" class="button">
                        <p>Details</p>
                        <iconify-icon icon="bi:arrow-right" width="14"
                            height="14"></iconify-icon>
                    </a>
                </div>
                <div class="bottom-circle">
                    <span class="white-circle"></span>
                    <span class="orange-circle"></span>
                </div>
            </div>
        </div>
    `;
  })
  .join("");
  mapContainer.innerHTML = cards
