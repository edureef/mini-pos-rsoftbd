import { Head, Link, router } from "@inertiajs/react";
import Layout from "./components/Layout";
import { CategoryModal } from "./components/modals/CategoryModal";
import DeleteModal from "./components/modals/DeleteModal";
import { useState } from "react";

const Category = ({ categories }) => {
    const [categoryData, setCategoryData] = useState([]);

    const handleDeleteBtn = () => {
        router.delete(`category/${categoryData.id}`);
    };

    const openDeleteModal = (category) => {
        setCategoryData(category);
    };
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
                                    {categories.data.map((category, index) => {
                                        return (
                                            <tr key={category.id}>
                                                <td>{index + 1}</td>
                                                <td>{category.name}</td>
                                                <td>
                                                    <CategoryModal isEdit={1} />
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                category
                                                            )
                                                        }
                                                        dataName={
                                                            categoryData.name
                                                        }
                                                        handleDeleteBtn={
                                                            handleDeleteBtn
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="py-4">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        {categories.links.map((link) => (
                                            <li
                                                key={link.label}
                                                className={`page-item ${
                                                    link.active ? "active" : ""
                                                } ${
                                                    !link.url ? "disabled" : ""
                                                }`}
                                            >
                                                {link.url ? (
                                                    <Link
                                                        className="page-link"
                                                        href={link.url}
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label,
                                                        }}
                                                    />
                                                ) : (
                                                    <span
                                                        className="page-link"
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label,
                                                        }}
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
    );
};

export default Category;
