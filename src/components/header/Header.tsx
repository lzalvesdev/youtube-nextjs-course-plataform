'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";

export const Header = () => {
  const [title, setTitle] = useState('EducaNet');
  const [drawer, setDrawer] = useState(false);

  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  return (
    <>
      <header>
        <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6">
          <button className="sm:hidden" onClick={() => setDrawer(true)}>
            <MdMenu size={24} />
          </button>

          <ul
            tabIndex={drawer ? -1 : undefined}
            className="flex gap-4 items-center">
            <li className="my-2">
              <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold">
                EDUCANET
              </Link>
            </li>

            <li className="hidden sm:block">
              <Link href='/' data-active={currentPath === '/'} className='data-[active=true]:underline'>
                Página inicial
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link href='/cursos' data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>
                Cursos
              </Link>
            </li>
          </ul>

          {/* Burguer menu */}

          <div
            data-open={drawer}
            tabIndex={drawer ? 0 : -1}
            onClick={() => setDrawer(false)}
            className="fixed top-0 left-0 bottom-0 bg-gradient-to-r from-background right-0 transition-transform duration-360 ease-in-out data-[open=false]:-translate-x-full"
          >
            <ul className="flex gap-4 flex-col p-4 w-60 h-full bg-background" onClick={(e) => e.stopPropagation()}>
              <li className="border-b border-white">
                <Link href='/' className=''>
                  Página inicial
                </Link>
              </li>

              <li className="">
                <Link href='/cursos' data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>
                  Cursos
                </Link>
              </li>
            </ul>
          </div>

          <h1 className="sm:hidden">
            {title}
          </h1>
        </nav>

      </header>
    </>
  );
};