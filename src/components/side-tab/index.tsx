"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { ReactNode } from 'react';

interface SideTabProps {
    icon: ReactNode;
    href: string;
    link: string;
}

const SideTab = ({ icon, href, link }: SideTabProps) => {
    const pathname = usePathname();

    return (
        <li className={pathname === `/${href}` ? "flex items-center space-x-2 text-blue-600 bg-blue-100 rounded p-2" : "flex items-center space-x-2 text-gray-400 hover:text-blue-600"}>
            {icon}
            <Link href={`/${href}`}>{link}</Link>
        </li>
    )
}

export default SideTab;