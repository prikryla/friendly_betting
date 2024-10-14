'use client'
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import './menuitem.scss';

interface IMenuItemProps {
    href: string;
    textToRender: string;
}

const MenuItem: NextPage<IMenuItemProps> = ({ href, textToRender }) => {
    const pathname = usePathname();
    return (
        <>
            <button className={`menu-item ${pathname === href ? 'active' : ''}`}><Link href={href}>{textToRender}</Link></button>
        </>
    )
}

export default MenuItem;