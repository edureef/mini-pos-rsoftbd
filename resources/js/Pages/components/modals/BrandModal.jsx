import { useState } from 'react';

const BrandModal = ({ edit }) => {
    const [brandName, setBrandName] = useState(edit);

    const handleAddBrand = () => {
        alert(`Create: ${brandName}`);
    };

    const handleUpdateBrand = () => {
        alert(`Update: ${brandName}`);
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

            <div className="modal fade" id={edit ? 'staticBackdropUpdate' : 'staticBackdropCreate'} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-start">
                        <div className="modal-header">
                            <h6 className="modal-title" id="staticBackdropLabel">{edit ? 'Update' : 'Create'} Brand</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group input-group-sm mb-3">
                                    <label htmlFor="brand-name" className="input-group-text">Brand Name:</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="brand-name"
                                        value={brandName || ''}
                                        onChange={(e) => setBrandName(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-sm btn-primary"
                                onClick={edit ? handleUpdateBrand : handleAddBrand}
                            >
                                {edit ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandModal;
