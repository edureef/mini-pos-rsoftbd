import { Head, Link, useForm } from "@inertiajs/react";
import Layout from "../components/Layout";

const AddPurchase = ({ suppliers, products }) => {
    const { data, setData, post, processing, errors } = useForm({
        supplier_id: "",
        products: [],
        netTotal: "",
        discount: "",
        paidAmount: "",
        dueAmount: "",
        grandTotal: "",
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
            (sum, item) =>
                sum +
                (Number(item.quantity).toFixed(2) || 0) *
                    (Number(item.price).toFixed(2) || 0),
            0
        );
        const discountAmount = (Number(data.discount) / 100) * netTotal;
        const grandTotal = netTotal - discountAmount;
        const dueAmount = grandTotal - (Number(data.paidAmount) || 0);

        return {
            netTotal: netTotal.toFixed(2),
            grandTotal: grandTotal.toFixed(2),
            dueAmount: dueAmount.toFixed(2),
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/purchase");
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
                                        <tr key={item.id || index}>
                                            <td>
                                                <select
                                                    className="form-select form-select-sm text-dark"
                                                    name="productName"
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    <option value="">
                                                        Select Product
                                                    </option>
                                                    {products.data.map(
                                                        (item, index) => (
                                                            <option
                                                                key={index}
                                                                value={item.id}
                                                            >
                                                                {item.name}
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
                                                    type="number"
                                                    className="form-control form-control-sm"
                                                    disabled
                                                    value={
                                                        Number(
                                                            item.quantity || 0
                                                        ) *
                                                        Number(item.price || 0)
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
                                    {/* {data.products.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-center"
                                            >
                                                No products found
                                            </td>
                                        </tr>
                                    )} */}
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
                                                    (data.netTotal =
                                                        calculateTotals().netTotal)
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
                                            Discount:
                                        </label>
                                        <div className="col-sm-7">
                                            <div className="input-group">
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
                                                <span className="input-group-text">
                                                    %
                                                </span>
                                            </div>
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
                                                        calculateTotals().grandTotal)
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
                                                        calculateTotals().dueAmount)
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
                                    <div className="row justify-content-center mt-4">
                                        <div className="col-md-12">
                                            <button
                                                className="btn w-100 btn-primary"
                                                type="submit"
                                                disabled={processing}
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
