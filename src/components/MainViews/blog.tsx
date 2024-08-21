import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PostCard from '../Blog/post_card';
import PWLoader from '../Random/loader.tsx';

function Blog({ blogPosts }: any) {
    const [loaded, setLoaded] = useState('');

    useEffect(() => {
        if (blogPosts) {
            setLoaded('loaded-blogs');
        }
    }, [blogPosts]);

    return (
        <div id="blog">
            <Helmet>
                <title>Andrew's Blog</title>
            </Helmet>
            <h2 id="blog-title" className="section-titles">Blog</h2>
            <PWLoader loaded={loaded} />
            <div id='blog-posts-container' className={loaded}>
                {
                    blogPosts &&
                    blogPosts.length > 0 &&
                    blogPosts.map((post: any) => (
                        <PostCard title={post.title.rendered} img={post.jetpack_featured_media_url} slug={post.slug} key={post.id.toString()} />
                    ))
                }
            </div>
        </div>
    );
}

export default Blog;