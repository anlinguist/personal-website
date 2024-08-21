import { useState } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  async function sendtheticket() {
    let issue = {
      'name': name,
      'email': email,
      'description': description
    };

    let postinfo = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(issue)
    };
    let emailendpoint = 'https://us-central1-query-readefine.cloudfunctions.net/app/sendMail';
    let raw = await fetch(emailendpoint, postinfo);
    let response = await raw.text();
    console.log(response);
    setName("");
    setEmail("");
    setDescription("");
  }

  return (
    <div id="contact">
      <Helmet>
        <title>Contact Andrew</title>
      </Helmet>
      <h2 className="section-titles">Contact</h2>
      <p>Feel free to reach out anytime, I love taking on new side projects! Check out <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.github.com/anlinguist">my personal Github</a> or <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.linkedin.com/in/andrewnelson23">my LinkedIn profile</a> or just fill out this form:</p>
      <form id="contactform" onSubmit={(()=>{sendtheticket()})}>
        <input required value={name} onChange={(e) => setName(e.target.value)} type='text' className="formitem" id="formname" placeholder="Name" />
        <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' className="formitem" id="formemail" placeholder="Email" />
        <textarea required value={description} onChange={(e) => setDescription(e.target.value)} id="formmsg" className="formitem" placeholder="Message" ></textarea>
        <div id="submitdiv"><button id="submit" type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default Contact;