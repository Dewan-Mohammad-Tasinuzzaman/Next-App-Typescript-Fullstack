'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

const NavBar = () => {

    // This is used to highligh the Active Page on the NavBar!
    const currentPath = usePathname();

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                // The key needs to be a unique value and the link.href here DOES Uniquely identify each link (bec they all are supposed to have different paths/href)
                <Link 
                    key={link.href} 
                    className={classNames({
                        'text-zinc-900': link.href === currentPath, // Conditionally rendering class based on path
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true // True means this class/classes are always rendered.
                    })} 
                    href={link.href}>{link.label}
                </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar