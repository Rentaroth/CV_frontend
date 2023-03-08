import axios from 'axios';
import { useState } from 'react';
import { useThisContext } from '../Context';

function Login() {
  const { newColors, negativeColors } = useThisContext();
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function logIn() {
    axios({
      method: 'post',
      url: 'http://localhost:3010/user/login',
      data: {
        data: {
          userName: userName,
          password: password,
        }
      }
    }).then(result => {
      setToken(result.data.token);
    })
  }

  return (
    <section
      className={
        newColors +
        ' w-full md:w-[80vw] h-[90vh] pl-[10vw] md:pl-5 fixed top-[10vh] md:left-[20vw] z-0 flex items-center justify-center duration-500'
      }
    >
      <form 
        className={newColors + ' flex flex-col gap-5 duration-500'}
        onSubmit={() => {logIn()}}>
        <input
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          placeholder="username"
          className={newColors + ' w-[50vw] md:w-[30vw] h-[5vh] pl-3 outline-none border rounded-lg duration-500'}
        ></input>
        <input 
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="password"
          className={newColors + ' w-[50vw] md:w-[30vw] h-[5vh] pl-3 outline-none border rounded-lg duration-500'}
        ></input>
        <button className={negativeColors + ' w-[20vw] md:w-[5vw] h-[5vw] md:h-[3vh] outline-none border rounded-lg duration-500'}>Log In</button>
      </form>
    </section>
  );
}

export { Login };
