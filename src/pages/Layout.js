import { Outlet, Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <NavigationBar />
            <br />
            <br />
            <br />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;