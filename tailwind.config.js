/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "52px",
        h2: "45px",
        h3: "38px",
        h4: "33px",
        h5: "28px",
        h6: "23px",
        btn1: "21px",
        btn2: "18px",
        p1: "16px",
        p2: "14px",
        p3: "12px",
      },
      lineHeight: {
        h1: "52px",
        h2: "45px",
        h3: "38px",
        h4: "33px",
        h5: "28px",
        h6: "23px",
        btn1: "21px",
        btn2: "18px",
        p1: "16px",
        p2: "14px",
        p3: "12px",
      },

      fontWeight: {
        900: "900",
        800: "800",
        700: "700",
        600: "600",
        500: "500",
        400: "400",
        300: "300",
      },
      maxWidth: {
        "1600px": 1600,
      },

      width: {
        "88%": "88%",
        "49%": "49%",
        "33%": "33%",
        "24%": "24%",
        "19%": "19%",
        "16%": "16%",
        "12%": "12%",
        "8%": "8%",
      },
      height: {
        "160px": "160px",
        "260px": "260px",
        "360px": "360px",
        "460px": "460px",
        "560px": "560px",
        "660px": "660px",
        "760px": "760px",
        "860px": "860px",
      },
      minHeight: {
        "160px": "160px",
        "260px": "260px",
        "360px": "360px",
        "460px": "460px",
        "560px": "560px",
        "660px": "660px",
        "760px": "760px",
        "860px": "860px",
      },
      borderRadius: {
        "4px": "4px",
        "8px": "8px",
        "16px": "16px",
        "32px": "32px",
        "64px": "64px",
        "128px": "128px",
        "256px": "256px",
        "50%": "50%",
      },
      screens: {
        "media-max-930px": { max: "930px" },
        "media-max-450px": { max: "450px" },

      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        color_dark_red1: "#be2a3a",
        color_light_red1: "#d25c66",
        color_light_red2: "#e1848c",
        color_light_red3: "#f0acb2",
        color_light_red4: "#facad0",
        color_light_white1: "#ffffffbf",
        navy_blue:"#0a1d37"
      },
    },
  },
  plugins: [],
};
