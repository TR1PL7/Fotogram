let artpieces = [
    "./img/2025-05-22_10-06-42_1244.png",
    "./img/2025-07-07_18-10-03_4722.png",
    "./img/2025-07-07_18-10-14_6973.png",
    "./img/2025-07-07_19-07-05_8572.png",
    "./img/2025-07-10_03-10-30_4331.png",
    "./img/2025-07-10_03-11-18_3588.png",
    "./img/2025-07-10_03-13-39_2811.png",
    "./img/2025-07-10_03-14-27_6554.png",
    "./img/2025-07-10_03-14-54_6921.png",
    "./img/2025-07-10_03-15-48_4953.png",
    "./img/2025-07-10_03-16-01_2357.png",
    "./img/2025-07-10_03-16-20_1260.png",
    "./img/2025-07-10_03-16-26_4438.png",
    "./img/2025-07-10_03-17-33_3607.png",
    "./img/2025-07-10_03-19-06_1667.png",
    "./img/2025-07-10_03-19-53_1688.png",
    "./img/2025-07-10_03-20-21_1565.png",
    "./img/2025-07-10_03-21-08_4613.png",
    "./img/2025-07-10_03-21-54_9945.png",
    "./img/2025-07-10_03-22-21_4317.png",
    "./img/2025-07-10_03-26-47_3668.png",
    "./img/2025-07-10_03-27-59_4060.png",
    "./img/2025-07-10_03-30-10_4522.png",
    "./img/2025-07-10_03-30-41_7541.png",
    "./img/2025-07-10_03-31-13_8592.png",
    "./img/2025-07-10_03-31-44_3852.png",
    "./img/2025-07-10_03-32-16_1228.png",
    "./img/2025-07-10_03-32-48_8156.png",
    "./img/2025-07-10_05-59-26_2231.png",
    "./img/2025-07-10_05-59-54_3762.png",
    "./img/2025-07-10_06-04-04_7030.png",
    "./img/2025-07-10_06-04-48_5474.png",
    "./img/2025-07-10_06-08-52_3896.png",
    "./img/2025-07-10_06-09-11_2036.png",
    "./img/2025-07-10_06-09-57_4424.png",
    "./img/2025-07-10_06-10-28_2385.png",
    "./img/2025-07-10_06-10-36_2385.png",
    "./img/2025-07-10_06-12-15_9600.png",
    "./img/2025-07-10_06-12-21_4575.png",
    "./img/2025-07-10_06-13-17_4658.png",
];

let slideIndex = 0;

function render() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    artpieces.forEach((src, i) => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = `Artpiece ${i + 1}`;
        img.onclick = () => openfullimg(i);
        content.appendChild(img);
    });
}

function openfullimg(index) {
    slideIndex = index;
    document.getElementById("fullimg").src = artpieces[slideIndex];
    document.getElementById("fullimgbox").style.display = "flex";
}

function closefullimg() {
    document.getElementById("fullimgbox").style.display = "none";
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + artpieces.length) % artpieces.length;
    document.getElementById("fullimg").src = artpieces[slideIndex];
}


