const Login = () => {
    return (
        <>
            <div class="container-scroller">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light shadow rounded-3 text-center py-3 px-4 px-sm-5">
                                    <div class="brand-logo">
                                        <img
                                            src="assets/images/nav-logo.svg"
                                            alt="logo"
                                        />
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <input
                                                type="email"
                                                class="form-control form-control-sm"
                                                placeholder="Username"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="password"
                                                class="form-control form-control-sm"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div class="mt-3 d-grid gap-2">
                                            <a
                                                class="btn btn-sm btn-block btn-primary btn-lg fw-medium auth-form-btn"
                                                href="../../index.html"
                                            >
                                                SIGN IN
                                            </a>
                                        </div>
                                        <div class="my-2 d-flex justify-content-end align-items-center">
                                            <a
                                                href="#"
                                                class="auth-link text-black"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>

                                        <div class="text-center mt-4 fw-light">
                                            {" "}
                                            Don't have an account?{" "}
                                            <a
                                                href="/signup"
                                                class="text-primary"
                                            >
                                                Create
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- content-wrapper ends --> */}
                </div>
                {/* <!-- page-body-wrapper ends --> */}
            </div>
        </>
    );
};

export default Login;