import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";

const EditPurchase = ({ suppliers, products, purchase, units }) => {
    const { data, setData, put, processing, errors } = useForm({
        supplier_id: purchase.supplier_id,
        products: [...purchase.products],
        netTotal: "",
        discount: purchase.discount,
        paidAmount: purchase.paidAmount,
        dueAmount: "",
        grandTotal: "",
    });

    const addRow = () => {
        setData("products", [
            ...data.products,
            { productName: "", unit: "", quantity: "", price: "" },
        ]);
    };

    const removeRow = (index) => {
        setData(
            "products",
            data.products.filter((_, i) => i !== index)
        );
    };

    const handleChange = (index, e) => {
        const updatedProducts = [...data.products];
        updatedProducts[index] = {
            ...updatedProducts[index],
            [e.target.name]: e.target.value,
        };
        setData("products", updatedProducts);
    };

    const calculateTotals = () => {
        const netTotal = data.products.reduce(
            (sum, item) =>
                sum +
                (parseFloat(item.quantity) || 0) *
                    (parseFloat(item.price) || 0),
            0
        );
        const discountAmount = (parseFloat(data.discount) / 100) * netTotal;
        const grandTotal = netTotal - discountAmount;
        const dueAmount = grandTotal - (parseFloat(data.paidAmount) || 0);

        return {
            netTotal: netTotal.toFixed(2),
            grandTotal: grandTotal.toFixed(2),
            dueAmount: dueAmount.toFixed(2),
        };
    };

    const totals = calculateTotals();

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/purchase/${purchase.id}`);
    };

    return (
        <>
            <Head title="Edit Purchase" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Edit Purchase</h4>
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
                                    value={data.supplier_id}
                                    onChange={(e) =>
                                        setData("supplier_id", e.target.value)
                                    }
                                >
                                    <option value="">Select Supplier</option>
                                    {suppliers.data.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.supplier_id && (
                                    <div className="text-danger">
                                        {errors.supplier_id}
                                    </div>
                                )}
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
                                                <select
                                                    className="form-select form-select-sm text-dark"
                                                    name="productId"
                                                    value={item.productId}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    <option value="">
                                                        Select Product
                                                    </option>
                                                    {products.data.map(
                                                        (prod, idx) => (
                                                            <option
                                                                key={idx}
                                                                value={prod.id}
                                                            >
                                                                {prod.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="unit"
                                                    list="units"
                                                    className="form-control form-control-sm"
                                                    value={item.unit}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                                <datalist id="units">
                                                    {units.map(
                                                        (item, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    item.name
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </datalist>
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    className="form-control form-control-sm"
                                                    value={item.quantity || ""}
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
                                                    value={item.price || ""}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control form-control-sm"
                                                    disabled
                                                    value={
                                                        (
                                                            item.quantity *
                                                            item.price
                                                        ).toFixed(2) || 0
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
                                    {errors.products && (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-center text-danger"
                                            >
                                                {errors.products}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <button
                            className="btn btn-sm btn-primary mt-3"
                            onClick={addRow}
                        >
                            Add Row
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-end align-items-center">
                        <div className="col-md-5">
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Net Total:
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                disabled
                                                value={
                                                    (data.netTotal =
                                                        totals.netTotal)
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "netTotal",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <label className="col-sm-5 col-form-label">
                                            Discount (%):
                                        </label>
                                        <div className="col-sm-7">
                                            <input
                                                type="number"
                                                className="form-control form-control-sm"
                                                value={data.discount}
                                                onChange={(e) =>
                                                    setData(
                                                        "discount",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.discount && (
                                                <p className="text-danger">
                                                    {errors.discount}
                                                </p>
                                            )}
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
                                            {errors.paidAmount && (
                                                <p className="text-danger">
                                                    {errors.paidAmount}
                                                </p>
                                            )}
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
                                                    (data.grandTotal =
                                                        totals.grandTotal)
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "grandTotal",
                                                        e.target.value
                                                    )
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
                                                    (data.dueAmount =
                                                        totals.dueAmount)
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        "dueAmount",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="btn w-100 btn-primary mt-4"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Update Purchase Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    );
};

export default EditPurchase;
