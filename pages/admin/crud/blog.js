import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h2>Create a new blog</h2>
                    <BlogCreate />
                </div>
            </Admin>
        </Layout>
    );
};

export default Blog;
