import { useForm } from '@inertiajs/react';
import { useRef, useEffect } from 'react';

const BrandModal = ({ isEdit, editData, openEditModal }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: editData?.name || ''
    });

    const modalRef = useRef(null); // Ref for modal

    useEffect(() => {
        if (isEdit && editData) {
            setData({ name: editData.name });
        }
    }, [isEdit, editData]);

    const handleAddBrand = (e) => {
        e.preventDefault();
        post('brand', {
            onSuccess: () => {
                reset();
                closeModal(); // Close the modal when form submission is successful
            },
        });
    };

    const handleUpdateBrand = (e) => {
        e.preventDefault();
        put(`brand/${editData.id}`, {
            onSuccess: () => {
                reset();
                closeModal(); // Close the modal after successful update
            },
        });
    };

    const closeModal = () => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const modalInstance = bootstrap.Modal.getInstance(modalElement); // Get the modal instance
            if (modalInstance) {
                modalInstance.hide(); // Close the modal programmatically
            }
        }
    };

    return (
        <>
            {isEdit ? (
                <button
                    onClick={openEditModal}
                    type="button"
                    className="btn btn-sm btn-success btn-rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropUpdate"
                >
                    <i className="fa fa-edit"></i>
                </button>
            ) : (
                <button
                    type="button"
                    className="btn btn-sm btn-primary btn-rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropCreate"
                >
                    Add Brand
                </button>
            )}

            <div
                className="modal fade"
                id={isEdit ? 'staticBackdropUpdate' : 'staticBackdropCreate'}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
                ref={modalRef}
            >
                <div className="modal-dialog">
                    <div className="modal-content text-start">
                        <div className="modal-header">
                            <h6 className="modal-title" id="staticBackdropLabel">
                                {isEdit ? 'Update' : 'Create'} Brand
                            </h6>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form
                            onSubmit={isEdit ? handleUpdateBrand : handleAddBrand}
                            method="POST"
                        >
                            <div className="modal-body">
                                <div className="input-group input-group-sm mb-3">
                                    <label
                                        htmlFor="brand-name"
                                        className="input-group-text"
                                    >
                                        Brand Name:
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors.name && 'is-invalid'
                                            }`}
                                        id="brand-name"
                                        value={data.name || ''}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
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
                                    {isEdit ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandModal;
