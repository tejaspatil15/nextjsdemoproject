import Footer from "./footer";
import Navbar1 from "./navbar1";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar1/>
            {children}
            <Footer/>

        </div>

    );
}
export default Layout;