let currentAlbum = [];
let currentIndex = 0;

function openAlbum(albumName) {
    // Example data, replace with your actual image URLs
    if (albumName === 'blue-swimsuit') {
        currentAlbum = [
            { src: 'https://i.ibb.co/photo1.jpg', caption: 'Blue Swimsuit 1' },
            { src: 'https://i.ibb.co/photo2.jpg', caption: 'Blue Swimsuit 2' },
            { src: 'https://i.ibb.co/photo3.jpg', caption: 'Blue Swimsuit 3' }
            // Add more images as needed
        ];
    }

    currentIndex = 0;
    showImage(currentIndex);

    document.getElementById('album-modal').style.display = 'block';
}

function closeAlbum() {
    document.getElementById('album-modal').style.display = 'none';
}

function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= currentAlbum.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = currentAlbum.length - 1;
    }
    showImage(currentIndex);
}

function showImage(index) {
    const image = currentAlbum[index];
    document.getElementById('modal-image').src = image.src;
    document.getElementById('modal-caption').textContent = image.caption;
    document.getElementById('modal-counter').textContent = `${index + 1} / ${currentAlbum.length}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeAlbum();
    }
});
