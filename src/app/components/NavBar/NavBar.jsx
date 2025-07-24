'use client'

import Link from 'next/link';
import './NavBar.css' ;

import { usePathname } from 'next/navigation';

const NavBar = () =>{

    const pathname = usePathname();
    
    return(
        <nav className='navbar'>
            <ul className='ul'>
                <li><Link href={'/'} className={`link ${pathname === '/' ? 'active': ''}`} >About</Link></li>
                <li><Link href={'/Resume'} className={`link ${pathname === '/Resume' ? 'active': ''}`} >Resume</Link></li>
                <li><Link href={'/Blogs'} className={`link ${pathname === '/Blog' ? 'active': ''}`} >Blog</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar ;