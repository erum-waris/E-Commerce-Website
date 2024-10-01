import { My_Soul } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	  },
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			myGrey:"#C4DAD2",
			myBlue:"#16325B", 
			myOrange:"#FF9100",
			myWhite:"#eeeeee",
			myBlack:"#111111",
            myRed:"#FF0000"
		}
  	}
  },
  plugins: [require("tailwindcss-animate"),require('daisyui')],
};
export default config;
