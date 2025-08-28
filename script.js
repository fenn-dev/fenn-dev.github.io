document.addEventListener("DOMContentLoaded", function () {
    let delay = 300;
    let elapsed = 0;

    const contentDivs = Array.from(document.querySelectorAll(".content"));
    const contentDivHeights = contentDivs.map(div => div.scrollHeight);

    // Reverse order → start from bottom
    contentDivs.reverse().forEach((div, index) => {
        div.style.maxHeight = "0";
        div.style.overflow = "hidden";

        elapsed += delay;

        setTimeout(() => {
            div.style.maxHeight = contentDivHeights[index] + "px";
        }, elapsed);

        delay = Math.max(100, delay / 1.5);
    });

    // Reset after last animation
    setTimeout(() => {
        contentDivs.forEach(div => {
            div.style.maxHeight = "";
        });
    }, elapsed + 500);
});
