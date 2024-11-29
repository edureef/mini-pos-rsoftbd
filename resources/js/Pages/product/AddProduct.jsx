import React from "react";
import Layout from "../components/Layout";
import { Head, Link, useForm } from "@inertiajs/react";

const AddProduct = ({ brands, categorys, groups, units }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        brand_id: "",
        category_id: "",
        group_id: "",
        unit: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/product", {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <>
            <Head title="Product" />
            <Layout>
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Product Form</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="/product"
                            >
                                Back
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} method="post">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.name && "is-invalid"
                                        }`}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <p className="invalid-feedback">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Brand</label>
                                    <select
                                        className={`form-select text-dark ${
                                            errors.brand_id && "is-invalid"
                                        }`}
                                        onChange={(e) =>
                                            setData("brand_id", e.target.value)
                                        }
                                        value={data.brand_id}
                                    >
                                        <option value="">Select a brand</option>
                                        {brands.data.map((element) => (
                                            <option
                                                key={element.id}
                                                value={element.id}
                                            >
                                                {element.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.brand_id && (
                                        <p className="invalid-feedback">
                                            {errors.brand_id}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">
                                        Category
                                    </label>
                                    <select
                                        className={`form-select text-dark ${
                                            errors.category_id && "is-invalid"
                                        }`}
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                        value={data.category_id}
                                    >
                                        <option value="">
                                            Select a category
                                        </option>
                                        {categorys.data.map((element) => (
                                            <option
                                                key={element.id}
                                                value={element.id}
                                            >
                                                {element.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <p className="invalid-feedback">
                                            {errors.category_id}
                                        </p>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Group</label>
                                    <select
                                        className={`form-select text-dark ${
                                            errors.group_id && "is-invalid"
                                        }`}
                                        onChange={(e) =>
                                            setData("group_id", e.target.value)
                                        }
                                        value={data.group_id}
                                    >
                                        <option value="">Select a group</option>
                                        {groups.data.map((element) => (
                                            <option
                                                key={element.id}
                                                value={element.id}
                                            >
                                                {element.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.group_id && (
                                        <p className="invalid-feedback">
                                            {errors.group_id}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label className="form-label">Unit</label>
                                    <select
                                        className={`form-select text-dark ${
                                            errors.unit && "is-invalid"
                                        }`}
                                        value={data.unit}
                                        onChange={(e) =>
                                            setData("unit", e.target.value)
                                        }
                                    >
                                        <option value="">Select a unit</option>
                                        {units.map((unit) => {
                                            return (
                                                <option
                                                    key={unit.id}
                                                    value={unit.name}
                                                >
                                                    {unit.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.unit && (
                                        <p className="invalid-feedback">
                                            {errors.unit}
                                        </p>
                                    )}
                                </div>
                                <div className="col-6">
                                    <label className="form-label">
                                        Product Description
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.description && "is-invalid"
                                        }`}
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.description && (
                                        <p className="invalid-feedback">
                                            {errors.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="text-end">
                                <button
                                    className="btn btn-sm btn-primary"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default AddProduct;
