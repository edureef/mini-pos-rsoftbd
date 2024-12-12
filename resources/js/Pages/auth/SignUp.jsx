import { Link, useForm } from "@inertiajs/react";

const SignUp = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post("/register");
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
                                                type="text"
                                                className={`form-control rounded form-control-sm ${
                                                    errors.name
                                                        ? "is-invalid mb-1"
                                                        : ""
                                                }`}
                                                placeholder="Username"
                                                onChange={(e) => {
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            {errors.name && (
                                                <div className="invalid-feedback">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className={`form-control rounded form-control-sm ${
                                                    errors.email
                                                        ? "is-invalid mb-1"
                                                        : ""
                                                }`}
                                                placeholder="Email"
                                                onChange={(e) => {
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
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
                                                onChange={(e) => {
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className={`form-control rounded form-control-sm ${
                                                    errors.password_confirmation
                                                        ? "is-invalid mb-1"
                                                        : ""
                                                }`}
                                                placeholder="Confirm Password"
                                                onChange={(e) => {
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            {errors.password_confirmation && (
                                                <div className="invalid-feedback">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-3 d-grid gap-2">
                                            <button
                                                className="btn btn-block btn-primary btn-sm fw-medium auth-form-btn"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                SIGN UP
                                            </button>
                                        </div>
                                        <div className="text-center mt-4 fw-light">
                                            {" "}
                                            Already have an account?{" "}
                                            <Link
                                                href="/login"
                                                className="text-primary"
                                            >
                                                Login
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

export default SignUp;
