import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PortfolioItem from './Portfolio/PortfolioItem';

// portfolio item type:
export type PortfolioItemType = {
    title: string,
    button: {
        link: string,
        text: string,
        color?: string
    },
    source?: string,
    description: string,
    photo: JSXPhoto | ImagePhoto | null,
    techStack?: {
        "Languages"?: string[],
        "Libraries and Frameworks"?: string[],
        "Databases"?: string[],
        "Authentication"?: string[],
        "Cloud Deployment"?: string[],
        "Marketing Automations"?: string[],
        "Payment Processing"?: string[],
        "Build Tools"?: string[],
        "Other"? : string[]
    }
}

// Define the types for the different photo options
type JSXPhoto = {
    type: "jsx",
    jsx: JSX.Element
}

type ImagePhoto = {
    type: "image",
    src: string
}

function Portfolio() {

    const portfolioData: PortfolioItemType[] = [
        {
            title: "Readefine",
            button: {
                link: "https://app.readefine.ai",
                text: "Check it out!",
                color: "#ffde00"
            },
            source: "https://github.com/anlinguist/readefine-extension",
            description: "Readefine is a browser extension that simplifies language on the internet. I designed and built all of Readefine including the client extensions (Chrome, Safari (MacOS and iOS), Firefox, and Edge), the Readefine backend, the database, and the Readefine web app.",
            photo: {
                type: "jsx",
                // @ts-ignore
                jsx: <div className="loomcontainer"><iframe className="loomiframe" title="loomiframe" src="https://www.loom.com/embed/0448ee72403441688f908341651996fe" frameBorder="0" webkitallowfullscreen={true} mozallowfullscreen="true" allowFullScreen></iframe></div>
            },
            techStack: {
                "Languages": ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Swift", "Scala"],
                "Libraries and Frameworks": ["React.js", "Node.js", "Express.js", ""],
                "Databases": ["Firestore", "NoSQL"],
                "Authentication": ["Firebase Auth"],
                "Cloud Deployment": ["Docker", "Github", "GCP", "Cloud Build", "Cloud Run"],
                "Marketing Automations": ["Klaviyo"],
                "Payment Processing": ["Stripe"],
                "Build Tools": ["NPM", "Custom Build Script"],
                "Other": ["Figma", "OpenAI"]
            }
        },
        {
            title: "MailFrames",
            button: {
                link: "https://www.mailframes.com",
                text: "Check it out!",
                color: "#587752"
            },
            description: "Mail Frames is a web app that allows users to design and build email templates using MJML and AI which generates the MJML. Users can sign in to use AI to generate the MJML as well as save templates. Using the Mail Frames chrome extension, you can directly place those emails into email clients like gmail or marketing automation platforms like Iterable or Klaviyo.",
            photo: {
                type: "image",
                src: "https://mailframes.com/mflogo.svg"
            },
            techStack: {
                "Languages": ["TypeScript", "HTML", "CSS"],
                "Libraries and Frameworks": ["React.js", "Node.js", "Express.js", "MJML", "Mantine"],
                "Databases": ["Firestore", "NoSQL"],
                "Authentication": ["Firebase Auth"],
                "Cloud Deployment": ["Docker", "Github", "GCP", "Cloud Build", "Cloud Run"],
                "Build Tools": ["NPM", "Custom Build Tools", "Rollup", "Vite", "PostCSS"],
                "Other": ["Figma", "OpenAI"]
            }
        },
        {
            title: "Bibliacra",
            button: {
                link: "https://bibliacra.com",
                text: "Check it out!",
                color: "#303030"
            },
            description: "Biblacra renders Hebrew and Greek biblical texts. There are 3 frontend Bibliacra clients: a web app, an iOS app, and an android app (android is still in testing). I used React.js for the web app and initially used React Native to build the iOS version, but ultimately rewrote it in Swift - I'm still working on an Android version. The database is a NoSQL Firestore database. Users of Bibliacra can open various texts, click on a word, and see word attributes like part of speech or gloss. In addition, users can search for words and Bibliacra queries an Algolia full text search engine and renders the results. Finally, users can sign in and opt into emails and push notifications to receive daily reading exercises.",
            photo: {
                type: "image",
                src: "https://bibliacra.com/logo512.png"
            },
            techStack: {
                "Languages": ["TypeScript", "HTML", "CSS", "Swift", "Python"],
                "Libraries and Frameworks": ["React.js", "React Native (formerly)", "Node.js", "Express.js", "Starlette (formerly)"],
                "Databases": ["Firestore", "NoSQL"],
                "Authentication": ["Firebase Auth"],
                "Cloud Deployment": ["Docker", "Github", "GCP", "Cloud Build", "Cloud Run"],
                "Marketing Automations": ["Klaviyo"]
            }
        },
        {
            title: "Numu-Know",
            button: {
                link: "https://www.numu-know.com",
                text: "Check it out!",
                color: "#788290"
            },
            description: "Numu-Know renders Paiute (a Native American language) texts. Numu-Know allows anyone to see community documents. Anyone can sign into Numu-Know and create and manage their own (public) documents. Numu-Know is designed to help Paiute learners quickly access additional information about a word by clicking on the word, which shows word attributes like part of speech or gloss. In addition, users can opt into email notifications about new stories - I used Klaviyo to build these marketing flows.",
            photo: {
                type: "image",
                src: "/numu.png"
            },
            techStack: {
                "Languages": ["JavaScript", "TypeScript", "HTML", "CSS"],
                "Libraries and Frameworks": ["React.js", "Node.js", "Express.js"],
                "Databases": ["Firestore", "NoSQL"],
                "Authentication": ["Firebase Auth"],
                "Cloud Deployment": ["Docker", "Github", "GCP", "Cloud Build", "Cloud Run"],
                "Marketing Automations": ["Klaviyo"]
            }
        },
        {
            title: "This website!",
            button: {
                link: "/",
                text: "Check it out!",
                color: "#27462C"
            },
            description: "I used React.js to build my portfolio website and I deployed this website on GCP App Engine.",
            photo: {
                type: "image",
                src: "/andrew.png"
            }
        }
    ]
    return (
        <div id="portfolio">
            <Helmet>
                <title>Andrew's Portfolio</title>
            </Helmet>
            <h2 className="section-titles">My Portfolio</h2>
            <div className='portfolio-card-container'>
            {
                portfolioData.map((item, index) => {
                    return <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }} // Delay each item slightly for a staggered effect
                  >
                    <PortfolioItem
                      source={item.source}
                      title={item.title}
                      button={item.button}
                      description={item.description}
                      photo={item.photo}
                      techStack={item.techStack}
                    />
                  </motion.div>
        
                })
            }
            </div>
        </div>
    );
}

export default Portfolio;