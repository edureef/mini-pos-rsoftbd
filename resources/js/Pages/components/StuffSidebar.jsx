import { Link, usePage } from "@inertiajs/react";

const StuffSidebar = ({ isOpen }) => {
    const { url } = usePage();
    return (
        <>
            <nav
                className={`sidebar sidebar-offcanvas ${
                    isOpen ? "active" : ""
                }`}
            >
                <ul className="nav">
                    <li className={`nav-item ${url === "/" ? "active" : ""}`}>
                        <Link className={`nav-link`} href="/">
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li
                        className={`nav-item ${
                            url.startsWith("/sales") ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/sales">
                            <i className="fa fa-money menu-icon"></i>
                            <span className="menu-title">Sales</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default StuffSidebar;
