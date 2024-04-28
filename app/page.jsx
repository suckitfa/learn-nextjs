'use client';
import { useEffect } from "react"

/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: tangguangyuan tangguangyuan@jcxx.com
 * @Date: 2024-04-24 15:32:33
 */
export default function HomePage() {
    console.log("[Home Page]!")
    // useEffect(() => {
    //     window.alert("Welcome to my site!")
    // },[]) // use client
    return (
        <>
            <h1>Indie Gamer</h1>
            <p>Only the base indie games, reviewed for you.</p>
        </>
    )
}