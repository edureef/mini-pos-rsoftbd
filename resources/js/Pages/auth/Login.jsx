import { Link, useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post("/login", data);
    };
    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light shadow rounded-3 py-3 px-4 px-sm-5">
                                    <div className="brand-logo text-center">
                                        <img
                                            src="assets/images/nav-logo.svg"
                                            alt="logo"
                                        />
                                    </div>
                                    <form onSubmit={handleOnSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className={`form-control rounded form-control-sm ${
                                                    errors.email
                                                        ? "is-invalid mb-1"
                                                        : ""
                                                }`}
                                                placeholder="Email"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <p className="invalid-feedback">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className={`form-control rounded form-control-sm ${
                                                    errors.password
                                                        ? "is-invalid mb-1"
                                                        : ""
                                                }`}
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.password && (
                                                <p className="invalid-feedback">
                                                    {errors.password}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button
                                                className="btn btn-block btn-primary btn-sm fw-medium auth-form-btn"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                SIGN IN
                                            </button>
                                        </div>
                                        <div className="my-2 d-flex justify-content-end align-items-center">
                                            <Link
                                                href="#"
                                                className="auth-link text-black"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>

                                        <div className="text-center mt-4 fw-light">
                                            {" "}
                                            Don't have an account?{" "}
                                            <Link
                                                href="/register"
                                                className="text-primary"
                                            >
                                                Create
                                            </Link>
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
