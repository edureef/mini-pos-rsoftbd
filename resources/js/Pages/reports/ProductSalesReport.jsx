import { Head, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";

const ProductSalesReport = ({ cashiers, totalSalesAmount }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        cashierId: "",
        day: "",
        month: "",
        year: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/saleReport", {
            onSuccess: () => {
                reset();
            },
        });
    };

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

                <div className="row g-3">
                    <div className="col-12 col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Cashier:
                                            </label>
                                            <div className="col-7">
                                                <select
                                                    className={`form-select form-select-sm text-dark ${
                                                        errors.cashierId &&
                                                        "is-invalid border-danger"
                                                    }`}
                                                    value={data.cashierId}
                                                    onChange={(e) =>
                                                        setData(
                                                            "cashierId",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select a Cashier
                                                    </option>
                                                    <option value="allCashier">
                                                        All
                                                    </option>
                                                    {cashiers.map((cashier) => (
                                                        <option
                                                            key={cashier.id}
                                                            value={cashier.id}
                                                        >
                                                            {cashier.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.cashierId && (
                                                    <p className="text-danger">
                                                        {errors.cashierId}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Day:
                                            </label>
                                            <div className="col-7">
                                                <select
                                                    className={`form-select form-select-sm text-dark ${
                                                        errors.day &&
                                                        "is-invalid"
                                                    }`}
                                                    value={data.day}
                                                    onChange={(e) =>
                                                        setData(
                                                            "day",
                                                            e.target.value
                                                        )
                                                    }
                                                >
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
                                                {errors.day && (
                                                    <p className="text-danger">
                                                        {errors.day}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Month:
                                            </label>
                                            <div className="col-7">
                                                <select
                                                    className={`form-select form-select-sm text-dark ${
                                                        errors.month &&
                                                        "is-invalid border-danger"
                                                    }`}
                                                    value={data.month}
                                                    onChange={(e) =>
                                                        setData(
                                                            "month",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select a Month
                                                    </option>
                                                    <option value="1">
                                                        January
                                                    </option>
                                                    <option value="2">
                                                        February
                                                    </option>
                                                    <option value="3">
                                                        March
                                                    </option>
                                                    <option value="4">
                                                        April
                                                    </option>
                                                    <option value="5">
                                                        May
                                                    </option>
                                                    <option value="6">
                                                        June
                                                    </option>
                                                    <option value="7">
                                                        July
                                                    </option>
                                                    <option value="8">
                                                        August
                                                    </option>
                                                    <option value="9">
                                                        September
                                                    </option>
                                                    <option value="10">
                                                        October
                                                    </option>
                                                    <option value="11">
                                                        November
                                                    </option>
                                                    <option value="12">
                                                        December
                                                    </option>
                                                </select>
                                                {errors.month && (
                                                    <p className="text-danger">
                                                        {errors.month}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row g-3 align-items-center">
                                            <label className="form-label form-label-sm col-5">
                                                Year:
                                            </label>
                                            <div className="col-7">
                                                <input
                                                    type="number"
                                                    className={`form-control form-control-sm ${
                                                        errors.year &&
                                                        "is-invalid"
                                                    }`}
                                                    value={data.year}
                                                    onChange={(e) =>
                                                        setData(
                                                            "year",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.year && (
                                                    <p className="text-danger">
                                                        {errors.year}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button
                                                className="btn btn-sm btn-primary fw-bold"
                                                disabled={processing}
                                            >
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
                                            <span>
                                                Total sales amount:{" "}
                                                {totalSalesAmount ?? 0}
                                            </span>
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
