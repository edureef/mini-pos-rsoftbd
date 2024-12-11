import { useRef } from "react";
import Layout from "./../components/Layout";
import { Head, Link } from "@inertiajs/react";
import { useReactToPrint } from "react-to-print";

const PurchaseDetails = ({ purchase, products }) => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({
        contentRef,
        documentTitle: "Purchase",
    });

    return (
        <>
            <Head title="Purchase Details" />
            <Layout>
                <div className="card mb-3 shadow-sm border">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Purchase Details</h4>
                            <div>
                                <Link
                                    className="btn btn-sm btn-primary"
                                    href="/purchase"
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
                                    Supplier Details
                                </h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Supplier Name:</h6>
                                            </td>
                                            <td>
                                                <p>{purchase.supplier.name}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Supplier Email:</h6>
                                            </td>
                                            <td>
                                                <p>{purchase.supplier.email}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Company Name: </h6>
                                            </td>
                                            <td>
                                                <p>
                                                    {
                                                        purchase.supplier
                                                            .company_name
                                                    }
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Company Address:</h6>
                                            </td>
                                            <td>
                                                <p>
                                                    {purchase.supplier.address}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6>Phone Number: </h6>
                                            </td>
                                            <td>
                                                <p>
                                                    0
                                                    {
                                                        purchase.supplier
                                                            .phone_number
                                                    }
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
                                            {purchase.products.map(
                                                (purchase, i) => {
                                                    let product =
                                                        products.filter(
                                                            (product) =>
                                                                product.id ==
                                                                purchase.productName
                                                        );

                                                    return (
                                                        <tr key={i}>
                                                            <td>
                                                                {
                                                                    product[0]
                                                                        .name
                                                                }
                                                            </td>
                                                            <td>
                                                                {purchase.unit}
                                                            </td>
                                                            <td>
                                                                {purchase.price}
                                                            </td>
                                                            <td>
                                                                {
                                                                    purchase.quantity
                                                                }
                                                            </td>
                                                            <td>
                                                                {purchase.price *
                                                                    purchase.quantity}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}

                                            <tr className="border-0">
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0"></td>
                                                <td className="border-0 fw-semibold text-end">
                                                    Net Total Amount:
                                                </td>
                                                <td className="border">
                                                    {purchase.netTotal}
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
                                                    {purchase.discount}%
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
                                                    {purchase.paidAmount}
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
                                                    {purchase.grandTotal}
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
                                                    {purchase.dueAmount}
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

export default PurchaseDetails;
