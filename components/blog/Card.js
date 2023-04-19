import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <>
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-sm btn-secondary">{c.name}</a>
                </Link> {' '}
            </>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <>
                <Link key={i} href={`/tags/${t.slug}`}>
                    <a className="btn btn-sm btn-outline-secondary">{t.name}</a>
                </Link> {' '}
            </>
        ));

    return (
        <div className="card">
            <img
                className="img img-fluid"
                style={{ width: 'auto', objectFit: 'cover' }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
            />
            <div class="card-body">
                <h4 class="card-title text-shadow">
                    <Link href={`/blogs/${blog.slug}`}><a>{blog.title}</a></Link>
                </h4>
                <small class="text-muted">
                    Written by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.name}</a>
                    </Link>{' '} |
                    Published {moment(blog.updatedAt).fromNow()}
                </small>
                <div className="pb-2">
                    {showBlogCategories(blog)}
                    {showBlogTags(blog)}
                </div>
                <p class="card-text">
                    <div> {renderHTML(blog.excerpt)} </div>
                    <div className="text-center">
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-outline-info pt-1">Read more</a>
                        </Link>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Card;
