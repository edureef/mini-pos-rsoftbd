import React, { useState } from "react";
import Layout from "./../components/Layout";
import { Link, router } from "@inertiajs/react";
import DeleteModal from "./../components/modals/DeleteModal";

const PurchaseList = () => {
    const [purchaseData, setPurchaseData] = useState([]);
    const openDeleteModal = (purchase) => {
        setPurchaseData(purchase);
    };

    const handleDeleteBtn = () => {
        router.delete(`purchase/${id}`);
    };
    const purchases = [
        {
            id: 1,
            date: "2022-01-01",
            supplier: {
                id: 1,
                name: "Supplier 1",
            },
            payment_status: "Paid",
            grand_total: 100,
            payment_due: 0,
        },
        {
            id: 2,
            date: "2022-02-01",
            supplier: {
                id: 2,
                name: "Supplier 2",
            },
            payment_status: "Due",
            grand_total: 200,
            payment_due: 100,
        },
    ];
    return (
        <>
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
                                    {purchases.map((purchase) => {
                                        return (
                                            <tr key={purchase.id}>
                                                <td>{purchase.date}</td>
                                                <td>
                                                    {purchase.supplier.name}
                                                </td>
                                                <td>
                                                    {purchase.payment_status ==
                                                    "Paid" ? (
                                                        <span className="badge badge-success">
                                                            Paid
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-warning">
                                                            Due
                                                        </span>
                                                    )}
                                                </td>
                                                <td>{purchase.grand_total}</td>
                                                <td>{purchase.payment_due}</td>
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
                                        {/* {purchases.links.map((link, index) => (
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
                                        ))} */}
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
