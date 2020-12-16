import React from 'react';
import ReactDom from 'react-dom';

function App()
{
  return (
    <div>
    <h2 className="major">Contact</h2>
    <form method="POST" action="http://127.0.0.1:8081/process_post">
      <div className="fields">
        <div className="field half">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="first and last name" required />
        </div>
        <div className="field half">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="field">

          <label for="message">Message</label>

          <textarea id="contacts-textarea" name="message" id="message" rows="4" maxlength="140" required></textarea>
          <div id="charsremaining">140 remaining characters</div>

        </div>
      </div>
      <ul className="actions">
        <li><input type="submit" value="Send Message" className="primary" required/></li>
        // // <li><input type="reset" value="Reset" /></li>
      </ul>
    </form>
    <ul className="icons">
      <li><a href="#" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
      <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
    </ul>
    </div>);
}


ReactDom.render(<App />, document.getElementById('contact'));



