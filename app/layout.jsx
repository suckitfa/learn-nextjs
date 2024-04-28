/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: tangguangyuan tangguangyuan@jcxx.com
 * @Date: 2024-04-24 15:25:50
 */
import Link from "next/link";
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header style={{border:"1px solid blue"}}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {children}
                <main style={{border:"1px solid blue"}}>
                    [main]
                </main>
                <footer style={{border:"1px solid blue"}}>
                    [footer]
                </footer>
            </body>
        </html>
    );
}