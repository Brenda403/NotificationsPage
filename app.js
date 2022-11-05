let all = document.querySelectorAll("main div");

document.querySelector(".read-button").addEventListener("click", () => {
    document.querySelector(".alert").innerHTML = "0";
    for (a of all) {
        a.style.backgroundColor = "white";
        a.querySelector("div card unread").style.display = "none";
    }
})

function changeBackground(){
    document.querySelectorAll(".unread").forEach(e => e.style.backgroundColor = 'white');
}

