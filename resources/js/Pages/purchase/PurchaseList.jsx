import React, { useState } from "react";
import Layout from "./../components/Layout";
import { Head, Link, router } from "@inertiajs/react";
import DeleteModal from "./../components/modals/DeleteModal";

const PurchaseList = ({ purchases }) => {
    const [purchaseData, setPurchaseData] = useState([]);
    const openDeleteModal = (purchase) => {
        setPurchaseData(purchase);
    };

    const handleDeleteBtn = () => {
        console.log(purchaseData);
        // router.delete(`purchase/${purchaseData.id}`);
    };

    return (
        <>
            <Head title="Purchase List" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Purchase List</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="purchase/create"
                            >
                                Add Purchase
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive text-center">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Supplier</th>
                                        <th>Payment Status</th>
                                        <th>Grand Total</th>
                                        <th>Payment Due</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchases.data.map((purchase) => {
                                        return (
                                            <tr key={purchase.id}>
                                                <td>{purchase.created_at}</td>
                                                <td>
                                                    {purchase.supplier.name}
                                                </td>
                                                <td>
                                                    {purchase.payment_status ==
                                                    "paid" ? (
                                                        <span className="badge badge-success">
                                                            Paid
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-warning">
                                                            Due
                                                        </span>
                                                    )}
                                                </td>
                                                <td>{purchase.grandTotal}</td>
                                                <td>{purchase.dueAmount}</td>
                                                <td>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-primary me-2"
                                                        href={`/purchase/${purchase.id}`}
                                                    >
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-success"
                                                        href={`/purchase/${purchase.id}/edit`}
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                purchase
                                                            )
                                                        }
                                                        dataName={
                                                            "Purchase ID:" +
                                                            purchaseData.id
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
                                        {purchases.links.map((link, index) => (
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

export default PurchaseList;
