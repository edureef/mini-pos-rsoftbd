import React, { useState } from "react";
import Layout from "./components/Layout";
import DeleteModal from "./components/modals/DeleteModal";
import { Link, router } from "@inertiajs/react";
import { GroupModal } from "./components/modals/GroupModals";

const Group = ({ groups }) => {
    const [groupData, setgroupData] = useState([]);

    const handleDeleteBtn = () => {
        router.delete(`group/${groupData.id}`);
    };

    const openDeleteModal = (group) => {
        setgroupData(group);
    };

    const openEditModal = (group) => {
        setgroupData(group);
    };

    return (
        <>
            <Layout>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Group Page</h4>
                            <GroupModal />
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
                                        <th>Group Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groups.data.map((group, index) => {
                                        return (
                                            <tr key={group.id}>
                                                <td>{index + 1}</td>
                                                <td>{group.name}</td>
                                                <td>
                                                    <GroupModal
                                                        isEdit={group}
                                                        groupData={groupData}
                                                        openEditModal={() =>
                                                            openEditModal(group)
                                                        }
                                                    />
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                group
                                                            )
                                                        }
                                                        dataName={
                                                            groupData.name
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
                                        {groups.links.map((link) => (
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

export default Group;
