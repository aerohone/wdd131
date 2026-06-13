
const product = [
    {
        pn: "1",
        color: ["pink", "purple", "white"],
        shape: "square",
        price: 20,
        image: "images/pn1.webp"
    },
    {
        pn: "2",
        color: ["blue", "white", "green"],
        shape: "square",
        price: 20,
        image: "images/pn2.webp"
    },
    {
        pn: "3",
        color: ["purple", "green", "red"],
        shape: "square",
        price: 20,
        image: "images/pn3.webp"
    },
    {
        pn: "4",
        color: ["blue", "orange", "pink"],
        shape: "square",
        price: 20,
        image: "images/pn4.webp"
    },
    {
        pn: "5",
        color: ["red", "orange", "yellow"],
        shape: "square",
        price: 20,
        image: "images/pn5.webp"
    },
    {
        pn: "6",
        color: ["pink"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn6.webp"
    },
    {
        pn: "7",
        color: ["purple"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn7.webp"
    },
    {
        pn: "8",
        color: ["yellow"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn8.webp"
    },
    {
        pn: "9",
        color: ["orange"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn9.webp"
    },
    {
        pn: "10",
        color: ["green"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn10.webp"
    },
    {
        pn: "11",
        color: ["turquoise"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn11.webp"
    },
    {
        pn: "12",
        color: ["peach"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn12.webp"
    },
    {
        pn: "13",
        color: ["blue"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn13.webp"
    },
    {
        pn: "14",
        color: ["white"],
        shape: "wavy donut",
        price: 20,
        image: "images/pn14.webp"
    },
    {
        pn: "15",
        color: ["purple"],
        shape: "teardrop",
        price: 20,
        image: "images/pn15.webp"
    },
    {
        pn: "16",
        color: ["green"],
        shape: "teardrop",
        price: 20,
        image: "images/pn16.webp"
    },
    {
        pn: "17",
        color: ["orange"],
        shape: "teardrop",
        price: 20,
        image: "images/pn17.webp"
    },
    {
        pn: "21",
        color: ["pink"],
        shape: "circle with bow",
        price: 20,
        image: "images/pn21.webp"
    },
    {
        pn: "22",
        color: ["purple"],
        shape: "circle with bow",
        price: 20,
        image: "images/pn22.webp"
    },
    {
        pn: "24",
        color: ["red", "white"],
        shape: "heart",
        price: 20,
        image: "images/pn24.webp"
    }
]

createProductCard(product);

const all = document.querySelector("#all");
const red = document.querySelector("#red");
const white = document.querySelector("#white");
const purple = document.querySelector("#purple");
const pink = document.querySelector("#pink");
const orange = document.querySelector("#orange");
const green = document.querySelector("#green");
const peach = document.querySelector("#peach");
const turquoise = document.querySelector("#turquoise");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");

all.addEventListener("click", () => {
  let all = product;
  createProductCard(all);
});

red.addEventListener("click", () => {
  createProductCard(product.filter(product => product.color.some(colorItems => colorItems[0] ==='red')))
});



// white.addEventListener("click", () => {
//   let white = product;
//   createProductCard(white);
// });

// purple.addEventListener("click", () => {
//   let purple = product;
//   createProductCard(purple);
// });

// pink.addEventListener("click", () => {
//   let pink = product;
//   createProductCard(pink);
// });

// orange.addEventListener("click", () => {
//   let orange = product;
//   createProductCard(orange);
// });

// green.addEventListener("click", () => {
//   let green = product;
//   createProductCard(green);
// });

// peach.addEventListener("click", () => {
//   let peach = product;
//   createProductCard(peach);
// });

// turquoise.addEventListener("click", () => {
//   let turquoise = product;
//   createProductCard(turquoise);
// });

// blue.addEventListener("click", () => {
//   let blue = product;
//   createProductCard(blue);
// });

// yellow.addEventListener("click", () => {
//   let yellow = product;
//   createProductCard(yellow);
// });

function createProductCard(productList) {
    document.querySelector(".productCards").innerHTML = "";
    productList.forEach(product => {
    const card = document.createElement("figure");
    const pn = document.createElement("h2");
    const price = document.createElement("p");
    const img = document.createElement("img");

    pn.textContent = product.pn;
    price.textContent = `$${product.price}`;
    img.src = product.image;
    img.alt = `Picture of product number ${product.pn} which is a .`;
    img.loading = "lazy";

    card.appendChild(pn);
    card.appendChild(price);
    card.appendChild(img);

    document.querySelector(".productCards").appendChild(card);
  });
}

    {
        pn: "24",
        color: ["red", "white"],
        shape: "heart",
        price: 20,
        image: "images/pn24.webp"
    }