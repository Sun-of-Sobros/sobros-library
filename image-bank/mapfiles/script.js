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

// Function to extract size information from filename
function extractSize(fileName) {
    const matches = fileName.match(/\[(\d+)x(\d+)\]/);
    if (matches) {
        return `${matches[1]}x${matches[2]}`;
    }
    return null;
}

// Function to fetch image files from JSON file
async function fetchImageFiles() {
    try {
        const response = await fetch('image_files.json'); // Change the URL to match your JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch image files');
        }
        const data = await response.json();
        return data.imageFiles;
    } catch (error) {
        console.error('Error fetching image files:', error);
        return [];
    }
}

// Function to embed images
async function embedImages() {
    const imagesDiv = document.getElementById('images');

    // Fetch image files from JSON file
    const imageFiles = await fetchImageFiles();

    // Loop through image file names
    imageFiles.forEach(fileName => {
        // Create thumbnail image element
        const thumbnail = document.createElement('div');
        // Set thumbnail class for styling
        thumbnail.classList.add('tooltip');
        // Set background image for thumbnail
        thumbnail.style.backgroundImage = `url(${fileName})`;
        // Attach click event listener to display full-size image
        thumbnail.addEventListener('click', () => displayImage(fileName));

        // Extract size information from filename
        const size = extractSize(fileName);
        // Construct tooltip text with code snippet
        const tooltiptext = document.createElement('span');
        tooltiptext.classList.add('tooltiptext');
        if (size) {
            tooltiptext.textContent = `!map -bg "https://sun-of-sobros.github.io/sobros-library/image-bank/mapfiles/${fileName}" -attach DM -mapsize ${size}`;
        } else {
            tooltiptext.textContent = `!map -bg "https://sun-of-sobros.github.io/sobros-library/image-bank/mapfiles/${fileName}" -attach DM`;
        }
        
        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.classList.add('copy-btn');
        copyBtn.textContent = 'Copy';
        copyBtn.addEventListener('click', () => {
            // Copy code snippet to clipboard
            navigator.clipboard.writeText(tooltiptext.textContent);
            alert('Code copied to clipboard!');
        });

        // Append tooltip text and copy button to thumbnail
        thumbnail.appendChild(tooltiptext);
        thumbnail.appendChild(copyBtn);

        // Append thumbnail to images container
        imagesDiv.appendChild(thumbnail);
    });
}

// Call function to embed images when the page loads
window.onload = embedImages;
