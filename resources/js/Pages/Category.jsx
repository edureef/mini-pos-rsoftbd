import { Head, Link } from "@inertiajs/react";
import Layout from "./components/Layout";

const Category = () => {
    return <>
        <Head title="Category" />
        <Layout>
            <div className="card">
                <div className="card-body">
                    <h3>Category Page</h3>
                </div>
            </div>
        </Layout>
    </>
}

export default Category;