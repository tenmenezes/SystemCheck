"use client"

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const AosInit = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        })
     }, [] )

    return null;
}

export default AosInit