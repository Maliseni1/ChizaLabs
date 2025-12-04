import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  // Safelist tells Tailwind: "Please keep these classes even if you don't see them in the code right now"
  // This is crucial for dynamic color classes like `bg-${primary}-500` used in the seasonal themes
  safelist: [
    {
      pattern: /(text|bg|border)-(red|orange|pink|green|purple|blue|teal|indigo)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'dark', 'dark:hover', 'group-hover'],
    },
    {
      pattern: /(from|to)-(red|orange|pink|green|purple|blue|teal|indigo)-(500|900|950)/, // For gradients
      variants: ['dark'],
    },
  ],
  plugins: [],
};
export default config;