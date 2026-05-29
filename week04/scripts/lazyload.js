const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;



const totalCost = fruits.reduce((accumulator, fruit) => accumulator + fruit.price, 0);
document.getElementById("total").textContent = `Total Cost: $${totalCost.toFixed(2)}`;

