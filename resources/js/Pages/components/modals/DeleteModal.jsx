
const DeleteModal = ({ dataName, handleDeleteBtn }) => {

    return (
        <>
            <button className="btn btn-sm btn-danger ms-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-trash-o"></i></button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <i className="fa fa-warning text-danger modal-title"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>You're going to delete the "{`${dataName}`}". Are you sure?</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">No, Keep It.</button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={handleDeleteBtn}>Yes Delete!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal