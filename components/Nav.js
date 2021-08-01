import {useRouter} from 'next/dist/client/router';
import requests from '../utils/requests';

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-scroll text-2xl sm:space-x-20 whitespace-nowrap sm:px-10 scrollbar-hide">
        {Object.entries(requests).map(([key, {title, url}]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="transition duration-100 transform cursor-pointer last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
