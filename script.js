function clicker() {
    let percentage = Math.random() * 100;

    console.log(percentage);

    const box = document.querySelector(".box");
    box.classList.remove("true");
    box.classList.remove("false");

    if (percentage > 50) {
        box.innerHTML = "<h1>Tell Truth </h1>";
        box.classList.add("true");
    } else {
        box.innerHTML = "<h1>Lie </h1>";
        box.classList.add("false");
    }

    // Delayed removal of classes after 5 seconds
    setTimeout(() => {
        box.classList.remove("true");
        box.classList.remove("false");
        box.innerHTML = "<h1>Press</h1>";
    }, 5000);
}
