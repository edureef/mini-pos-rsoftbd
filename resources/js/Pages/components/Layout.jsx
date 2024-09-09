import Sidebar from "./Sidebar"
import { useState } from "react"

const Layout = ({ children }) => {
    const [isOpen, setIsopen] = useState(false)
    const menuToggle = () => {
        setIsopen(!isOpen)
    }

    return <>
        <div className="container-scroller">
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row shadow-sm">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    {/* <div className="me-3">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={menuToggle} data-bs-toggle="minimize">
                            <span className="icon-menu"></span>
                        </button>
                    </div> */}
                    <div className="ms-3">
                        <a className="navbar-brand brand-logo" href="/">
                            <img src="../../assets/images/nav-logo.svg" className="h-25" alt="logo" />
                        </a>
                        <a className="navbar-brand brand-logo-mini" href="/">
                            <img src="../../assets/images/logo-mini.png" className="" alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-top">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown d-lg-block user-dropdown">
                            <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="img-xs rounded-circle" src="../../assets/images/faces/face8.jpg" alt="Profile image" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <div className="dropdown-header text-center">
                                    <img className="img-md rounded-circle" src="../../assets/images/faces/face8.jpg" alt="Profile image" />
                                    <p className="mb-1 mt-3 fw-semibold">Admin</p>
                                    <p className="fw-light text-muted mb-0">admin@gmail.com</p>
                                </div>
                                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile</a>
                                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={menuToggle} data-bs-toggle="">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
            <div className="container-fluid page-body-wrapper mt-2">
                <Sidebar isOpen={isOpen} />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Layout