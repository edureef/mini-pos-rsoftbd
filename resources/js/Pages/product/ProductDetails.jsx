import { Head, Link } from "@inertiajs/react";
import Layout from "../components/Layout";
import Barcode from "react-barcode";

const ProductDetails = ({ products }) => {
    return (
        <>
            <Head title="Product Details" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Product Details</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="/product"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={products.name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={products.brand.name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Category
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={products.category.name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Group
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={products.group.name}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={products.description}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <label htmlFor="name" className="form-label">
                                    Barcode
                                </label> */}
                                <Barcode
                                    value={products.barcode}
                                    height={50}
                                    width={3}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">
                                    Unit
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={products.unit}
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ProductDetails;
