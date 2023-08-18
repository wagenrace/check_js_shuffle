const fs = require('fs');

function sort(list){
    let new_list = []
    for (let i =0; i < list.length; i++){
        new_list.push( {
            random_number: Math.random(),
            element: list[i]
        })
    }
    sorted_new_list = new_list.sort((a, b) => a.random_number - b.random_number)
    sorted_list = sorted_new_list.map(e => e.element);

    return sorted_list
}
let data = []
for (let i = 0; i < 100000; i++) {
    data.push(sort([...Array(100).keys()]))
}

const jsonData = JSON.stringify(data);
fs.writeFile("shuffle_2.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});