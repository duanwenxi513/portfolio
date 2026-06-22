export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        deep: {
          900: "#08080d",
          800: "#0e0f16",
          700: "#161822",
          600: "#1e2030",
        },
        accent: {
          gold: "#d4af37",
          amber: "#f59e2e",
          warm: "#f97316",
          teal: "#2dd4bf",
          rose: "#fb7185",
        },
      },
    },
  },
  plugins: [],
};
