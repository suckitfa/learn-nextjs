export default function ReviewsLayout({children}) {
    return (
        <>
            <div style={{display:'flex'}}>
                <div style={{border:'1px solid red'}}>
                    [reviews sidebar]
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}