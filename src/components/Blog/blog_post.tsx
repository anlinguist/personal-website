import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PWLoader from '../Random/loader.tsx';

function BlogPost({blogPosts}: any) {
    const [loaded, setLoaded] = useState('');
    const [title, setTitle] = useState<any>('');
    const [body, setBody] = useState<any>('');
2
    useEffect(() => {
        if (blogPosts) {
            updatePage();
        }
    }, [blogPosts]);

    const updatePage = async () => {
        let slug = window.location.pathname.replace("/blog/", "")
        let title = false;
        let id = false;
        for (const item of blogPosts) {
            if (item.slug === slug) {
                title = item.title.rendered;
                id = item.id
                break;
            }
        }
        if (title) {
            var requestOptions: any = {
                method: 'GET',
                redirect: 'follow'
            };
            
            let bp_url = `https://blog.anlinguist.com/wp-json/wp/v2/posts/${id}`;
            let raw = await fetch(bp_url, requestOptions);
            let response = await raw.json();
            setTitle(title);
            setLoaded('loaded-blogs');
            setBody(response.content.rendered.replaceAll("https://blog.anlinguist.com/", "/blog/").replaceAll("/\"", "\""))
        }
    }

        return (
            <div id="ind_blog_post">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <PWLoader loaded={loaded} />
                <div id='blog-post-container' className={loaded}>
                    <h2 id="blog-title" className="section-titles">{title}</h2>
                    <div dangerouslySetInnerHTML={{__html: body}}></div>
                </div>
            </div>
        );
}

export default BlogPost;