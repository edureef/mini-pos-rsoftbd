import { Head, Link, router } from "@inertiajs/react";
import Layout from "./components/Layout";
import { UnitModal } from "./components/modals/UnitModals";
import DeleteModal from "./components/modals/DeleteModal";
import { useState } from "react";
const Unit = ({ units }) => {
    const [unitData, setUnitData] = useState({});

    const openDeleteModal = (unit) => {
        setUnitData(unit);
    };

    const openEditModal = (unit) => {
        setUnitData(unit);
    };

    return (
        <>
            <Head title="Unit" />
            <Layout>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Unit Page</h4>
                            <UnitModal />
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
                                        <th>Unit Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {units.data.map((unit, index) => {
                                        return (
                                            <tr key={unit.id}>
                                                <td>{index + 1}</td>
                                                <td>{unit.name}</td>
                                                <td>
                                                    <UnitModal
                                                        isEdit={true}
                                                        unitData={unitData}
                                                        openEditModal={() =>
                                                            openEditModal(unit)
                                                        }
                                                    />
                                                    <DeleteModal
                                                        openDeleteModal={() =>
                                                            openDeleteModal(
                                                                unit
                                                            )
                                                        }
                                                        dataName={unitData.name}
                                                        handleDeleteBtn={() =>
                                                            router.delete(
                                                                `unit/${unitData.id}`
                                                            )
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
                                        {units.links.map((link, index) => (
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

export default Unit;
