import React from "react";
import Layout from "../components/Layout";
import { Link, useForm } from "@inertiajs/react";

const editCustomer = ({ id, name, email, phone_number, address }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: name,
        email: email,
        phone_number: "0" + phone_number,
        address: address,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/customer/${id}`, {
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
                        <h4>Customer Edit</h4>
                        <Link
                            className="btn btn-sm btn-primary"
                            href="/customer"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit} method="post">
                        <div className="row mb-3 g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label">
                                    Customer Name
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
                            <div className="col-12 col-md-6">
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

                            <div className="col-12 col-md-6">
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
                            <div className="col-12 col-md-6">
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
                                Update Customer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default editCustomer;
