import { Head, Link } from "@inertiajs/react";
import Layout from "./components/Layout";
import { CategoryModal } from "./components/modals/CategoryModal";
import DeleteModal from "./components/modals/DeleteModal";

const Category = () => {
    return (
        <>
            <Head title="Category" />
            <Layout>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Category Page</h4>
                            <CategoryModal />
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
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12</td>
                                        <td>test</td>
                                        <td>
                                            <CategoryModal isEdit={1} />
                                            <DeleteModal />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="py-4">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        {/* {brands.links.map(link => (
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
                                    ))} */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Category;
