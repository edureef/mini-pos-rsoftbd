import { useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export const UnitModal = ({ isEdit, unitData, openEditModal }) => {
    const closeRef = useRef(null);
    const { data, setData, post, put, errors, processing, reset } = useForm({
        name: unitData?.name || "",
    });

    useEffect(() => {
        if (unitData) {
            setData({ name: unitData.name });
        }
    }, [unitData]);

    const handleaddUnit = (e) => {
        e.preventDefault();
        post("/unit", {
            onSuccess: () => {
                reset();
                closeRef.current.click();
            },
        });
    };

    const handleUpdateUnit = (e) => {
        e.preventDefault();
        put(`/unit/${unitData.id}`, {
            onSuccess: () => {
                reset();
                closeRef.current.click();
            },
        });
    };

    return (
        <>
            {isEdit ? (
                <button
                    ref={closeRef}
                    onClick={openEditModal}
                    type="button"
                    className="btn btn-sm btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#updateUnit"
                >
                    <i className="fa fa-edit"></i>
                </button>
            ) : (
                <button
                    ref={closeRef}
                    type="button"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addUnit"
                >
                    Add Unit
                </button>
            )}

            <div
                className="modal fade"
                id={isEdit ? "updateUnit" : "addUnit"}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {isEdit ? "Update" : "Create"} Unit
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form
                            onSubmit={isEdit ? handleUpdateUnit : handleaddUnit}
                            method="POST"
                        >
                            <div className="modal-body">
                                <div className="input-group input-group-sm mb-3">
                                    <span className="input-group-text">
                                        Unit Name
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
