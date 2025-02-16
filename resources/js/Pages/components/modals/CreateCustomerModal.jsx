import { useForm } from "@inertiajs/react";
import { useRef } from "react";

const CreateCustomerModal = () => {
    const closeRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        createCustomerModal: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/customer", {
            onSuccess: () => {
                reset();
                closeRef.current.click();
            },
        });
    };

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button
                type="button"
                className="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                <i className="fa fa-plus-square"></i>
            </button>

            {/* <!-- Modal --> */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                            >
                                Create New Customer
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="hidden"
                                onChange={(e) =>
                                    setData(
                                        "createCustomerModal",
                                        e.target.value
                                    )
                                }
                                value={
                                    (data.createCustomerModal =
                                        "isCreateCustomerModal")
                                }
                            />
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Customer Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Enter Customer Name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    {errors.name && (
                                        <div className="text-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Customer Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        placeholder="Enter Customer Email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <div className="text-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Customer Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Enter Customer Phone Number"
                                        value={data.phone_number}
                                        onChange={(e) =>
                                            setData(
                                                "phone_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    {errors.phone_number && (
                                        <div className="text-danger">
                                            {errors.phone_number}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Customer Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Enter Customer Address"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />
                                    {errors.address && (
                                        <div className="text-danger">
                                            {errors.address}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    ref={closeRef}
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
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCustomerModal;
