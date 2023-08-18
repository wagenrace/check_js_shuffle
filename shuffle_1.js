const fs = require('fs');

let data = []
for (let i = 0; i < 100000; i++) {
    data.push([...Array(100).keys()].sort(() => Math.random() - 0.5))
}

const jsonData = JSON.stringify(data);
fs.writeFile("shuffle_1.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});