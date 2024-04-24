/*
 * @Descripttion: 
 * @Version: 1.0
 * @Author: tangguangyuan tangguangyuan@jcxx.com
 * @Date: 2024-04-24 15:25:50
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header style={{border:"1px solid blue"}}>
                    [header]
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