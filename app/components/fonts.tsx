//import React from "react";

import { Inter,  Tangerine ,Bangers ,Cinzel_Decorative , Cormorant , Young_Serif} from 'next/font/google'
// import { px } from "motion/react";
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter"
})
export const tangerine = Tangerine({
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-tangerine",
    weight : '400'
  })
export const cinzel = Cinzel_Decorative({
  weight : "700",
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-cinzel"
})
export const banger = Bangers({
  subsets :['latin'], 
  weight : '400',
  display : 'swap',
  variable :"--font-banger"
}) 
export const cormorant = Cormorant({
   
  weight : '500',
  display : 'swap',
  subsets : ['latin'],
  style: ["normal", "italic"],
  variable :"--font-cormorant",

})

export const ysf = Young_Serif({
  weight:"400",
  style : "normal", 
  display : "swap", 
  subsets : ["latin"],
  variable: "--font-young"
}) 
