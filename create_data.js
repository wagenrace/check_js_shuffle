const fs = require('fs');

let data = []
for (let i = 0; i < 100000; i++) {
    data.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5))
}

const jsonData = JSON.stringify(data);
fs.writeFile("data.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});