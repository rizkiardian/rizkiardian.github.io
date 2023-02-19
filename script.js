// menampilkan tombol menu

let navbar = document.querySelector("nav");

document.querySelector(".icon").onclick = () => {
  navbar.classList.toggle("active");
};

// animasi bergerak ke atas

const animateItems = document.querySelectorAll(".animate");

function handleAnimation() {
  animateItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleAnimation);
