

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("form.html")) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            document.getElementById("pname").appendChild(option);
        });
    };
});


document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("review.html")) {
        let reviewCounter = Number(localStorage.getItem("counterValue")) || 0;
        reviewCounter = reviewCounter + 1;
        localStorage.setItem("counterValue", reviewCounter);
    }
});


