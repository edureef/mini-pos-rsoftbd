import { Link } from "@inertiajs/react";
import Layout from "./components/Layout";
import BrandModal from "./components/modals/BrandModal";
import DeleteModal from "./components/modals/DeleteModal";

const Brand = ({ brands }) => {

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
                                {
                                    brands.data.map((brand, index) => (
                                        <tr key={brand.id}>
                                            <td>{index + 1}</td>
                                            <td>{brand.name}</td>
                                            <td>
                                                <BrandModal edit={'1'} />
                                                <DeleteModal handleDeleteBtn={handleDeleteBtn} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="py-4">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {brands.links.map(link => (
                                        <li key={link.label} className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}>
                                            {link.url ? (
                                                <Link
                                                    className="page-link"
                                                    href={link.url}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span
                                                    className="page-link"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>



                    </div>
                </div>
            </div>
        </Layout>
    </>
}

export default Brand;