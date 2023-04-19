import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h2>Update blog</h2>
                    <BlogUpdate />
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;
