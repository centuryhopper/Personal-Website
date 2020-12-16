// import React from 'react';
// import ReactDom from 'react-dom';

// jshint ignore : start
"() => use strict";

const e = React.createElement;
// function App()
// {
//   return (
//     <div>
//     <h2 class="major">Contact</h2>
//     <form method="POST" action="http://127.0.0.1:8081/process_post">
//       <div class="fields">
//         <div class="field half">
//           <label for="name">Name</label>
//           <input type="text" name="name" id="name" placeholder="first and last name" required />
//         </div>
//         <div class="field half">
//           <label for="email">Email</label>
//           <input type="text" name="email" id="email" required />
//         </div>
//         <div class="field">

//           <label for="message">Message</label>

//           <textarea id="contacts-textarea" name="message" id="message" rows="4" maxlength="140" required></textarea>
//           <div id="charsremaining">140 remaining characters</div>

//         </div>
//       </div>
//       <ul class="actions">
//         <li><input type="submit" value="Send Message" class="primary" required/></li>
//         {/* <li><input type="reset" value="Reset" /></li> */}
//       </ul>
//     </form>
//     <ul class="icons">
//       <li><a href="#" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
//       <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
//     </ul>
//     </div>);
// }

// class Hello extends React.Component
// {
//   render()
//   {
//     return (
//       <div>
//         <h2 class="major">Contact</h2>
//         <form method="POST" action="http://127.0.0.1:8081/process_post">
//           <div class="fields">
//             <div class="field half">
//               <label for="name">Name</label>
//               <input type="text" name="name" id="name" placeholder="first and last name" required />
//             </div>
//             <div class="field half">
//               <label for="email">Email</label>
//               <input type="text" name="email" id="email" required />
//             </div>
//             <div class="field">

//               <label for="message">Message</label>

//               <textarea id="contacts-textarea" name="message" id="message" rows="4" maxlength="140" required></textarea>
//               <div id="charsremaining">140 remaining characters</div>

//             </div>
//           </div>
//           <ul class="actions">
//             <li><input type="submit" value="Send Message" class="primary" required /></li>
//             {/* <li><input type="reset" value="Reset" /></li> */}
//           </ul>
//         </form>
//         <ul class="icons">
//           <li><a href="#" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
//           <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
//         </ul>
//       </div>);
//   }
// }


// ReactDom.render(<App />, document.getElementById('contact'));
ReactDOM.render(e('h1', null, 'hello'), document.getElementById('contact'));



