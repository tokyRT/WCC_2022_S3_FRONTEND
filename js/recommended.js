const data = [
    {
        id: 1,
        price: '$160',
        name: 'Spring Hill Suites',
        rating: '4.5',
        image: '../assets/images/recommend1.jpg'
    },
    {
        id: 2,
        price: '$160',
        name: "Arne's Royal Hawailan ",
        rating: '4.5',
        image: '../assets/images/recommend2.jpg'
    },
    {
        id: 3,
        price: '$160',
        name: 'Spring Hill Suites',
        rating: '4.5',
        image: '../assets/images/recommend3.jpg'
    },
    {
        id: 4,
        price: '$160',
        name: 'Spring Hill Suites',
        rating: '4.5',
        image: '../assets/images/recommend1.jpg'
    },
    {
        id: 5,
        price: '$160',
        name: "Arne's Royal Hawailan ",
        rating: '4.5',
        image: '../assets/images/recommend2.jpg'
    },
]


const swiperCardContainer = document.querySelector('.swiper .swiper-wrapper');


const showInHtml = data.map((data) => {
    return `
        <div class='card swiper-slide' style="background: url(${data.image})">
            <div class='content'>
            <p class='price'>
                ${data.price}<span>/night</span>
            </p>
            <p class='name'>
                ${data.name}
            </p>
            <div class='flex'>
                <div class='flex rating'>
                    <iconify-icon icon="clarity:star-solid" style="color: #ffce31; margin-right: 5px;" width="17" height="16"></iconify-icon>
                    <p>${data.rating}/5</p>
                </div>
                <div class='flex location'>
                    <iconify-icon icon="el:map-marker" style="color: white; margin-right: 5px;" width="14" height="14"></iconify-icon>
                    <p>Moab, UT</p>
                </div>
            </div>
            </div>
            
        </div>

    `
}).join('')

swiperCardContainer.innerHTML = showInHtml