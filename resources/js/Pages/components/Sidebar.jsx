import { Link, usePage } from "@inertiajs/react";

const Sidebar = ({ isOpen }) => {
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
                            url === "/customer" ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/">
                            <i className="fa fa-user-o menu-icon"></i>
                            <span className="menu-title">Customer</span>
                        </Link>
                    </li>
                    <li
                        className={`nav-item ${
                            url === "/supplier" ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/">
                            <i className="fa fa-user-o menu-icon"></i>
                            <span className="menu-title">Supplier</span>
                        </Link>
                    </li>
                    <br />
                    <li
                        className={`nav-item ${
                            url.startsWith("/category") ? "active" : ""
                        } ${url.startsWith("/brand") ? "active" : ""} ${
                            url.startsWith("/group") ? "active" : ""
                        }`}
                    >
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false"
                            aria-controls="ui-basic"
                        >
                            <i className="icon-layout menu-icon"></i>
                            <span className="menu-title">Product</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    {" "}
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/brand") ? "active" : ""
                                        }`}
                                        href="/brand"
                                    >
                                        Brand
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/category") ? "active" : ""
                                        }`}
                                        href="/category"
                                    >
                                        Category
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/group") ? "active" : ""
                                        }`}
                                        href="/group"
                                    >
                                        Group
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/add_product")
                                                ? "active"
                                                : ""
                                        }`}
                                        href=""
                                    >
                                        Add Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className={`nav-item ${
                            url === "/prchase" ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/">
                            <i className="fa fa-shopping-cart menu-icon"></i>
                            <span className="menu-title">Purchase</span>
                        </Link>
                    </li>
                    <li
                        className={`nav-item ${
                            url === "/sales" ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/">
                            <i className="fa fa-money menu-icon"></i>
                            <span className="menu-title">Sales</span>
                        </Link>
                    </li>
                    <li
                        className={`nav-item ${
                            url === "/reports" ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/">
                            <i className="fa fa-file-word-o menu-icon"></i>
                            <span className="menu-title">Reports</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
