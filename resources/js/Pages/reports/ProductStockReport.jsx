import { Head, Link } from "@inertiajs/react";
import Layout from "../components/Layout";
import Barcode from "react-barcode";

const ProductStockReport = ({ stockData }) => {
    return (
        <>
            <Head title="Stock Reports" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Product Stock Reports</h4>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive text-center">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Barcode</th>
                                        <th>Unit</th>
                                        <th>Stock</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stockData.data.map((stock) => {
                                        return (
                                            <tr key={stock.id}>
                                                <td>{stock.product.name}</td>
                                                <td>
                                                    <Barcode
                                                        value={
                                                            stock.product
                                                                .barcode
                                                        }
                                                        height={22}
                                                        width={0.8}
                                                    />
                                                </td>
                                                <td>{stock.product.unit}</td>
                                                <td>{stock.quantity}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="py-4">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        {stockData.links.map((link, index) => (
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

export default ProductStockReport;
