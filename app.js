const navList = document.querySelector(".navList")
const navOpenButton = document.querySelector(".mobileMenuButton")
const navIcon = document.querySelector(".mobileMenuIcon")
const navCloseButton = document.querySelector(".navCloseIcon")

navOpenButton.addEventListener("click", ()=>{
    if (navList.ariaExpanded === "false"){
        navList.classList.remove("closed")
        navList.classList.add("opened")
        navList.setAttribute("aria-expanded", "true")
    }
})

navCloseButton.addEventListener("click", ()=>{
    if (navList.ariaExpanded ==="true"){
        navList.classList.remove("opened")
        navList.classList.add("closed")
        navList.setAttribute("aria-expanded", "false")
    }
})


const basket = document.querySelector(".basket")
const cartButton = document.querySelector(".cartButton")

cartButton.addEventListener("click", ()=>{
    if(basket.ariaExpanded === "false"){
        basket.classList.add("openedBasket")
        basket.classList.remove("closedBasket")
        basket.setAttribute("aria-expanded", "true")
    } else if(basket.ariaExpanded === "true"){
        basket.classList.remove("openedBasket")
        basket.classList.add("closedBasket")
        basket.setAttribute("aria-expanded", "false")

    }
})



let quantity = 0
const minusButton = document.querySelector(".minusButton")
const plusButton = document.querySelector(".plusButton")
const quantityNumberSite = document.querySelector(".quantityNumberSite")
plusButton.addEventListener("click",()=>{
    quantity = quantity + 1
    
    quantityNumberSite.innerHTML = quantity;
})



minusButton.addEventListener('click', ()=>{
    if(quantity > 0){
        quantity = quantity - 1
        quantityNumberSite.innerHTML = quantity;
    }
})


const minorPhotoFirst = document.querySelector(".minorPhotoImageFirst")
const minorPhotoSecond = document.querySelector(".minorPhotoImageSecond")
const minorPhotoThird = document.querySelector(".minorPhotoImageThird")
const minorPhotoFourth = document.querySelector(".minorPhotoImageFourth")
const modalClose = document.querySelector(".modalCloseIcon")
const modal = document.querySelector(".modal")

minorPhotoFirst.addEventListener("click", ()=>{
    
    if(modal.ariaHidden === "true"){
        modal.classList.remove("modalClosed")
        modal.setAttribute("aria-hidden", "false")
    }
})
minorPhotoSecond.addEventListener("click", ()=>{
    
    if(modal.ariaHidden === "true"){
        modal.classList.remove("modalClosed")
        modal.setAttribute("aria-hidden", "false")
    }
})
minorPhotoThird.addEventListener("click", ()=>{
    
    if(modal.ariaHidden === "true"){
        modal.classList.remove("modalClosed")
        modal.setAttribute("aria-hidden", "false")
    }
})
minorPhotoFourth.addEventListener("click", ()=>{
    
    if(modal.ariaHidden === "true"){
        modal.classList.remove("modalClosed")
        modal.setAttribute("aria-hidden", "false")
    }
})

modalClose.addEventListener("click", ()=>{
   
    if(modal.ariaHidden === "false"){
        modal.classList.add("modalClosed")
        modal.setAttribute("aria-hidden", "true")
    }
})


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const addingToCartButton = document.querySelector(".addingButton")
const bottomBasket = document.querySelector(".bottomBasket")


addingToCartButton.addEventListener("click", ()=>{
    if(quantity != 0){
    let price = quantity * "125.00"
   
    bottomBasket.innerHTML=
    `<img src="images/image-product-1-thumbnail.jpg" alt="" class="productImageBasket">
    <div class="basketText">
      <div class="productNameBasket">
        <h2>Fall Limited Edition Sneakers</h2>
      </div>
      <div class="basketCosts">
        <div class="basketPriceForOne">
          <p>$125.00</p>
        </div>
        <div class="basketCount">
          <p>x ${quantity}</p>
        </div>
        <div class="basketFinalPrice">
          <p>$${price}</p>
        </div>
      </div>
      
    </div>
    <button class="deleteButton">
      <img src="images/icon-delete.svg" alt="">
    </button>
    <button class="checkoutButton">
      <a href="#">Checkout</a>
    </button>`
}})
 

document.addEventListener("mouseover", function(e){
    let target = e.target.closest(".deleteButton"); 
   
    
    if(target){
      target.addEventListener("click", ()=>{
        bottomBasket.innerHTML = 
        `<div class="emptyState">
        <h2>Your cart is empty</h2>
        </div>`
       
      })
    }
})





/* <div class="topBasket">
    <h2>Cart</h2>
  </div>
  <div class="bottomBasket">
    <img src="images/image-product-1-thumbnail.jpg" alt="" class="productImageBasket">
    <div class="basketText">
      <div class="productNameBasket">
        <h2>Fall Limited Edition Sneakers</h2>
      </div>
      <div class="basketCosts">
        <div class="basketPriceForOne">
          <p>$125.00</p>
        </div>
        <div class="basketCount">
          <p>x ${quantity}</p>
        </div>
        <div class="basketFinalPrice">
          <p>$${price}</p>
        </div>
      </div>
      
    </div>
    <button class="deleteButton">
      <img src="images/icon-delete.svg" alt="">
    </button>
    <button class="checkoutButton">
      <a href="#">Checkout</a>
    </button>
  </div> */