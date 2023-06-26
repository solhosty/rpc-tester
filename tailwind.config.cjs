const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                HeliusOrange: "#E47332",
            },
        },
    },

    daisyui: {
        themes: "light",
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("prettier-plugin-tailwindcss"),
    ],
};

module.exports = config;
