import React, { useRef } from "react";
import { Head, Link } from "@inertiajs/react";
import Layout from "../components/Layout";
import { useReactToPrint } from "react-to-print";

const SaleDetails = ({ sale, products }) => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({
        contentRef,
        documentTitle: "Sale",
    });

    return (
        <>
            <Head title="Sale Details" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Sales List</h4>
                            <div>
                                <Link
                                    className="btn btn-sm btn-primary"
                                    href="/sales"
                                >
                                    Back
                                </Link>
                                <button
                                    onClick={reactToPrintFn}
                                    className="btn btn-sm btn-primary ms-2"
                                >
                                    <i className="fa fa-print"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={contentRef} className="card shadow-sm border">
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <h4 className="mb-3 text-decoration-underline">
                                    Customer Details
                                </h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Customer Name:</h6>
                                            </td>
                                            <td>
                                                <p>{sale.customer.name}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Customer Email:</h6>
                                            </td>
                                            <td>
                                                <p>{sale.customer.email}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Company Address:</h6>
                                            </td>
                                            <td>
                                                <p>{sale.customer.address}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Phone Number: </h6>
                                            </td>
                                            <td>
                                                <p>
                                                    0
                                                    {sale.customer.phone_number}
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Unit</th>
                                                <th>Unit Price</th>
                                                <th>quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sale.products.map((sale, i) => {
                                                let product = products.filter(
                                                    (product) =>
                                                        product.id ==
                                                        sale.productName
                                                );
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {product[0].name}
                                                        </td>
                                                        <td>{sale.unit}</td>
                                                        <td>{sale.price}</td>
                                                        <td>{sale.quantity}</td>
                                                        <td>
                                                            {sale.price *
                                                                sale.quantity}
                                                        </td>
                                                    </tr>
                                                );
                                            })}

                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Net Total Amount:
                                                </td>
                                                <td className="border">
                                                    {sale.netTotal}
                                                </td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Discount:
                                                </td>
                                                <td className="border">
                                                    {sale.discount}%
                                                </td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Paid Amount:
                                                </td>
                                                <td className="border">
                                                    {sale.paidAmount}
                                                </td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Grand Total:
                                                </td>
                                                <td className="border">
                                                    {sale.grandTotal}
                                                </td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Due Amount:
                                                </td>
                                                <td className="border">
                                                    {sale.dueAmount}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SaleDetails;
