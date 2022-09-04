const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: colors.emerald,
                gray: colors.slate,
            },
        },
    },
    plugins: [],
}
