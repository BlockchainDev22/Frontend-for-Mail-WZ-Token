import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return(
        <>
            <Sidebar/>
            <section className="ml-60 mt-12 p-4">
                {children}
            </section>
        </>
    )
};

export default Layout;