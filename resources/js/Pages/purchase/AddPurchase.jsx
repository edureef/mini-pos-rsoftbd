import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";

const AddPurchase = () => {
    const { data, setData } = useForm({
        supplier: "",
        products: [{}],
        discount: "",
        paidAmount: "",
        dueAmount: "",
        grandTotal: 0,
    });

    const addRow = () => {
        setData("products", [...data.products, {}]);
    };

    const removeRow = (index) => {
        setData(
            "products",
            data.products.filter((_, i) => i !== index)
        );
    };

    const handleChange = (index, e) => {
        const newProducts = data.products.slice();
        newProducts[index] = {
            ...newProducts[index],
            [e.target.name]: e.target.value,
        };
        setData("products", newProducts);
    };

    const calculateTotals = () => {
        const netTotal = data.products.reduce(
            (sum, item) => sum + (item.quantity * item.price || 0),
            0
        );
        const discountAmount = (data.discount / 100) * netTotal;
        const grandTotal = (netTotal - discountAmount).toFixed();
        const dueAmount = (grandTotal - (data.paidAmount || 0)).toFixed();

        return { netTotal, grandTotal, dueAmount };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { netTotal, grandTotal, dueAmount } = calculateTotals();

        setData("grandTotal", grandTotal);
        setData("dueAmount", dueAmount);

        // Here you would send `data` to the backend
        console.log({ ...data, grandTotal, dueAmount });
    };

    return (
        <>
            <Head title="Add Purchase" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Add Purchase</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="/purchase"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-1">
                                <label className="form-label">Supplier:</label>
                            </div>
                            <div className="col-md-3">
                                <select
                                    className="form-select form-select-sm text-dark"
                                    value={data.supplier}
                                    onChange={(e) =>
                                        setData("supplier", e.target.value)
                                    }
                                >
                                    <option value="">Select Supplier</option>
                                    <option value="supplier1">
                                        Supplier 1
                                    </option>
                                    <option value="supplier2">
                                        Supplier 2
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className="text-center">
                                    <tr>
                                        <th>Product</th>
                                        <th>Unit</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.products.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="productName"
                                                    className="form-control form-control-sm"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="unit"
                                                    list="units"
                                                    className="form-control form-control-sm"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                                <datalist id="units">
                                                    <option value="kg" />
                                                    <option value="ltr" />
                                                    <option value="pcs" />
                                                    <option value="ml" />
                                                    <option value="gm" />
                                                    <option value="dozen" />
                                                    <option value="pack" />
                                                    <option value="box" />
                                                    <option value="bottle" />
                                                    <option value="jar" />
                                                    <option value="roll" />
                                                    <option value="packet" />
                                                    <option value="bag" />
                                                    <option value="unit" />
                                                    <option value="litre" />
                                                    <option value="meter" />
                                                </datalist>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    className="form-control form-control-sm"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="price"
                                                    className="form-control form-control-sm"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    disabled
                                                    value={
                                                        item.quantity *
                                                            item.price || 0
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() =>
                                                        removeRow(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <hr />
                        <div className="d-flex align-items-center gap-2 mt-3">
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={addRow}
                            >
                                Add Row
                            </button>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-end align-items-center">
                        <div className="col-md-5">
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Net Total Amount:
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                disabled
                                                value={
                                                    calculateTotals().netTotal
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Discount:
                                        </label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    value={data.discount}
                                                    onChange={(e) =>
                                                        setData(
                                                            "discount",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <span className="input-group-text">
                                                    %
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Paid Amount:
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control form-control-sm"
                                                value={data.paidAmount}
                                                onChange={(e) =>
                                                    setData(
                                                        "paidAmount",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Grand Total:
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                disabled
                                                value={
                                                    calculateTotals().grandTotal
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Due Amount:
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                disabled
                                                value={
                                                    calculateTotals().dueAmount
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-4">
                                        <div className="col-md-12">
                                            <button
                                                className="btn w-100 btn-primary"
                                                type="submit"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    );
};

export default AddPurchase;
