import { Helmet } from 'react-helmet';

function AboutMe() {
    return (
        <div id="about">
            <Helmet>
                <title>About Andrew</title>
            </Helmet>
            <h2 id="about-me" className="section-titles">About Me</h2>
            <p>Hi! I'm Andrew. As a Senior Demo Solutions Engineer at Iterable, I build software that our sellers use to help our customers intuitively understand how Iterable can help them reach their customers. In previous roles, I have worked as a Computational Linguist at <a className="linkonpage" target="_blank" rel="noreferrer" href="https://www.expert.ai">Expert.ai</a> and <a className="linkonpage" target="_blank" rel="noreferrer" href="https://www.datapeople.io">Datapeople</a>. I'm also the founder and builder of <a className="linkonpage" target="_blank" rel="noreferrer" href="https://app.readefine.ai">Readefine</a>.</p>
            <p>I love using my knowledge of Linguistics and NLP libraries to process and make sense of language data and I'm skilled in various NLP resources including spaCy, HuggingFace, CoreNLP, and transformer language models and have used these resources to perform a variety of NLP tasks like POS detection, constituency and dependency parsing, summarization, coreference resolution, and lexical and syntactic simplification.</p>
            <p>Beyond working with NLP, I enjoy both frontend and backend development. I've built iOS and Android apps, browser extensions (Chrome, Safari, Firefox, and Edge), websites, wordpress themes, and APIs. I'm competent in a number of technologies including:</p>
            <ul>
                <li>JavaScript, HTML, CSS</li>
                <li>React</li>
                <li>Swift</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Docker</li>
                <li>Firebase</li>
                <li>Git</li>
                <li>GCP</li>
                <li>Azure</li>
                <li>AWS</li>
            </ul>
            <p>In my spare time, I like to learn new technologies, work on personal side projects, play videogames, travel, and workout. I did a Half Ironman last year and I'm currently training for a full Ironman.</p>
        </div>
    );
}

export default AboutMe;