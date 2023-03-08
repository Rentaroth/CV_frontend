import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useThisContext } from "../Context";
import { useQuery } from "../db/useQuery";

function Menu() {
  const { newColors } = useThisContext();
  const [menuDisplay, setMenuDisplay] = useState('left-[-60vw]');
  const [content, setContent] = useState('');
  const [education, setEducation] = useState('');
  const getData = useQuery;

  const showOrHideMenu = () => {
    if(menuDisplay === 'left-[-60vw]') {
      setMenuDisplay('left-[0vw]');
    } else {
      setMenuDisplay('left-[-60vw]');
    }
  }

  useEffect(() => {
    getData({
      method: 'get',
      uri: 'personalInfo',
    }).then(result => {
      setContent(result.data[0]);
    })
    getData({
      method: 'get',
      uri: 'education',
    }).then(result => {
      setEducation(result.data[0]);
    })
  }, [])



  return(
    <section className={menuDisplay + ' ' + newColors + " fixed w-[60vw] md:w-[20vw] h-[100vh] z-30 md:left-[0vw] flex flex-col shadow-md duration-500 border-r"}>
      <button onClick={() => showOrHideMenu()} className={newColors + " absolute w-[5vw] h-[7vw] md:hidden rounded-r-full top-[calc(50%-3.5vw)] right-[-5vw] md:right-[-2vw] border"}>{'->'}</button>
      <div className="w-full h-[50%] px-3 text-center flex flex-col justify-center items-center gap-3">
        <div className="w-[80%] h-[60%] bg-slate-700">
          <img src="" alt=""></img>
        </div>
        <h3 className="text-md">{`${content.name} ${content.secondName} ${content.lastName} ${content.secondLastName}`}</h3>
        <p>{`I am a ${education.title} with enphasis in ${education.enphasis}!`}</p>
      </div>
      <div className="w-full">
        <ul className="flex flex-col text-justify pl-[5vw]">
          {menuItems.map((item) => {
            return (
              <li key={item.to} className='py-3'>
                <NavLink to={item.to} className={({ isActive }) => {
                  if(isActive) {
                    return ' bg-stone-800 opacity-70 text-white';
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
    to: '/',
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