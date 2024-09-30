const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

const nextButtons = document.querySelectorAll('.next-btn');
const prevButtons = document.querySelectorAll('.prev-btn');

nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        }
    });
});

prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });
});

// Interaktivní cvičení - Spuštění kódu
document.getElementById('run-code').addEventListener('click', () => {
    const userCode = document.getElementById('code-editor').value;
    const outputElement = document.getElementById('code-output');

    // Simulace běhu Python kódu
    let output = '';
    if (userCode.includes("print(")) {
        const match = userCode.match(/print\(['"](.+)['"]\)/);
        if (match && match[1]) {
            output = match[1];
        } else {
            output = 'Chyba ve výrazu print.';
        }
    } else {
        output = 'Žádný příkaz print nenalezen.';
    }

    outputElement.textContent = output;
});
