import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useStorage } from './useStorage';

const context = createContext();

const themes = {
  light: 'bg-white text-black',
  dark: 'bg-black text-white',
}

function AppProvider(props) {
  const storage = useStorage();
  const cookies = new Cookies();
  
  let theme = cookies.get('theme');
  if(!theme) {
    cookies.set('theme', 'light', { path: '/' });
    theme = cookies.get('theme');
  }
  const [themeState, setThemeState] = useState(theme);
  const [newColors, setNewColors] = useState(themes[themeState]);
  const [negativeColors, setNegativeColors] = useState('');
  const [session, setSession] = useState('');

  useEffect(() => {
    cookies.set('theme', themeState, { path: '/' });
    setNewColors(themes[themeState]);
    if(themeState === 'dark') {
      setNegativeColors(themes.light);
    } else {
      setNegativeColors(themes.dark);
    }
  }, [themeState])

  function createSession(token) {
    storage.replace({
      name: 'session',
      value: token,
    })
    setSession(token);
  }

  function renovateSession(token) {
    axios({
      method: 'post',
      url: 'http://localhost:3010/user/keep-logged',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    }).then(session => {
      createSession(session);
    })
  }

  return (
  <context.Provider value={{
    setThemeState,
    themeState,
    newColors,
    negativeColors,
    session,
    renovateSession,
    createSession,
  }}>
    {props.children}
  </context.Provider>);
}

function useThisContext() {
  const theme = useContext(context);
  return theme;
}

export { context, AppProvider, useThisContext };
