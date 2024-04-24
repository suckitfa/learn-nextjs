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
                <header>
                    [header]
                </header>
                {children}
                <main>
                    [main]
                </main>
                <footer>
                    [footer]
                </footer>
            </body>
        </html>
    );
}