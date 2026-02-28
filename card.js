let form = document.querySelector("form")
let main = document.getElementById("main")
// let inpu = document.querySelectorAll("input"[])
let inpu = document.querySelectorAll("input[type='text']")



form.addEventListener("submit", function (dets) {
    dets.preventDefault();




    let card = document.createElement("div")
    card.classList.add("card")

    let profile = document.createElement("div")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute("src", inpu[0].value)
    img.classList.add("img")

    let h2 = document.createElement("h2")
    h2.classList.add("h2")
    h2.textContent = inpu[1].value

    let h3 = document.createElement("h3")
    h3.classList.add("h3");
    h3.textContent = inpu[2].value

    let p = document.createElement("p")
    p.textContent = inpu[3].value;


    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(p)
    main.appendChild(card)

    form.reset();


    inpu.forEach(function (inp) {
        inp.value = "";



    })







})