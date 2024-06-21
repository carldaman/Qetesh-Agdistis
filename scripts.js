let currentAlbum = [];
let currentSet = 0;

const albums = {
    'album1': [
        'https://i.ibb.co/example1-1.jpg',
        'https://i.ibb.co/example1-2.jpg',
        'https://i.ibb.co/example1-3.jpg',
        'https://i.ibb.co/example1-4.jpg',
        'https://i.ibb.co/example1-5.jpg',
        'https://i.ibb.co/example1-6.jpg',
        'https://i.ibb.co/example1-7.jpg',
        'https://i.ibb.co/example1-8.jpg',
        'https://i.ibb.co/example1-9.jpg',
        'https://i.ibb.co/example1-10.jpg'
    ],
    // Add more albums here
};

function openAlbum(albumName) {
    currentAlbum = albums[albumName];
    currentSet = 0;
    showSet(currentSet);
    document.getElementById('album-title').textContent = albumName;
    document.getElementById('album-modal').style.display = 'block';
}

function closeAlbum() {
    document.getElementById('album-modal').style.display = 'none';
}

function changeSet(n) {
    currentSet += n;
    if (currentSet < 0) {
        currentSet = 0;
    } else if (currentSet * 5 >= currentAlbum.length) {
        currentSet--;
    }
    showSet(currentSet);
}

function showSet(set) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '';
    const start = set * 5;
    const end = Math.min(start + 5, currentAlbum.length);
    for (let i = start; i < end; i++) {
        const img = document.createElement('img');
        img.src = currentAlbum[i];
        modalBody.appendChild(img);
    }
    document.getElementById('modal-counter').textContent = `Showing ${start + 1} to ${end} of ${currentAlbum.length}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSet(-1);
    } else if (event.key === 'ArrowRight') {
        changeSet(1);
    } else if (event.key === 'Escape') {
        closeAlbum();
    }
});

// Function to add a new news item dynamically
function addNewsItem() {
    const newsContainer = document.getElementById('news-container');

    // Create a new news item div
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';

    // Example content (you can modify this as per your needs)
    newsItem.innerHTML = `
        <h3>New Feature Released!</h3>
        <p>We are excited to announce the release of our new feature. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac efficitur magna. Nulla facilisi.</p>
        <p><a href="#">Read more</a></p>
    `;

    // Append the new news item to the news container
    newsContainer.appendChild(newsItem);
}

// Function to add a new image dynamically
function addImage() {
    const imagesContainer = document.getElementById('images-container');

    // Create a new image item div
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';

    // Example content (you can modify this as per your needs)
    imageItem.innerHTML = `
        <img src="placeholder.png" alt="New Image">
        <p>Image description goes here. Edit this description as needed.</p>
    `;

    // Append the new image item to the images container
    imagesContainer.appendChild(imageItem);
}
