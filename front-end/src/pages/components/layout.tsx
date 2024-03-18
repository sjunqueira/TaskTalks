import ResponsiveAppBar from "@/pages/components/ResponsiveAppBar"



export default function Layout({children}) {
  return(
    <>
        <ResponsiveAppBar/>
        <main>{children}</main>
        
    </>
  )
}