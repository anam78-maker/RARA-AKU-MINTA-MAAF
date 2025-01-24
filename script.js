// script.js
let currentPage = 1;

function nextPage(page) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    document.getElementById(`page${currentPage}`).classList.add("outgoing");
    setTimeout(() => {
        document.getElementById(`page${currentPage}`).classList.remove("outgoing");
        document.getElementById(`page${currentPage}`).classList.add("hidden");
        document.getElementById(`page${page}`).classList.remove("hidden");
        document.getElementById(`page${page}`).classList.add("active");
        currentPage = page;
    }, 500);  // Durasi transisi lebih cepat, jadi disesuaikan menjadi 500ms
}

function restart() {
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove("active");
        page.classList.add("hidden");
    });
    document.getElementById('page1').classList.remove("hidden");
    document.getElementById('page1').classList.add("active");
}
