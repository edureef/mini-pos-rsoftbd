import React, { useState } from "react";
import Layout from "./components/Layout";
import DeleteModal from "./components/modals/DeleteModal";
import { Head, Link, router } from "@inertiajs/react";

const Customer = ({ customers }) => {
    const [customerData, setCustomerData] = useState([]);

    const openDeleteModal = (data) => {
        setCustomerData(data);
    };

    const handleDeleteBtn = () => {
        router.delete(`customer/${customerData.id}`);
    };

    return (
        <>
            <Head title="Customer" />
            <Layout>
                <div className="card shadow-sm mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Customer Page</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="customer/create"
                            >
                                Add Customer
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
                                        <th>ID</th>
                                        <th>Customer Name</th>
                                        <th>Customer Email</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.data.map((customer, index) => {
                                        return (
                                            <tr key={customer.id}>
                                                <td>{index + 1}</td>
                                                <td>{customer.name}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.phone_number}</td>
                                                <td>{customer.address}</td>
                                                <td>
                                                    {/* <CategoryModal
                                                        isEdit={category}
                                                        categoryData={
                                                            categoryData
                                                        }
                                                        openEditModal={() =>
                                                            openEditModal(
                                                                category
                                                            )
                                                        }
                                                    /> */}
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                customer
                                                            )
                                                        }
                                                        dataName={
                                                            customerData.name
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
                                        {customers.links.map((link, index) => (
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

export default Customer;
