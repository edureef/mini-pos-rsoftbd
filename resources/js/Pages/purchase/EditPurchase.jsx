import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";
import { useRef } from "react";

const EditPurchase = ({ suppliers, products, purchase }) => {
    const productSearchRef = useRef("");
    const { data, setData, put, processing, errors } = useForm({
        supplier_id: purchase.supplier_id,
        products: [...purchase.products],
        netTotal: "",
        discount: purchase.discount,
        paidAmount: purchase.paidAmount,
        dueAmount: "",
        grandTotal: "",
    });

    const addRow = (e) => {
        const productId = e.target.value;
        if (!productId) return;

        const product = products.data.find((p) => p.id == productId);
        if (product) {
            setData("products", [
                ...data.products,
                {
                    productId: product.id,
                    productName: product.name,
                    unit: product.unit,
                    quantity: 1,
                    price: product.cost_price,
                },
            ]);
            productSearchRef.current.value = "";
        }
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
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row align-items-center">
                                    <label className="col-md-5">
                                        Supplier:
                                    </label>
                                    <div className="col-md-7">
                                        <select
                                            className="form-select form-select-sm text-dark"
                                            value={data.supplier_id}
                                            onChange={(e) =>
                                                setData(
                                                    "supplier_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select Supplier
                                            </option>
                                            {suppliers.data.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                >
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
                            <div className="col-md-4">
                                <div className="row align-items-center">
                                    <label className="col-sm-6">
                                        Add Product:
                                    </label>
                                    <div className="col-sm-6">
                                        <input
                                            className="form-select form-select-sm text-dark"
                                            list="fruit-suggestions"
                                            ref={productSearchRef}
                                            onChange={addRow}
                                            // placeholder="Type or select..."
                                        />
                                        {errors.products && (
                                            <div className="text-danger">
                                                {errors.products}
                                            </div>
                                        )}
                                        <datalist id="fruit-suggestions">
                                            {products.data.map((item) => (
                                                <option
                                                    key={item.id}
                                                    value={item.id}
                                                    onChange={addRow}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Unit</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.products.map((item, index) => (
                                        <tr key={item.id || index}>
                                            <td>
                                                <span
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    {item.productName}
                                                </span>
                                            </td>
                                            <td style={{ width: "200px" }}>
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={item.quantity}
                                                    className="form-control form-control-sm"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </td>
                                            <td>
                                                <span
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    {item.unit}
                                                </span>
                                            </td>
                                            <td>
                                                <span
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    {item.price}
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    {Number(
                                                        item.quantity || 0
                                                    ) * Number(item.price || 0)}
                                                </span>
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
                                    {data.products.length < 1 && (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-center text-danger"
                                            >
                                                Please add at least one product
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
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
