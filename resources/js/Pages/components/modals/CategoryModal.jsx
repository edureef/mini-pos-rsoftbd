import { useForm } from "@inertiajs/react";
import React, { useRef } from "react";

export const CategoryModal = ({ isEdit }) => {
    const closeRef = useRef(null);
    const { data, setData, post, errors, processing, reset } = useForm({
        name: "",
    });

    const handleAddCetagory = (e) => {
        e.preventDefault();
        post("/category", {
            onSuccess: () => {
                reset();
                closeRef.current.click();
            },
        });
    };

    const handleUpdateCetagory = () => {};

    return (
        <>
            {isEdit ? (
                <button
                    ref={closeRef}
                    type="button"
                    className="btn btn-sm btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#updateCetagory"
                >
                    <i className="fa fa-edit"></i>
                </button>
            ) : (
                <button
                    ref={closeRef}
                    type="button"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addCetagory"
                >
                    Add Category
                </button>
            )}

            <div
                className="modal fade"
                id={isEdit ? "updateCetagory" : "addCetagory"}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {isEdit ? "Update" : "Create"} Category
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form
                            onSubmit={
                                isEdit
                                    ? handleUpdateCetagory
                                    : handleAddCetagory
                            }
                            method="post"
                        >
                            <div className="modal-body">
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text">
                                        Category Name
                                    </span>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${
                                            errors.name && "is-invalid"
                                        }`}
                                        value={data.name || ""}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-danger">{errors.name}</p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    onClick={handleAddCetagory}
                                    disabled={processing}
                                >
                                    {isEdit ? "Update" : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
