const CreateCustomerModal = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button
                type="button"
                class="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                <i class="fa fa-plus-square"></i>
            </button>

            {/* <!-- Modal --> */}
            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Create New Customer
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="" class="form-label">
                                    Customer Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Enter Customer Name"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">
                                    Customer Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control form-control-sm"
                                    placeholder="Enter Customer Email"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">
                                    Customer Phone Number
                                </label>
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Enter Customer Phone Number"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">
                                    Customer Address
                                </label>
                                <input
                                    type="text"
                                    class="form-control form-control-sm"
                                    placeholder="Enter Customer Address"
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-sm btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                class="btn btn-sm btn-primary"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCustomerModal;
