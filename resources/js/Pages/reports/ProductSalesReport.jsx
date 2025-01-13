import { Head } from "@inertiajs/react";
import Layout from "../components/Layout";

const ProductSalesReport = () => {
    return (
        <>
            <Head title="Sales Report" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Product Sales Reports</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form action="">
                                    <div className="d-flex flex-column gap-3">
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Cashier:
                                            </label>
                                            <div className="col-7">
                                                <select className="form-select form-select-sm text-dark">
                                                    <option value="">
                                                        Select a Cashier
                                                    </option>
                                                    <option value="cashier1">
                                                        Cashier 1
                                                    </option>
                                                    <option value="cashier2">
                                                        Cashier 2
                                                    </option>
                                                    <option value="cashier3">
                                                        Cashier 3
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Day:
                                            </label>
                                            <div className="col-7">
                                                <select className="form-select form-select-sm text-dark">
                                                    <option value="">
                                                        Select a Day
                                                    </option>
                                                    {Array.from({
                                                        length: 31,
                                                    }).map((_, i) => (
                                                        <option
                                                            key={i + 1}
                                                            value={i + 1}
                                                        >
                                                            {i + 1}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Month:
                                            </label>
                                            <div className="col-7">
                                                <select className="form-select form-select-sm text-dark">
                                                    {[
                                                        "Select a Month",
                                                        "January",
                                                        "February",
                                                        "March",
                                                        "April",
                                                        "May",
                                                        "June",
                                                        "July",
                                                        "August",
                                                        "September",
                                                        "October",
                                                        "November",
                                                        "December",
                                                    ].map((month, index) => (
                                                        <option
                                                            key={index}
                                                            value={month}
                                                        >
                                                            {month}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Year:
                                            </label>
                                            <div className="col-7">
                                                <input
                                                    type="number"
                                                    name=""
                                                    className="form-control form-control-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-sm btn-primary fw-bold">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="table-responsive text-center">
                                    <div className="text-start">
                                        <h6 className="fw-bold text-success">
                                            <span>Total sales amount:</span>
                                        </h6>
                                    </div>
                                    <hr />
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Barcode</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Product 1</td>
                                                <td>123456789</td>
                                                <td>5</td>
                                                <td>1000</td>
                                                <td>5000</td>
                                            </tr>
                                            <tr>
                                                <td>Product 2</td>
                                                <td>987654321</td>
                                                <td>3</td>
                                                <td>1500</td>
                                                <td>4500</td>
                                            </tr>
                                            <tr>
                                                <td>Product 3</td>
                                                <td>555555555</td>
                                                <td>2</td>
                                                <td>2000</td>
                                                <td>4000</td>
                                            </tr>
                                            <tr>
                                                <td>Product 4</td>
                                                <td>444444444</td>
                                                <td>1</td>
                                                <td>3000</td>
                                                <td>3000</td>
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

export default ProductSalesReport;
