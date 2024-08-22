import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import PWLoader from '../Random/loader.tsx';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../sanityClient.ts';

function BlogPost({ blogPosts }: any) {
    const [loaded, setLoaded] = useState('');
    const [title, setTitle] = useState<any>('');
    const [body, setBody] = useState<any>('');

    useEffect(() => {
        if (blogPosts) {
            updatePage();
        }
    }, [blogPosts]);

    const updatePage = async () => {
        let slug = window.location.pathname.replace("/blog/", "")
        let title = false;
        let blogData: any = false;
        for (const item of blogPosts) {
            if (item.slug.current === slug) {
                title = item.title
                blogData = item
                break;
            }
        }
        if (title) {
            setTitle(title);
            setLoaded('loaded-blogs');
            setBody(blogData.content)
        }
    }
    const components = {
        types: {
            code: (props: any) => {
                return (<pre data-language={props.value.language}>
                    <code>{props.value.code}</code>
                </pre>)
            },
            image: (props: any) => {
                return (<img className='blog-post-image' src={urlFor(props.value).url()} />)
            },
        },
        marks: {
            customLink: ({ children, value }: any) => {
                const { href, class: className } = value;
                return (
                    <a href={href} className={className}>
                        {children}
                    </a>
                );
            }
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
                <PortableText
                    value={body}
                    components={components}
                />
            </div>
        </div>
    );
}

export default BlogPost;