import React, { useState } from "react";
import Layout from "./../components/Layout";
import { Link, router } from "@inertiajs/react";
import DeleteModal from "../components/modals/DeleteModal";
import Barcode from "react-barcode";

const ViewProduct = ({ products }) => {
    const [productData, setProductData] = useState([]);

    const handleDeleteBtn = () => {
        router.delete(`product/${productData.id}`);
    };

    const openDeleteModal = (product) => {
        setProductData(product);
    };

    return (
        <>
            <Layout>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Product Page</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="/product/create"
                            >
                                Add Product
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive text-center">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Barcode</th>
                                        <th>Product Name</th>
                                        <th>Unit</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.data.map((product) => {
                                        return (
                                            <tr key={product.id}>
                                                <td>
                                                    <Barcode
                                                        value={product.barcode}
                                                        width={2}
                                                        height={30}
                                                        fontSize={12}
                                                    />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{product.unit}</td>
                                                <td>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-primary me-2"
                                                        href={`/product/${product.id}`}
                                                    >
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-success"
                                                        href={`/product/${product.id}/edit`}
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                product
                                                            )
                                                        }
                                                        dataName={
                                                            productData.name
                                                        }
                                                        handleDeleteBtn={
                                                            handleDeleteBtn
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="py-4">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        {products.links.map((link, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${
                                                    link.active ? "active" : ""
                                                } ${
                                                    !link.url ? "disabled" : ""
                                                }`}
                                            >
                                                {link.url ? (
                                                    <Link
                                                        className="page-link"
                                                        href={link.url}
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label,
                                                        }}
                                                    />
                                                ) : (
                                                    <span
                                                        className="page-link"
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label,
                                                        }}
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ViewProduct;
