module.exports = {
    content: [
        './dist/*.html',
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/search/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '18': '4.5rem'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}