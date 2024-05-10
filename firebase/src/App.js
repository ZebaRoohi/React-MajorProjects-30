// import {getDatabase, ref, set} from 'firebase/database'
import { getAuth } from 'firebase/auth';
import { app } from './firebase';
import './App.css';
import SingnUp from './components/SingnUp';
import SignIn from './components/SignIn';

// const db = getDatabase(app)

const auth = getAuth(app);

function App() {
  // const putData = () => {
  //   set(ref(db, 'users/zeba'), {
  //     id: 1,
  //     name: 'zeba zohaan',
  //     age: 23
  //   })
  // }

  // const signup = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     'zeba.roohi26@gmail.com',
  //     'Zeba@123'
  //   ).then((value) => console.log(value))
  // }

  return (
    <div className="App">
      <h1>Example of Firebase</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      {/* <button onClick={signup}>Create User</button> */}
      <div>
        {/* Add your JSX content here */}
        <p>Hello, this is your Firebase App!</p>
        <SingnUp />
        <SignIn />
      </div>
    </div>
  );
}

export default App;
