import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from './Icons'
import SocialLinks from './SocialLinks'

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();

    const router = useRouter();
    const CustomLink = ({ href, title, className = "" }) => {
        return (<Link href={href} className={`${className} relative group`}>
            <span className={` ${router.asPath == href ? "text-slate-950" : "text-slate-600"}`}>

                {title}
            </span>
            <span className={`h-[1px] inline-block bg-black absolute left-1/4 -bottom-0.5 group-hover:w-1/2 transition-[width] ease duration-300 ${router.asPath == href ? "w-1/2" : "w-0"}`}>
                &nbsp;
            </span>
        </Link>)
    }
    return (<>
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <Logo />
            <nav className='flex items-center justify-center'>
                <CustomLink href={"/"} title={"Home"} className='mr-2' />
                <CustomLink href={"/about"} title={"About"} className='mx-2' />
                <CustomLink href={"/experience"} title={"Experience"} className='mx-2' />
                <CustomLink href={"/projects"} title={"projects"} className='mx-2' />
                <CustomLink href={"/contact"} title={"Contact"} className='mx-2' />
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                    {mode === "dark" ?
                        <SunIcon className={"fill-dark"} /> :
                        <MoonIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
        </header>
        <div className={`absolute z-30 left-3 top-52`}>
            <SocialLinks />
        </div>
    </>
    )
}

export default Navbar