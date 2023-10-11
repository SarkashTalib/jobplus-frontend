import React, { useState } from 'react';
import '../styles/form.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
      username: email,

    };

    try {
      // make a post request to the backend endpoint
      const res = await axios.post('http://localhost:1337/api/auth/local/register', data);
      // reset out response
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (err) {
      console.log(err.response.data);
    }

  }

  return (
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input
          className="form__field"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input
          className="form__field"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input
          className="form__field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Choose password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to='/login'>Login</Link>
      </footer>
    </form>
  );
}









// the ready version


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/form.scss';
// import { Link } from 'react-router-dom';
// import Alert from '../alert/Alert';

// export default function register() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState({});

//   // send data to backend
//   const registerUser = async (person) => {
//     try {
//       const res = await axios.post(
//         'http://localhost:1337/api/auth/local/register',
//         person
//       );
//       console.log(res);
//     } catch (err) {
//       setError(err.response.data.error);
//       // console.log(err.response.data.error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = {
//       firstName,
//       lastName,
//       username: email,
//       email,
//       password,
//       confirmPassword,
//     };

//     registerUser(user);
//   };

//   return (
//     <>
//       <Alert type='error' error={error} />
//       <form className="form form--page" onSubmit={handleSubmit}>
//         <div className="form__group form__group--page">
//           <label className="form__label">First name</label>
//           <input
//             className="form__field"
//             type="text"
//             placeholder="First name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>

//         <div className="form__group form__group--page">
//           <label className="form__label">Last name</label>
//           <input
//             className="form__field"
//             type="text"
//             placeholder="Last name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>

//         <div className="form__group form__group--page">
//           <label className="form__label">Email</label>
//           <input
//             className="form__field"
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="form__group form__group--page">
//           <label className="form__label">Choose password</label>
//           <input
//             className="form__field"
//             type="password"
//             placeholder="Choose password"
//             value={password}
//             autoComplete="off"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="form__group form__group--page">
//           <label className="form__label">Confirm Password</label>
//           <input
//             className="form__field"
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             autoComplete="off"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         <div className="form__group form__group--page">
//           <input className="form__btn" type="submit" value="Register" />
//         </div>

//         <footer>
//           Already have an account? <Link to="/login">Login</Link>
//         </footer>
//       </form>
//     </>
//   );
// }
