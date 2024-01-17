function clicker() {
    let percentage = Math.random() * 100;

    console.log(percentage);

    document.querySelector(".box").classList.remove("true");
    document.querySelector(".box").classList.remove("false");

    if (percentage > 50) {
      document.querySelector(".box").innerHTML = "<h1>Tell Truth </h1>";
      document.querySelector(".box").classList.add("true");
    } else {
      document.querySelector(".box").innerHTML = "<h1>Lie </h1>";
      document.querySelector(".box").classList.add("false");
    }
  }