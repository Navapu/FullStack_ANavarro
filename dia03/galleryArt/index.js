ArtGallery = [
    { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
    { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true },
    { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false },
    { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true },
    { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
    { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true },
    { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false },
    { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true },
    { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false },
    { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
];

// Use forEach and Template Strings to display the titles of the works in the console in the format:

// ArtGallery.forEach((art) => {
//     console.log(`Art ID: ${art.id}`,
//         `Artist: ${art.artist}`,
//         `Title: ${art.title}`,
//         `Year: ${art.year}`,
//         `Exhibited: ${art.isExhibited}`);
// })

// Use map to create a new array containing only the titles of the works and display it in the console.

// const ArtGalleryMap = new Map();


// Use filter to create an array of works currently on display and display them in the console.

// const ArtGalleryExhibited = ArtGallery.filter(art => art.isExhibited);
// ArtGalleryExhibited.forEach((art) => {
//     console.log(`Art ID: ${art.id}`,
//         `Artist: ${art.artist}`,
//         `Title: ${art.title}`,
//         `Year: ${art.year}`,
//         `Exhibited: ${art.isExhibited}`);
// })

// Create a search function that receives a work title as a parameter, and uses find to search for that specific work

// const FindArt = (title) => {
//     title = title.toLowerCase().trim();
//     const art = ArtGallery.find((art) => art.title.toLowerCase() == title);
//     if (art) {
//         console.log(`Art ID: ${art.id}`,
//         `Artist: ${art.artist}`,
//         `Title: ${art.title}`,
//         `Year: ${art.year}`,
//         `Exhibited: ${art.isExhibited}`);
//     } else {
//         console.log("Work not found.");
//     }
// }

// FindArt("The Scream");


// Use some to check if there are works in the gallery from a specific year (for example, 1503).

// if (ArtGallery.some((art) => art.year == 1503)) {
//     console.log("There are works from that year.");
// }else{
//     console.log("There aren't works from that year.");
// }

// Use every to check if all works are from before a certain year, for example your year of birth.

// const isBefore = (currentValue) => currentValue.year < 2003;
// if (ArtGallery.every(isBefore)) {
//     console.log("There are works are from before 2003.");
// }else{
//     console.log("There aren't works from before 2003.");
// }

// Use findIndex to find the position in the array of a specific work.

// const specificWork = work => work.title == "The Scream"
// console.log("The position in the array is: ",ArtGallery.findIndex(specificWork))

// Add a function that allows adding new works to the gallery array

// const addWork = (artist, title, year, isExhibited) => {
//     ArtGallery.push({id:ArtGallery.length + 1, artist, title, year, isExhibited})
//     ArtGallery.forEach((art) => {
//         console.log(`Art ID: ${art.id}`,
//             `Artist: ${art.artist}`,
//             `Title: ${art.title}`,
//             `Year: ${art.year}`,
//             `Exhibited: ${art.isExhibited}`);
//     })
// }

// addWork("Frida Kahlo", "Las dos Fridas", 1939, true)

