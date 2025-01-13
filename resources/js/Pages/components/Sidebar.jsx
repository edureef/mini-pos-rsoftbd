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
                            url.startsWith("/customer") ? "active" : ""
                        }`}
                    >
                        <Link
                            className={`nav-link ${
                                url.startsWith("/customer") ? "active" : ""
                            }`}
                            href="/customer"
                        >
                            <i className="fa fa-user-o menu-icon"></i>
                            <span className="menu-title">Customer</span>
                        </Link>
                    </li>
                    <li
                        className={`nav-item ${
                            url.startsWith("/supplier") ? "active" : ""
                        }`}
                    >
                        <Link
                            className={`nav-link ${
                                url.startsWith("/supplier") ? "active" : ""
                            }`}
                            href="/supplier"
                        >
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
                        } ${url.startsWith("/product") ? "active" : ""}`}
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
                                            url.startsWith("/brand")
                                                ? "active"
                                                : ""
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
                                            url.startsWith("/category")
                                                ? "active"
                                                : ""
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
                                            url.startsWith("/unit")
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/unit"
                                    >
                                        Unit
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/group")
                                                ? "active"
                                                : ""
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
                                            url.startsWith("/product")
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/product"
                                    >
                                        Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className={`nav-item ${
                            url.startsWith("/purchase") ? "active" : ""
                        }`}
                    >
                        <Link className={`nav-link`} href="/purchase">
                            <i className="fa fa-shopping-cart menu-icon"></i>
                            <span className="menu-title">Purchase</span>
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
                    <li
                        className={`nav-item ${
                            url.startsWith("/getProductStocks")
                                ? "active"
                                : "" || url.startsWith("/saleReport")
                                ? "active"
                                : ""
                        }`}
                    >
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#report"
                            aria-expanded="false"
                            aria-controls="report"
                        >
                            <i className="fa fa-file-word-o menu-icon"></i>
                            <span className="menu-title">Reports</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="report">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/getProductStocks")
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/getProductStocks"
                                    >
                                        Product Stock Report
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${
                                            url.startsWith("/saleReport")
                                                ? "active"
                                                : ""
                                        }`}
                                        href="/saleReport"
                                    >
                                        Product Sales Report
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li
                        className={`nav-item ${
                            url.startsWith("/users") ? "active" : ""
                        }`}
                    >
                        <Link
                            className={`nav-link ${
                                url.startsWith("/users") ? "active" : ""
                            }`}
                            href="/users"
                        >
                            <i className="fa fa-user-o menu-icon"></i>
                            <span className="menu-title">Users</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
