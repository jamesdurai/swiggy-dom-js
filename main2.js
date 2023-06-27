let foodItems = [
    {
      id: 1,
      name: "Chicken Lollipop",
      amount: 320,
      imageUrl: "https://static.toiimg.com/thumb/53222175.cms?width=1200&height=900",
    },
    {
      id: 2,
      name: "Mutton Biryani",
      amount: 210,
      imageUrl: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__700_0_0_0_auto.jpg",
    },
    {
      id: 3,
      name: "Idli (2pcs)",
      amount: 70,
      imageUrl: "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Idli-with-sambar-and-chutney.jpg",
    },
    {
      id: 4,
      name: "Pepsi 500 Ml",
      amount: 66.66,
      imageUrl: "https://m.media-amazon.com/images/I/51-r9pOh08L.jpg",
    },
    {
      id: 5,
      name: "Water 1l",
      amount: 25,
      imageUrl: "https://www.bigbasket.com/media/uploads/p/l/103235_2-aquafina-packaged-drinking-water.jpg",
    },
  ];
  
  let cont = document.querySelector(".container");
  
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  cont.appendChild(rowDiv);
  
  foodItems.forEach(function (e) {
    let colDiv = document.createElement("div");
    colDiv.classList.add("col");
    rowDiv.appendChild(colDiv);
  
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("col-card");
    colDiv.appendChild(cardDiv);
  
    let lDiv = document.createElement("div");
    cardDiv.appendChild(lDiv);
  
    let head = document.createElement("h2");
    head.innerHTML = e.name;
    lDiv.appendChild(head);
  
    let amountTag = document.createElement("p");
    amountTag.innerHTML = "Rs." + e.amount;
    lDiv.appendChild(amountTag);
  
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("image-container");
    cardDiv.appendChild(imgDiv);
  
    let img = document.createElement("img");
    img.src = e.imageUrl;
    imgDiv.appendChild(img);
  
    let rDiv = document.createElement("div");
    cardDiv.appendChild(rDiv);
  
    // add to cart section
  
    let cartDiv = document.createElement("p");
    cartDiv.classList.add("qnty-sec");
    rDiv.appendChild(cartDiv);
  
    let decreDiv = document.createElement("span");
    decreDiv.innerHTML = "-";
    decreDiv.setAttribute("onclick", "sub(this)");
    cartDiv.appendChild(decreDiv);
  
    let zeroDiv = document.createElement("span");
    zeroDiv.classList.add("leastVal");
    zeroDiv.innerHTML = "0";
    cartDiv.appendChild(zeroDiv);
  
    let increDiv = document.createElement("span");
    increDiv.innerHTML = "+";
    increDiv.setAttribute("onclick", "add(this)");
    cartDiv.appendChild(increDiv);
  });
  
  // add function
  function add(e) {
    e.parentElement.childNodes.forEach(function (cv) {
      if (cv.classList.contains("leastVal")) {
        var a = parseInt(cv.innerHTML);
        cv.innerHTML = ++a;
      }
    });
  }
  
  // sub function
  function sub(e) {
    e.parentElement.childNodes.forEach(function (cv) {
      if (cv.classList.contains("leastVal")) {
        var a = parseInt(cv.innerHTML);
        if (a > 0) {
          cv.innerHTML = --a;
        }
      }
    });
  }
  
  function homeClick() {
    window.location.href = "./index.html";
  }
  