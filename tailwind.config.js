const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		fontFamily: {
			sans: ["Helvetica", "Arial", "sans-serif"],
    },
		extend: {
			colors: {
				blue: {
					500: "#2563eb", // Override the default brown color
					600: "#2563eb", // Override the default brown color
					700: "#173ead",
					// Add more shades as needed
				},
				sky: {
					100: "#e0f2fe",
				},
				brown: {
          DEFAULT: '#795548', // Solid brown color
          light: '#a27160',   // Light brown variation
          dark: '#583f36',    // Dark brown variation
        },
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
})
