import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "blue-color": "#1090CB",
        "footer_text_grey_color":"#777777",
        "about_text_color":"#2E0D64",
        "about_text_grey_color":"#585858"
      
      },
      backgroundColor: {
        "bindi-color": "#08D3BB",
        "footer_background":"#E8F4FA",
        "webapp":"#EFEAFF",
        "seo":'#ECFFDA',
        "arvr":"#DAE6FF",
        "mobileapp":"#FFE5DA",
        "button_color":"#E7EFF3",
        "services_bg_color":"#D2D2D2",
        "services_seo":"#E2F3FF",
        "services_arvr":"#FFE7FB",
        "women_bg_color":"#F5F3DA"
        
      }
    },
  },
  plugins: [],
};
export default config;
