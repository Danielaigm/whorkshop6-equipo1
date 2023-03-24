/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        backgroundImage: {
            carne: "url(src/assets/carne.png)",
            hamburguesa: "url(src/assets/hamgurgesa.png)",
            lechuga: "url(src/assets/lechuga.png)",
            panUno: "url(src/assets/pan1.png)",
            panDos: "url(src/assets/pan2.png)",
            queso: "url(src/assets/queso.png)",
            tocino: "url(src/assets/tocino.png)",
        },
        extend: {
            fontFamily: {
                Delicious: ["Delicious, cursive"],
            },
        },
    },
    plugins: [],
};
