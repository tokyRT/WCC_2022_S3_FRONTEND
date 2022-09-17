const hotels = [
    {
        id: 1,
        price: '$120',
        name: 'Archway Inn',
        image: '../assets/images/hotel1.jpg'
    },
    {
        id: 2,
        price: '$125',
        name: "The Connor Hotel",
        image: '../assets/images/hotel2.jpg'
    },
    {
        id: 3,
        price: '$130',
        name: 'Phoenician',
        image: '../assets/images/hotel3.jpg'
    },
    {
        id: 4,
        price: '$160',
        name: 'Grand Private',
        image: '../assets/images/hotel4.jpg'
    },
]


const cardMatchesContainer = document.querySelector('.card-matches-container');


const showInHtmlMatches = hotels.map((data) => {
    return `
            <div class='card'>
                <div class='flex'>
                    <img src=${data.image} />
                    <div>
                        <h3>${data.name}</h3>
                        <div class='flex'>
                            <div class='flex rating'>
                                <iconify-icon icon="clarity:star-solid" style="color: #ffce31; margin-right: 5px" width="15" height="14"></iconify-icon>
                                <p>4.5/5</p>
                            </div>
                            <div class='flex location'>
                                <iconify-icon icon="el:map-marker" style="color: black;" width="14" height="14"></iconify-icon>
                                <p>Moab, UT</p>
                            </div>
                        </div> 
                        <p class='price'>
                            ${data.price}<span>/right</span>
                        </p>
                    </div>
                </div>
                <a href="" class='bg-orange'>
                    <iconify-icon icon="bi:arrow-right" style="color: #F49338" width="20" height="20"></iconify-icon>
                </a>
            </div>
        `
}).join('')

cardMatchesContainer.innerHTML = showInHtmlMatches