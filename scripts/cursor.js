const blob = document.getElementById("blob");
const cursor = document.getElementById("cursor");
const cursorLinkIcon = document.getElementById("cursor-link-icon");

const a = document.querySelectorAll(".link");

// Cursor move
document.body.onpointermove = event => {
    const clientX = event.clientX;
    const clientY = event.clientY;

    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 300, fill: "forwards" });

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 2000, fill: "forwards" });
}

document.body.onmousedown = event => {
    cursor.classList.add("cursor-clicked");
}

document.body.onmouseup = () => {
    cursor.classList.remove("cursor-clicked");
}

// link hover
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseover", function () {
        cursor.classList.add("cursor-enlarge");
        cursorLinkIcon.classList.add("link-hover");
    });
    a[i].addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-enlarge");
        cursorLinkIcon.classList.remove("link-hover");
    });
}