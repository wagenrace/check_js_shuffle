const fs = require('fs');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let data = []
let new_list = []
for (let i = 0; i < 100000; i++) {
    new_list = [...Array(100).keys()]
    shuffleArray(new_list)
    data.push(new_list)
}

const jsonData = JSON.stringify(data);
fs.writeFile("shuffle_3.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});