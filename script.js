let men = document.querySelector(".menu");
let crt = document.querySelector("#cart");
let crs = document.querySelector("#cross");
crt.addEventListener("click", () => {
  men.classList.add("active");
});
crs.addEventListener("click", () => {
  men.classList.remove("active");
});
let arr = [
  {
    name: "Ladies Finger",
    price: 16.2,
  },
  {
    name: "Salad Cucumber",
    price: 30.0,
  },
  {
    name: "Button Mushroom",
    price: 85.0,
  },
  {
    name: "Pineapple-Semi ripe",
    price: 95.0,
  },
  {
    name: "Carrot Stick Cut",
    price: 49.0,
  },
  {
    name: "Green Apple",
    price: 99.2,
  },
  {
    name: "Sambar Cut Mini",
    price: 59.0,
  },
  {
    name: "Avial Cut Family Pack",
    price: 89.0,
  },
  {
    name: "Curry Leaves",
    price: 7.0,
  },
  {
    name: "Mint Leaves",
    price: 17.0,
  },
  {
    name: "Coriander Leaves",
    price: 16.2,
  },
  {
    name: "Green Chilli",
    price: 10.0,
  },
  {
    name: "Ginger",
    price: 38.0,
  },
  {
    name: "Garlic",
    price: 86.2,
  },
  {
    name: "Cherry Tomato",
    price: 180.0,
  },
  {
    name: "Lemon",
    price: 26.0,
  },
  {
    name: "Baby Potato",
    price: 29.0,
  },
  {
    name: "Small Onion",
    price: 42.5,
  },
  {
    name: "Bitter Gourd",
    price: 33.2,
  },
  {
    name: "Broccoli",
    price: 140.0,
  },
  {
    name: "Brinjal",
    price: 20.0,
  },
  {
    name: "Bottle Gourd",
    price: 16.2,
  },
];

let pd = document.querySelector(".prod");
pd.addEventListener("click", (e) => {
  e.preventDefault();

  let pos = e.target;
  if (pos.innerText === "ADD TO CART") {
    let prod_id = parseInt(pos.parentElement.dataset.custom);
    let data = prod_id;
    console.log(prod_id);
    addToBag(data);
  }
});
let bag = [];
const addToBag = (data) => {
  let found = bag.find((items) => items.product_id === arr[data].name);
  console.log(found);
  if (found) {
    found.quantity += 1;
  } else {
    console.log("yoooo");
    bag.push({
      product_id: arr[data].name,
      quantity: 1,
      price: arr[data].price,
    });
  }
  addToPage();
};
let addToPage = () => {
  let parent = document.querySelector(".list_prod");
  parent.innerHTML = "";
  let st = document.querySelector(".sub_total");
  let total = 0;

  bag.forEach((item) => {
    let ele = document.createElement("div");
    ele.classList.add(
      "w-full",
      "p-4",
      "bg-gray-100",
      "rounded-md",
      "mb-2",
      "shadow-sm",
      "flex",
      "justify-between",
      "items-center"
    );

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("text-sm", "font-semibold");
    nameDiv.textContent = item.product_id;

    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("text-sm", "text-gray-700");
    quantityDiv.textContent = `Qty: ${item.quantity}`;

    let priceDiv = document.createElement("div");
    priceDiv.classList.add("text-sm", "text-green-600", "font-bold");
    priceDiv.textContent = `₹${item.price.toFixed(2)}`;
    total += item.quantity * item.price;
    st.innerText = `₹${total}`;
    let del = document.createElement("div");
    del.classList.add(
      "relative",
      "w-5",
      "h-5",
      "bg-transparent",
      "before:content-['']",
      "before:absolute",
      "before:w-full",
      "before:h-[1.5px]",
      "before:bg-gray-500",
      "before:top-1/2",
      "before:left-0",
      "before:rotate-45",
      "before:origin-center",
      "after:content-['']",
      "after:absolute",
      "after:w-full",
      "after:h-[1.5px]",
      "after:bg-gray-500",
      "after:top-1/2",
      "after:left-0",
      "after:-rotate-45",
      "after:origin-center"
    );
    del.addEventListener("click", () => {
      ele.remove();
      bag.pop(item);
      total -= item.quantity * item.price;
      st.innerText = total.toFixed(2);
    });
    ele.appendChild(del);
    ele.appendChild(nameDiv);
    ele.appendChild(quantityDiv);
    ele.appendChild(priceDiv);

    parent.appendChild(ele);
  });
};
