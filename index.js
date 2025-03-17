const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.getElementById('ramen-menu');
    const detailImage = document.getElementById('detail-image');
    const ratingDisplay = document.getElementById('rating');
    const commentDisplay = document.getElementById('comments-display');
    const detailName = document.getElementById('detail-name');
    const detailRestaurant = document.getElementById('detail-resturant');
    const newRamenForm = document.getElementById('add-ramen');
    const deleteButton = document.getElementById('delete-button');

    const ramenData = {
        'gyukotsu': {rating: '9/10', comment: 'Rich beef broth, very satisfying'},
        'kojiro': {rating: '8/10', comment: 'Spicy and flavorful,'},
        'naruto': {rating: '10/10', comment: 'My absolute favorite!'},
        'nirvana': {rating: '7/10', comment: 'unique taste, worth trying'},
        'shoyu': {rating: '8.5/10', comment: 'not my favorite, but still good'}
    };

    ramenMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const ramenName = e.target.alt.split(' ')[0];
            const imageSrc = e.target.src;

            detailImage.src = imageSrc;
            detailName.textContent = e.target.alt;
            detailRestaurant.textContent = ramenName;

            if (ramenData[ramenName]) {
                ratingDisplay.textContent = ramenData[ramenName].rating;
                commentDisplay.textContent = ramenData[ramenName].comment;
            }
        }
    });

    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.toLowerCase();
        const restaurant = document.getElementById('resturant').value;
        const rating = document.getElementById('new-rating').value + '/10';
        const comment = document.getElementById('new-comments').value;
        const imageUrl = document.getElementById('image-url').value;

        ramenData[name] = {rating, comment};

        const newRamenImg = document.createElement('img');
        newRamenImg.src = imageUrl;
        newRamenImg.alt = `${name} Ramen`;
        ramenMenu.appendChild(newRamenImg);

        newRamenForm.reset();

        alert(`Added ${name} Ramen successfully!`);
    });

    deleteButton.addEventListener('click', () => {
        const ramenName = detailName.textContent.split(' ')[0].toLowerCase();
        if (ramenData[ramenName]) {
            delete ramenData[ramenName];
            const images = ramenMenu.getElementsByTagName('img');
            for (let img of images) {
                if (img.alt.toLowerCase().includes(ramenName)) {
                    ramenMenu.removeChild(img);
                    break;
                }
            }
            detailImage.src = '';
            detailName.textContent = '';
            detailRestaurant.textContent = '';
            ratingDisplay.textContent = '';
            commentDisplay.textContent = '';
            alert(`Deleted ${ramenName} Ramen successfully!`);
        }
    });
});
