import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

const BrandModal = ({ edit }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
    });

    const modalRef = useRef(null); // Ref for modal

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
            <button
                type="button"
                className={`btn btn-sm btn-${edit ? 'success' : 'primary'} btn-rounded`}
                data-bs-toggle="modal"
                data-bs-target={edit ? '#staticBackdropUpdate' : '#staticBackdropCreate'}
            >
                {edit ? <i className="fa fa-edit"></i> : 'Add Brand'}
            </button>

            <div
                className="modal fade"
                id={edit ? 'staticBackdropUpdate' : 'staticBackdropCreate'}
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
                            <h6 className="modal-title" id="staticBackdropLabel">{edit ? 'Update' : 'Create'} Brand</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={edit ? handleUpdateBrand : handleAddBrand} method="POST">
                            <div className="modal-body">
                                <div className="input-group input-group-sm mb-3">
                                    <label htmlFor="brand-name" className="input-group-text">Brand Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${errors.name && 'is-invalid'}`}
                                        id="brand-name"
                                        value={data.name || ''}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                </div>
                                {errors.name && <p className="text-danger">{errors.name}</p>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    disabled={processing}
                                >
                                    {edit ? 'Update' : 'Save'}
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
