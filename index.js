const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupcontainerEl = document.querySelector(".popup-container");
const closeEl = document.querySelector(".fa-times");


btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active");
});
closeEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active");
}) 