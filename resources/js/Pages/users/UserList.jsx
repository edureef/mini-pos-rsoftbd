import { Head, Link, router } from "@inertiajs/react";
import Layout from "../components/Layout";
import DeleteModal from "../components/modals/DeleteModal";
import { useState } from "react";

const UserList = ({ users }) => {
    const [userData, setUserData] = useState({});

    const openDeleteModal = (user) => {
        setUserData(user);
    };

    const handleDeleteBtn = () => {
        router.delete(`users/${userData.id}`);
    };

    return (
        <>
            <Head title="Customer" />
            <Layout>
                <div className="card shadow-sm mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Users Page</h4>
                            <Link
                                className="btn btn-sm btn-primary"
                                href="users/create"
                            >
                                Add User
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="table-responsive text-center">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>Phone Number</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user, index) => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>0{user.phone_number}</td>
                                                <td>{user.role}</td>
                                                <td>
                                                    <Link
                                                        type="button"
                                                        className="btn btn-sm btn-success"
                                                        href={`/users/${user.id}/edit`}
                                                    >
                                                        <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                user
                                                            )
                                                        }
                                                        dataName={userData.name}
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
                                        {users.links.map((link, index) => (
                                            <li
                                                key={index}
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

export default UserList;
