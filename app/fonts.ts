import { Poppins, PT_Serif,Gabarito } from 'next/font/google'

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const pt_serif = PT_Serif({
    subsets: ["latin"],
    style: ["normal", "italic"],
    display: "swap",
    variable: "--font-pt_serif",
    weight: ["400", "700"],
})
export const gabarito = Gabarito({
    subsets: ["latin"],
    style: ["normal"],
    display: "swap",
    variable: "--font-gabarito",
    weight: ["500"],
})