// Function to display full-size image in modal
function displayImage(fileName) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = fileName;
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to embed images
function embedImages() {
    const imagesDiv = document.getElementById('images');
    
    // Array of image file names (update this array with your image file names)
    const imageFiles = [
        "image1.jpg",
        "image2.jpg",
        // Add more image file names as needed
    ];

    // Loop through image file names
    imageFiles.forEach(fileName => {
        // Create thumbnail image element
        const thumbnail = document.createElement('img');
        // Set thumbnail class for styling
        thumbnail.classList.add('thumbnail');
        // Set thumbnail source to file name
        thumbnail.src = fileName;
        // Set width and height to make thumbnails square
        thumbnail.style.width = '200px'; // Adjust size as needed
        thumbnail.style.height = '200px'; // Adjust size as needed
        // Attach click event listener to display full-size image
        thumbnail.addEventListener('click', () => displayImage(fileName));
        // Append thumbnail to images container
        imagesDiv.appendChild(thumbnail);
    });
}

// Call function to embed images when the page loads
window.onload = embedImages;
