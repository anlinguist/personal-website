import { Helmet } from 'react-helmet';

function Portfolio() {
    return (
        <div id="portfolio">
            <Helmet>
                <title>Andrew's Portfolio</title>
            </Helmet>
            <h2 className="section-titles">My Portfolio</h2>
            <ul>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.getreadefine.com">Readefine</a></li>
                <p>Readefine is a browser extension that simplifies language on the internet. I designed and built all aspects of Readefine including the client extensions (Chrome, Safari (MacOS and iOS), Firefox, and Edge), the Readefine backend, the database, <a rel="noreferrer" className="linkonpage" href="https://www.getreadefine.com" target="_blank">the Readefine landing page</a>, <a rel="noreferrer" className="linkonpage" href="https://app.getreadefine.com" target="_blank">the Readefine web app client</a>, and <a rel="noreferrer" className="linkonpage" href="https://blog.getreadefine.com" target="_blank">the Readefine blog</a>.</p>
                <p>Check out a demo here:</p>
                <div className="loomcontainer"><iframe className="loomiframe" title="loomiframe" src="https://www.loom.com/embed/34d1dfae9b204a598071443206785c63" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
                <p>I used a number of technologies to build Readefine including JavaScript, HTML, CSS, PHP, Kotlin, Python, <a rel="noreferrer" className="linkonpage" href="https://github.com/tiangolo/uvicorn-gunicorn-starlette-docker" target="_blank">Uvicorn-Gunicorn-Starlette</a>, Docker, Firestore (NoSQL database), and GCP.</p>
                <p></p>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://chrome.google.com/webstore/detail/wikid-wikify-the-internet/acbiokikhgemaellopndaifeinccnchn?hl=en-US">Wikid</a></li>
                <p>Wikid is a browser extension that adds Wikipedia links to whatever website you're on when you click the Wikid extension icon. I created the Wikid extension and Node.js web server and created a private deployment of <a rel="noreferrer" className="linkonpage" href="https://github.com/kermitt2/entity-fishing" target="_blank">Entity Fishing</a> to find entities and associate those entities with Wikipedia articles.</p>
                <p>Check out a demo here:</p>
                <div className="loomcontainer"><iframe className="loomiframe" title="loomiframe" src="https://www.loom.com/embed/ece0bb677e424a3a9eed9f6136627e4e" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
                <p>I used a number of technologies to build Wikid including JavaScript (vanilla & Node), HTML, CSS, Python, <a rel="noreferrer" className="linkonpage" href="https://github.com/kermitt2/entity-fishing" target="_blank">Entity Fishing</a>, Docker, Digital Ocean, and GCP.</p>
                <p></p>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.numu-know.com">Numu-Know</a></li>
                <p>Numu-Know is a web app that renders Paiute (a Native American language) texts. Numu-Know allows anyone to see community documents. Anyone can sign into Numu-Know and create and manage their own (public) documents. Numu-Know is designed to help Paiute learners quickly access additional information about a word by clicking on the word, which shows word attributes like part of speech or gloss. </p>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://biblia-sacra-2q23fvkbda-uc.a.run.app/">Biblia Sacra</a></li>
                <p>Bibla Sacra is a web app that renders Hebrew and Greek biblical texts. Biblia Sacra has a similar frontend as Numu-Know, but a completely different app architecture. The frontend and Python backend (Numu-Know has a Node.js backend) are rolled into a single dockerized service which is hosted on GCP. The database is a NoSQL Firestore database. Users of Biblia Sacra can open various texts, click on a word, and see word attributes like part of speech or gloss. In addition, users can search for words and Biblia Sacra queries an Algolia full text search engine and renders the results.</p>
                <p>To build and deploy Biblia Sacra, I used JavaScript, HTML, CSS, Python, <a rel="noreferrer" className="linkonpage" href="https://github.com/tiangolo/uvicorn-gunicorn-starlette-docker" target="_blank">Uvicorn-Gunicorn-Starlette</a>, Docker, Firestore (NoSQL database), Algolia, and GCP. Source is available on request.</p>
                <li>This website!</li>
                <p>I used React.js to build my portfolio website. This also involved creating a headless wordpress system (which relies on the API of a wordpress instance that I have hosted on a separate subdomain). Last, I deployed this website on GCP App Engine.</p>
            </ul>
        </div>
    );
}

export default Portfolio;