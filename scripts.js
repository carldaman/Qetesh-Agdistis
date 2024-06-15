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
