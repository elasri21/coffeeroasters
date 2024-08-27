const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav ul");

openMenu.addEventListener("click", function() {
    this.style.display = "none";
    closeMenu.style.display = "flex";
    nav.style.display = "flex";
});

closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    openMenu.style.display = "flex";
    nav.style.display = "none";
});


// hide categories
const categories = document.querySelectorAll(".category");
categories.forEach(category => {
    const boxes = category.querySelectorAll(".boxes");
    const icons = category.querySelectorAll("button i");
    boxes.forEach(box => {
        box.classList.add("hide");
    });
    icons.forEach(i => {
        i.style.transform = "rotate(180deg)";
    });
});
const categoryBtns = document.querySelectorAll(".category button");
const allBoxes = document.querySelectorAll(".category .boxes .box");
categoryBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const boxes = document.querySelectorAll(".category .boxes");
        for(let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add("hide");
        }
        for(let i = 0; i < categoryBtns.length; i++) {
            categoryBtns[i].classList.remove("show");
        }
        this.classList.add("show");
        this.nextElementSibling.classList.remove("hide");
    });
});
allBoxes.forEach(box => {
    box.addEventListener("click", function() {
        const parent = this.parentElement;
        const siblings = Array.from(parent.children);
        siblings.forEach(sibling => {
            sibling.classList.remove("picked");
        })
        this.classList.add("picked");
    });
});

// Update plan
const preferences = document.querySelectorAll(".main-plan .preferences .box");
preferences.forEach(box => {
    box.addEventListener("click", function() {
        document.querySelector(".summary .drink-summary").textContent = this.dataset.preferences;
    });
});
const types = document.querySelectorAll(".main-plan .type .box");
types.forEach(box => {
    box.addEventListener("click", function() {
        document.querySelector(".summary .type-summary").textContent = this.dataset.type;
    });
});
const quantities = document.querySelectorAll(".main-plan .quantity .box");
quantities.forEach(box => {
    box.addEventListener("click", function() {
        document.querySelector(".summary .quantity-summary").textContent = this.dataset.quantity;
    });
});
const grinds = document.querySelectorAll(".main-plan .grind-option .box");
grinds.forEach(box => {
    box.addEventListener("click", function() {
        document.querySelector(".summary .grind-summary").textContent = this.dataset.grind;
    });
});
const deliveries = document.querySelectorAll(".main-plan .deliveries .box");
deliveries.forEach(box => {
    box.addEventListener("click", function() {
        document.querySelector(".summary .deliver-summary").textContent = this.dataset.delivery;
    });
});
