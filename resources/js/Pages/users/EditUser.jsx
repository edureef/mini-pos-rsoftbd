import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";

const EditUser = ({ user }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        phone_number: "0" + user.phone_number,
        role: user.role,
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    };

    return (
        <>
            <Head title="Edit User" />
            <Layout>
                <div className="card shadow-sm mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Edit User</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="/users"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} method="post">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.name && "is-invalid"
                                        }`}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <p className="text-danger">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-sm ${
                                            errors.email && "is-invalid"
                                        }`}
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <p className="text-danger">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.phone_number && "is-invalid"
                                        }`}
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.phone_number && (
                                        <p className="text-danger">
                                            {errors.phone_number}
                                        </p>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">
                                        User Role
                                    </label>
                                    <select
                                        className={`form-control form-control-sm text-dark ${
                                            errors.role && "is-invalid"
                                        }`}
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="stuff">Stuff</option>
                                    </select>
                                    {errors.role && (
                                        <p className="text-danger">
                                            {errors.role}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.password && "is-invalid"
                                        }`}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    {errors.password && (
                                        <p className="text-danger">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="text-end">
                                <button
                                    className="btn btn-sm btn-primary"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Update User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default EditUser;
