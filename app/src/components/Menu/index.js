import { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const [menuDisplay, setMenuDisplay] = useState('left-[-60vw] md:left-[-30vw]');

  const showOrHideMenu = () => {
    if(menuDisplay === 'left-[-60vw] md:left-[-30vw]') {
      setMenuDisplay('left-[0vw]');
    } else {
      setMenuDisplay('left-[-60vw] md:left-[-30vw]');
    }
  }

  return(
    <section className={menuDisplay + " relative w-[60vw] md:w-[30vw] h-[100vh] flex flex-col bg-neutral-300 duration-500"}>
      <button onClick={() => showOrHideMenu()} className="absolute w-[5vw] h-[7vw] md:w-[2vw] md:h-[3vw] rounded-r-full bg-stone-900 text-white top-[calc(50%-3.5vw)] right-[-5vw] md:right-[-2vw]">{'->'}</button>
      <div className="w-full h-[50%] px-3 text-center flex flex-col justify-center items-center gap-3">
        <div className="w-[80%] h-[60%] bg-slate-700">
          <img src="" alt=""></img>
        </div>
        <h3 className="text-md">Name here!</h3>
        <p>Pariatur id nostrud nostrud labore laboris incididunt qui cupidatat velit.</p>
      </div>
      <div className="w-full">
        <ul className="flex flex-col text-justify pl-[5vw]">
          {menuItems.map((item) => {
            return (
              <li key={item.to} className='py-3'>
                <NavLink to={item.to} className={({ isActive }) => {
                  if(isActive) {
                    return 'bg-black opacity-70 text-white';
                  }
                }}>{item.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const menuItems = [
  {
    to: '/home',
    text: 'Home',
  },
  {
    to: '/personalInfo',
    text: 'Personal Information',
  },
  {
    to: '/education',
    text: 'Education',
  },
  {
    to: '/experience',
    text: 'Experience',
  },
  {
    to: '/techSkills',
    text: 'Tech Skills',
  },
  {
    to: '/skills',
    text: 'Skills',
  },
  {
    to: '/Languages',
    text: 'Languages',
  },
  {
    to: '/references',
    text: 'References',
  }
]

export { Menu };