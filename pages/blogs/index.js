import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import React, { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import {
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,
    LineShareButton,
    LineIcon,
    EmailShareButton,
    EmailIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    PinterestShareCount,
    TelegramShareButton,
    TelegramIcon,
} from "react-share";

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {

    const shareUrl = `${DOMAIN}/blogs`;

    const head = () => (
        <Head>
            <script data-ad-client="ca-pub-3283607139562325" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <title>{APP_NAME} | Programming</title>
            <meta
                name="description"
                content="Programming and tutorials on react node next angular vue php laravel ionic and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Programming and tutorials on react node next angular vue php laravel ionic and web developoment "
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <div className="d-grid">
                    <button onClick={loadMore} className="btn btn-lg btn-outline-success fs-1 fw-bold">
                        Load more
                    </button>
                </div>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => (
            <div className="col">
                <Card key={i} blog={blog} />
            </div>
        ));
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <>
                <Link href={`/categories/${c.slug}`} key={i}>
                    <a className="btn btn-sm btn-secondary mt-1">{c.name}</a>
                </Link>{' '}
            </>
        ));
    };

    const showAllTags = () => {
        return tags.map((t, i) => (
            <>
                <Link href={`/tags/${t.slug}`} key={i}>
                    <a className="btn btn-sm btn-outline-secondary mt-1">{t.name}</a>
                </Link> {' '}
            </>
        ));
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="row row-cols-1 row-cols-md-4 g-2">
                                {showAllBlogs()}
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-2 pt-2">
                                {showLoadedBlogs()}
                            </div>
                            <div className="text-center pt-3 pb-5">{loadMoreButton()}</div>
                        </div>
                        <div className="col-md-2">
                            <div className="pb-1">
                                {showAllCategories()}
                                <hr />
                                {showAllTags()}
                            </div>
                            <hr />
                            <FacebookShareButton url={shareUrl} >
                                <FacebookIcon size={40} round />
                            </FacebookShareButton>
                            <FacebookShareCount url={shareUrl}>
                                {shareCount => <span>{shareCount}</span>}
                            </FacebookShareCount>
                            <LineShareButton url={shareUrl}>
                                <LineIcon size={40} round />
                            </LineShareButton>
                            <EmailShareButton url={shareUrl}>
                                <EmailIcon size={40} round />
                            </EmailShareButton>
                            <FacebookMessengerShareButton url={shareUrl} appId={`${FB_APP_ID}`}  >
                                <FacebookMessengerIcon size={40} round />
                            </FacebookMessengerShareButton>
                            <TwitterShareButton url={shareUrl} title={APP_NAME} >
                                <TwitterIcon size={40} round />
                            </TwitterShareButton>
                            <TelegramShareButton url={shareUrl} title={APP_NAME}  >
                                <TelegramIcon size={40} round />
                            </TelegramShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={40} round />
                            </LinkedinShareButton>
                            <PinterestShareButton url={shareUrl} media={`${DOMAIN}/images/seoblog.jpg`} >
                                <PinterestIcon size={40} round />
                            </PinterestShareButton>
                            <PinterestShareCount url={shareUrl} className="btn btn-light" />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 12;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        // console.log('Data:', data)
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);
