// Mock data for testing
const mockPictures = [
    { id: 1, url: 'https://via.placeholder.com/200x200?text=Image+1', name: 'Picture 1' },
    { id: 2, url: 'https://via.placeholder.com/200x200?text=Image+2', name: 'Picture 2' },
];

// Simulate fetching two random pictures
const fetchPictures = async () => {
    // Replace this with an actual API call, e.g., `/api/pictures/random`
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockPictures);
        }, 500); // Simulate network delay
    });
};

// Handle voting
const vote = async (pictureId) => {
    console.log(`Voted for picture ID: ${pictureId}`);
    // You can add API calls here to send the vote to the backend
    loadPictures(); // Reload new pictures after voting
};

// Load pictures into the DOM
const loadPictures = async () => {
    const pictures = await fetchPictures();
    const container = document.querySelector('.image-container');

    // Clear existing content
    container.innerHTML = '';

    // Dynamically create picture cards
    pictures.forEach((picture) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.onclick = () => vote(picture.id);

        card.innerHTML = `
            <img src="${picture.url}" alt="${picture.name}" />
            <span>${picture.name}</span>
        `;
        container.appendChild(card);
    });
};

// Initialize the page
document.addEventListener('DOMContentLoaded', loadPictures);
