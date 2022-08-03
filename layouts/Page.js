import { Helmet } from "react-helmet"
export default function PageLayout({children}) {


    return (
        <>  
            <Helmet>
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://kit.fontawesome.com/6a23bab7e7.js" crossOrigin="anonymous"></script>
            </Helmet>
            {children}
        </>
    )

}