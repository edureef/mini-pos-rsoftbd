import { Head } from "@inertiajs/react";
import Layout from "./components/Layout";

function Dashbord() {
    return (
        <>
        <Head title="Dashbord"/>
            <Layout>
                <div className="card">
                    <div className="card-body">
                        <h3>Dashbord</h3>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Dashbord