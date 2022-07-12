
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function changeBackgroundColor() {
    const rndColor = `rgb(${random(255)}, ${random(255)}, ${random(255)} )`;
    document.body.style.backgroundColor = rndColor;
}

btn.addEventListener("click", changeBackgroundColor);


//Fetch the api with a promise response
fetch('https://fakestoreapi.com/products')
.then((response) => {
    // console.log(data); 
    return response.json(); //Convert to object
})
.then((data) => {
    // console.log(data);
    let myData = "";
    data.map((values) => {
        // console.log(values)
        myData += `<tr>
                    <td>${values.title}</td>
                    <td>${values.description}</td>
                    <td>${values.price}</td>
                    <td><img src="${values.image}" /></td>
                </tr>`;
    });
    document.getElementById('table-body').innerHTML = myData;
})
.catch((error) => {
    console.log(error);
})



