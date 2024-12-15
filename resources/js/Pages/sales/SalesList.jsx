import { Head, Link, router } from "@inertiajs/react";
import Layout from "../components/Layout";
import DeleteModal from "./../components/modals/DeleteModal";
import { useState } from "react";

const SalesList = ({ sales }) => {
    const [saleData, setSaleData] = useState([]);
    const openDeleteModal = (data) => {
        setSaleData(data);
    };

    const handleDeleteBtn = () => {
        router.delete(`sales/${saleData.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Sales List" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Sales List</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="sales/create"
                            >
                                Add Sale
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
                                        <th>Customer</th>
                                        <th>Payment Status</th>
                                        <th>Grand Total</th>
                                        <th>Payment Due</th>
                                        <th>Sales By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.data.map((sale) => {
                                        return (
                                            <tr key={sale.id}>
                                                <td>{sale.created_at}</td>
                                                <td>{sale.customer.name}</td>
                                                <td>
                                                    {sale.payment_status ==
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
                                                <td>{sale.grandTotal}</td>
                                                <td>{sale.dueAmount}</td>
                                                <td>{sale.user.name}</td>
                                                <td>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-primary me-2"
                                                        href={`/sales/${sale.id}`}
                                                    >
                                                        <i className="fa fa-eye"></i>
                                                    </Link>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-success"
                                                        href={`/sales/${sale.id}/edit`}
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                sale
                                                            )
                                                        }
                                                        dataName={
                                                            "Sale ID: " +
                                                            saleData.id
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
                                        {sales.links.map((link, index) => (
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

export default SalesList;
