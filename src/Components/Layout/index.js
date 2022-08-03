import Footer from "./Footer"
import Navbar from "./Navbar"

const index = ({children}) => {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>

    </>
  )
}

export default index