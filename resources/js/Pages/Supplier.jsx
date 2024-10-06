import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import Layout from "./components/Layout";
import DeleteModal from "./components/modals/DeleteModal";

const Supplier = ({ suppliers }) => {
    const [supplierData, setSupplierData] = useState([]);

    const openDeleteModal = (data) => {
        setSupplierData(data);
    };

    const handleDeleteBtn = () => {
        router.delete(`supplier/${supplierData.id}`);
    };

    return (
        <>
            <Head title="Supplier" />
            <Layout>
                <div className="card shadow-sm mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Supplier Page</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="supplier/create"
                            >
                                Add Supplier
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
                                        <th>Supplier Name</th>
                                        <th>Supplier Email</th>
                                        <th>Phone Number</th>
                                        <th>Company Name</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suppliers.data.map((supplier, index) => {
                                        return (
                                            <tr key={supplier.id}>
                                                <td>{index + 1}</td>
                                                <td>{supplier.name}</td>
                                                <td>{supplier.email}</td>
                                                <td>
                                                    0{supplier.phone_number}
                                                </td>
                                                <td>{supplier.company_name}</td>
                                                <td>{supplier.address}</td>
                                                <td>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-success"
                                                        href={`/supplier/${supplier.id}/edit`}
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                supplier
                                                            )
                                                        }
                                                        dataName={
                                                            supplierData.name
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
                                        {suppliers.links.map((link, index) => (
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

export default Supplier;
