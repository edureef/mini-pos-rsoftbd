import React from "react";
import Layout from "../components/Layout";
import { Link } from "@inertiajs/react";

const CreateCustomer = () => {
    return (
        <Layout>
            <div className="card mb-3 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Customer Form</h4>
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
                    <form action="" method="post">
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="form-label">
                                    Customer Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <label className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                />
                            </div>
                            <div className="col-6">
                                <label className="form-label">Address</label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                />
                            </div>
                        </div>
                        <div className="text-end">
                            <button
                                className="btn btn-sm btn-primary"
                                type="submit"
                            >
                                Add Customer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CreateCustomer;
