import React from 'react';
import validator from 'validator';
import { Helmet } from 'react-helmet';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {disabledStatus: true};
    }

    componentDidMount() {
        document.getElementById("formname").addEventListener('input', this.checkvalues);
        document.getElementById("formemail").addEventListener('input', this.checkvalues);
        document.getElementById("formmsg").addEventListener('input', this.checkvalues);
        document.getElementById("submit").addEventListener("click", this.sendtheticket, false)
    }

    async sendtheticket() {
            let name = document.getElementById('formname').textContent;
            let email = document.getElementById('formemail').textContent;
            let description = document.getElementById('formmsg').textContent;
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
            },
            emailendpoint = 'https://us-central1-query-readefine.cloudfunctions.net/app/sendMail';
            await fetch(emailendpoint, postinfo)
            .then(function(response) {
              return response.text();
            }).then(function(data) {
              return data
            })
            document.getElementById('formname').textContent = ""
            document.getElementById('formemail').textContent = ""
            document.getElementById('formmsg').textContent = ""
    }

    checkvalues = () => {
        let subname = document.getElementById("formname").textContent;
        let subemail = document.getElementById("formemail").textContent;
        let subdesc = document.getElementById("formmsg").textContent;
        let validemail = this.validateEmail(subemail);
        if (subname !== "" && subemail !== "" && subdesc !== "" && validemail===true) {
            document.getElementById("submit").disabled = false;
        }
        else {
            document.getElementById("submit").disabled = true;
        }
    }

    validateEmail = (subemail) => {
        if (validator.isEmail(subemail)) {
            return true
        }
        return false
    }

    render() {
        return (
            <div id="contact">
                <Helmet>
                    <title>Contact Andrew</title>
                </Helmet>
                <h2 className="section-titles">Contact</h2>
                <p>Feel free to reach out anytime, I love taking on new side projects! Check out <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.github.com/anlinguist">my personal Github</a> or <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.linkedin.com/in/andrewnelson23">my LinkedIn profile</a> or just fill out this form:</p>
                <form id="contactform">
                    <div contentEditable="true" className="formitem" id="formname" placeholder="Name"></div>
                    <div contentEditable="true" className="formitem" id="formemail" placeholder="Email"></div>
                    <div contentEditable="true" id="formmsg" className="formitem" placeholder="Message"></div>
                </form>
                <div id="submitdiv"><button id="submit" disabled={this.state.disabledStatus}>Submit</button></div>
            </div>
        );
    }
}

export default Contact;