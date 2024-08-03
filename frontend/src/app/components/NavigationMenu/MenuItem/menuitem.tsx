import { NextPage } from "next";
import Link from "next/link";

import './menuitem.css';


interface IMenuItemProps {
    href: string;
    textToRender: string;
}

const MenuItem: NextPage<IMenuItemProps> = ({ href, textToRender }) => {
    return (
        <>
            <button className="menu-item"><Link href={href}>{textToRender}</Link></button>
        </>
    )
}

export default MenuItem;