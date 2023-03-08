import { useEffect } from "react";
import { useThisContext } from ".";

function useStorage() {
  const { renovateSession } = useThisContext();
  
  useEffect(() => {
    let savedSession = localStorage.getItem('session');
    if(savedSession) {
      renovateSession(savedSession)
    }    
  })
  
  function save({name, value}) {
    return localStorage.setItem(name, value);
  }
  function replace({ name, value }) {
    localStorage.removeItem(name);
    return localStorage.setItem(name, value);
  }

  return {
    save,
    replace,
  };
}

export { useStorage };