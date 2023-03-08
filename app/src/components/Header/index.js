import { useThisContext } from "../Context"

function Header(props) {
  const { themeState, setThemeState, newColors } = useThisContext();
  const navBarAction = (activity) => {
    if (activity === 'theme') {
      themeState === 'light' ? setThemeState('dark') : setThemeState('light');
    }
  };
  
  return (
    <section className={newColors + " w-full md:w-[80vw] h-[10vh] px-8 fixed top-0 md:left-[20vw] z-10 flex justify-between text-center items-center border-b duration-500"}>
      <h1 className="w-fit h-fit p-1 text-xl font-bold">
        Dashboard
      </h1>
      <ul className="flex gap-6">
        {stamps.map((item) => {
          return (
            <li key={item.purpose}>
              <div onClick={() => (navBarAction(item.purpose))} className="w-[30px] h-[30px] p-1 rounded-[10%] shadow-md">
                <img src={item.img} alt={item.purpose}></img>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const stamps = [
  {
    img: 'https://i.postimg.cc/bw67Ymsc/settings-icon.webp',
    purpose: 'settings',
  },
  {
    img: 'https://i.postimg.cc/JnZwJSRS/moon.png',
    purpose: 'theme',
  },
];

export { Header };
