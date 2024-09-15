import React, { useRef } from "react";

export const CategoryModal = ({ isEdit }) => {
    const closeRef = useRef(null);

    const handleAddCetagory = () => {
        closeRef.current.click();
    };

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
                        <div className="modal-body">
                            <div className="input-group input-group-sm">
                                <span className="input-group-text">
                                    Category Name
                                </span>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                />
                            </div>
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
                                type="button"
                                className="btn btn-sm btn-primary"
                                onClick={handleAddCetagory}
                            >
                                {isEdit ? "Update" : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
