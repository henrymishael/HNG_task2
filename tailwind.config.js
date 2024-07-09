const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Syne",
      tertiary: "Syne",
    },

    screens: {
      xsm: "280px",
      sm: "390px",
      md: "540px",
      slg: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "#F1F0F0",
        header: "#ffffff",
        primary: "#012850",
        accent: "#FF92A5CC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        herostyle: "linear-gradient(179deg, #DDD8D5 69.44%, #E2E0E1 91.41%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
