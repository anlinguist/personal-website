import { Helmet } from 'react-helmet';

function Portfolio() {
    return (
        <div id="portfolio">
            <Helmet>
                <title>Andrew's Portfolio</title>
            </Helmet>
            <h2 className="section-titles">My Portfolio</h2>
            <ul>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.getreadefine.com">Readefine</a> <a href={"https://github.com/anlinguist/readefine-extension"} className='linkonpage' rel="noreferrer" target="_blank">(source)</a></li>
                <p>Readefine is a browser extension that simplifies language on the internet. I designed and built all of Readefine including the client extensions (Chrome, Safari (MacOS and iOS), Firefox, and Edge), the Readefine backend, the database, and <a rel="noreferrer" className="linkonpage" href="https://www.getreadefine.com" target="_blank">the Readefine landing page</a>, <a rel="noreferrer" className="linkonpage" href="https://app.getreadefine.com" target="_blank">the Readefine web app client</a>.</p>
                <p>Check out a demo here:</p>
                {/* @ts-ignore  */}
                <div className="loomcontainer"><iframe className="loomiframe" title="loomiframe" src="https://www.loom.com/embed/0448ee72403441688f908341651996fe" frameBorder="0" webkitallowfullscreen={true} mozallowfullscreen="true" allowFullScreen></iframe></div>
                <p>I used a number of technologies to build Readefine including JavaScript, HTML, CSS, React, Express, Swift, Docker, Firebase (for authentication), Firestore (NoSQL database), and GCP.</p>
                <p></p>
                
                {/* mail frames */}
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.mailframes.com">MailFrames</a></li>
                <p>Mail Frames is a web app that allows users to design and build email templates using MJML and AI which generates the MJML. Users can sign in to use AI to generate the MJML as well as save templates. Using the Mail Frames chrome extension, you can directly place those emails into email clients like gmail or marketing automation platforms like Iterable or Klaviyo.</p>
                <p>Mail Frames is built with React (typescript with Vite), Express, and Firebase. I used Firebase for authentication and Firestore for the database. I built my own node.js Express server for AI and server sided MJML to HTML conversion.</p>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.numu-know.com">Numu-Know</a></li>
                <p>Numu-Know is a web app that renders Paiute (a Native American language) texts. Numu-Know allows anyone to see community documents. Anyone can sign into Numu-Know and create and manage their own (public) documents. Numu-Know is designed to help Paiute learners quickly access additional information about a word by clicking on the word, which shows word attributes like part of speech or gloss. In addition, users can opt into email notifications about new stories - I used Klaviyo to build these marketing flows.</p>
                <li><a rel="noreferrer" className="linkonpage" target="_blank" href="https://biblia-sacra-2q23fvkbda-uc.a.run.app/">Bibliacra</a></li>
                <p>Biblacra is an app that renders Hebrew and Greek biblical texts. There are 3 frontend Bibliacra clients: a web app, an iOS app, and an android app (android is still in testing). I used React.js for the web app and intially used React Native to build the iOS version, but ultimately rewrote it in Swift - I'm still working on an Android version. The database is a NoSQL Firestore database. Users of Bibliacra can open various texts, click on a word, and see word attributes like part of speech or gloss. In addition, users can search for words and Bibliacra queries an Algolia full text search engine and renders the results. Finally, users can sign in and opt into emails and push notifications to receive daily reading exercises.</p>
                <li>This website!</li>
                <p>I used React.js to build my portfolio website and I deployed this website on GCP App Engine.</p>
            </ul>
        </div>
    );
}

export default Portfolio;