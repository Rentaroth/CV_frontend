import { useEffect, useState } from 'react';
import { useThisContext } from '../Context';
import { useQuery } from '../db/useQuery';

function Home() {
  const { newColors } = useThisContext();
  const [content, setContent] = useState('');
  const getData = useQuery;

  useEffect(() => {
    getData({
      method: 'get',
      uri: 'personalInfo',
    }).then(result => {
      setContent(result.data[0]);
    })
  }, [])

  return (
    <section
      className={
        newColors +
        ' w-full md:w-[80vw] h-[90vh] pl-[10vw] md:pl-5 fixed top-[10vh] md:left-[20vw] z-0 flex items-center justify-center duration-500'
      }
    >
      <div className="w-[70vw] md:w-[40vw] flex flex-col">
        <h1 className="text-masive font-bold">Hello,</h1>
        <p className="text-md font-bold">{`I want you to know a bit more about me: `}</p>
        <p className="text-md">
          {content.about}
        </p>
        <button></button>
      </div>
    </section>
  );
}

export { Home };
