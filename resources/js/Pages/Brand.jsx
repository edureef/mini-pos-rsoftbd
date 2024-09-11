import { Link } from "@inertiajs/react";
import Layout from "./components/Layout";
import BrandModal from "./components/modals/BrandModal";
import DeleteModal from "./components/modals/DeleteModal";

const Brand = () => {
    const handleDeleteBtn = () => {
        console.log("true");
    }

    return <>
        <Layout>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Brand Page</h4>
                        <BrandModal />
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive text-center">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Brand Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>Pran</td>
                                    <td>
                                        <BrandModal edit={'1'} />
                                        <DeleteModal handleDeleteBtn={handleDeleteBtn} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    </>
}

export default Brand;