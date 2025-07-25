'use client'

import './MobileNav.css'

import { usePathname } from 'next/navigation';

import Link from 'next/link';

const MobileNav = () => {

    const pathname = usePathname();
    
    return(
        <section className="mobile-nav">
            <ul className='ul'>
                <li><Link href={'/'} className={`link mobile-link ${pathname === '/' ? 'active': ''}`} >About</Link></li>
                <li><Link href={'/Resume'} className={`link mobile-link ${pathname === '/Resume' ? 'active': ''}`} >Resume</Link></li>
                <li><Link href={'/Blogs'} className={`link mobile-link ${pathname === '/Blogs' ? 'active': ''}`} >Blog</Link></li>
            </ul>
        </section>
    );
}


export default MobileNav ;