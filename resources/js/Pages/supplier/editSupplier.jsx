import React from "react";
import Layout from "../components/Layout";
import { Link, useForm } from "@inertiajs/react";

const editSupplier = ({
    id,
    name,
    email,
    phone_number,
    company_name,
    address,
}) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: name,
        email: email,
        phone_number: "0" + phone_number,
        company_name: company_name,
        address: address,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/supplier/${id}`, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Layout>
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Supplier Edit</h4>
                        <Link
                            className="btn btn-sm btn-primary"
                            href="/supplier"
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
                                    Supplier Name
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
                                    <p className="text-danger">{errors.name}</p>
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
                                    type="number"
                                    className={`form-control form-control-sm ${
                                        errors.phone_number && "is-invalid"
                                    }`}
                                    value={data.phone_number}
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
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
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors.company_name && "is-invalid"
                                    }`}
                                    value={data.company_name}
                                    onChange={(e) =>
                                        setData("company_name", e.target.value)
                                    }
                                />
                                {errors.company_name && (
                                    <p className="text-danger">
                                        {errors.company_name}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="form-label">Address</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors.address && "is-invalid"
                                    }`}
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                />
                                {errors.address && (
                                    <p className="text-danger">
                                        {errors.address}
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
                                Update Supplier
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default editSupplier;
