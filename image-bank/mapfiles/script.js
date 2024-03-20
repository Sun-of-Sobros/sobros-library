// Function to display full-size image in a new tab
function displayImage(fileName) {
    // Open the full-size image in a new tab
    window.open(fileName, '_blank');
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
        "A Fork In The Road (DnDavid).jpg",
        "Abandoned Airship Port [20x60] (DnDavid).jpg",
        "Abandoned Airship Port [20x60].jpg",
        "Abandoned Theme Park (DnDavid).jpg",
        "Above The Ice Storm (DnDavid).jpg",
        "Alchemists Asylum (DnDavid).jpg",
        "Altar To The Faceless Men (DnDavid).jpg",
        "Ambigram (DnDavid).jpg",
        "Amygdala (DnDavid).jpg",
        "Anubis Tomb (DnDavid).jpg",
        "Aqueduct (DnDavid).jpg",
        "Aqueduct Entrance (DnDavid).jpg",
        "Arch Tree (DnDavid).jpg",
        "Audience With The Kneeling Knight [40x40] (DnDavid).jpg",
        "Audience With The Kneeling Knight [40x40].jpg",
        "Autumn Tree [40x40].jpg",
        "Bloodborne Lecture Theatre First Floor HD[45x60] (DnDavid).jpg",
        "Bloodborne Lecture Theatre First Floor HD[45x60].jpg",
        "Bloodborne Lecture Theatre Second Floor HD[45x60] (DnDavid).jpg",
        "Bloodborne Lecture Theatre Second Floor HD[45x60].jpg",
        "Byrgenwerth (DnDavid).jpg",
        "Cathedral of Avacyn Level 1 [40x60] (DnDavid).jpg",
        "Cathedral of Avacyn Level 1 [40x60].jpg",
        "Cathedral of Avacyn Level 2 [40x60] (DnDavid).jpg",
        "Cathedral of Avacyn Level 2 [40x60].jpg",
        "Cathedral of Avacyn Level 3 [40x60] (DnDavid).jpg",
        "Cathedral of Avacyn Level 3 [40x60].jpg",
        "Cavern (DnDavid).jpg",
        "Church of Elleh [30x40] (DnDavid).jpg",
        "Church of Elleh [30x40].jpg",
        "Coastal Hideout [30x40] (DnDavid).jpg",
        "Coastal Hideout [30x40].jpg",
        "Cult Of The Bodak (DnDavid).jpg",
        "Escaped Test Subjects (DnDavid).jpg",
        "Eye Of The Sandstorm (DnDavid).jpg",
        "Flooded Ruin (DnDavid).jpg",
        "Flooded Ruins [40x40] (DnDavid).jpg",
        "Flooded Ruins [40x40].jpg",
        "Forever Melting Ice Block (DnDavid).jpg",
        "Forgotten (DnDavid).jpg",
        "Forgotten Entrance to Hell [30x60] (DnDavid).jpg",
        "Forgotten Entrance to Hell [30x60].jpg",
        "Forgotten Specimen [40x40] (DnDavid).jpg",
        "Forgotten Specimen [40x40].jpg",
        "ForgottenEarthTemple[30x40].jpg",
        "ForgottenFireTemple[30x40].jpg",
        "ForgottenMetalTemple[30x40].jpg",
        "ForgottenVoidTemple[30x40].jpg",
        "ForgottenWaterTemple[30x40].jpg",
        "ForgottenWindTemple[30x40].jpg",
        "ForgottenWoodTemple[30x40].jpg",
        "Fountain Plaza (DnDavid).jpg",
        "Geometric Wizard Tower (DnDavid).jpg",
        "Giants Tomb[30x34] (DnDavid).jpg",
        "Giants Tomb[30x34].jpg",
        "Grand Cathedral Laurence (DnDavid).jpg",
        "Guarded Teleportation Circle (DnDavid).jpg",
        "Heart of the City [40x40] (DnDavid).jpg",
        "Heart of the City [40x40].jpg",
        "Hemwick Village (DnDavid).jpg",
        "Hermit_s Hut [40x30] (DnDavid).jpg",
        "Hunters Dream (DnDavid).jpg",
        "Imprisoned [40x40] (DnDavid).jpg",
        "Imprisoned [40x40].jpg",
        "In The Wake of the Collosus (DnDavid).jpg",
        "Kintsugi Shrine (DnDavid).jpg",
        "Knightsbridge (DnDavid).jpg",
        "Koi Crossing (DnDavid).jpg",
        "Larkans Camp Basement [20x20] (DnDavid).jpg",
        "Larkans Camp Basement [20x20].jpg",
        "Larkans Camp Ground Floor [20x20] (DnDavid).jpg",
        "Larkans Camp Ground Floor [20x20].jpg",
        "Larkans Camp Second Floor [20x20] (DnDavid).jpg",
        "Larkans Camp Second Floor [20x20].jpg",
        "Larkans Camp Third Floor [20x20] (DnDavid).jpg",
        "Larkans Camp Third Floor [20x20].jpg",
        "Laurence the First Vicar Boss Fight HD [20x40] (DnDavid).jpg",
        "Laurence the First Vicar Boss Fight HD [20x40].jpg",
        "Lever At The End Of The World [30x30] (DnDavid).jpg",
        "Lever At The End Of The World [30x30].jpg",
        "Lightning Hammer (DnDavid).jpg",
        "Lightning Tree (DnDavid).jpg",
        "Living Failures (DnDavid).jpg",
        "Loran Beast Possessed Soul (DnDavid).jpg",
        "Loran Blood Starved Beast (DnDavid).jpg",
        "Lying In Wait (DnDavid).jpg",
        "Margit Boss Arena HD [30x40] (DnDavid).jpg",
        "Margit Boss Arena HD [30x40].jpg",
        "Mountain Path (DnDavid).jpg",
        "Nightmare Plaza HD [30x60] (DnDavid).jpg",
        "Nightmare Plaza HD [30x60].jpg",
        "Oedon Chapel (DnDavid).jpg",
        "Old Workshop (DnDavid).jpg",
        "Old Yarnham (DnDavid).jpg",
        "Orange Fields [40x40] (DnDavid).jpg",
        "Orange Fields [40x40].jpg",
        "Overgrown Cathedral [40x30] (DnDavid).jpg",
        "Overgrown Cathedral [40x30].jpg",
        "Perfectly Balanced (DnDavid).jpg",
        "Perfectly Balanced Broken (DnDavid).jpg",
        "Pirate Trial [40x40] (DnDavid).jpg",
        "Pirate Trial [40x40].jpg",
        "Pool of Knowledge [30x40].jpg",
        "Pool of the Kneeling Knight [40x40] (DnDavid).jpg",
        "Pools of Prediction [30x30] (DnDavid).jpg",
        "Pools of Prediction [30x30].jpg",
        "Pthumeru Blade Bridge (DnDavid).jpg",
        "Rennala Boss Room [30x32] (DnDavid).jpg",
        "Rennala Boss Room [30x32].jpg",
        "Respite Spot (DnDavid).jpg",
        "Ritual Room (DnDavid).jpg",
        "Ruined Auditorium [40x40] (DnDavid).jpg",
        "Ruined Auditorium [40x40].jpg",
        "Ruins Of The Hallowed Warden (DnDavid).jpg",
        "Ruins Of The Hallowed Warden [40x40] (DnDavid).jpg",
        "Ruins Of The Hallowed Warden [40x40].jpg",
        "Rykards Arena [30x40] (DnDavid).jpg",
        "Rykards Arena [30x40].jpg",
        "Stairs (DnDavid).jpg",
        "Stairs Nightmare (DnDavid).jpg",
        "Temple Of Oedon (DnDavid).jpg",
        "Temple Of The Blue Dragon (DnDavid).jpg",
        "Temple of the Thinking Turtle [30x40] (DnDavid).jpg",
        "Temple of the Thinking Turtle [30x40].jpg",
        "The Bay (DnDavid).jpg",
        "The Great Bridge (DnDavid).jpg",
        "The Last Bastion of the Empire [49x49] (DnDavid).jpg",
        "The Old Fishing Hole HD [30x40] (DnDavid).jpg",
        "The Old Fishing Hole HD [30x40].jpg",
        "The Orb of Death (DnDavid).jpg",
        "The Sorter Underground (DnDavid).jpg",
        "The Tri-Bridge [40x40].jpg",
        "Tree at the Centre of the Ocean [40x40].jpg",
        "d0pqycdmvtlc1.webp",
        "eb1qdxewwqlc1.webp"
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
