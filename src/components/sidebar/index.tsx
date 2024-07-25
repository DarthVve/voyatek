"use client";

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { PiBellSimpleLight, PiMoneyDuotone, PiUsers } from "react-icons/pi";
import { LuTag } from "react-icons/lu";
import { CgCloud } from "react-icons/cg";

import SideTab from '../side-tab';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-64 h-full bg-white shadow-md relative flex flex-col justify-between gap-36">
            <div className="p-4">
                <h2 className="text-sm font-semibold">Settings</h2>
                <ul className="mt-4 space-y-2 d flex flex-col gap-6 pl-2">
                    <SideTab icon={<AiOutlineUser size={25} color={pathname === '/accounts' ? '#0D6EFD' : '#94A3B8'} />} href={'/accounts'} link={'Accounts'} />
                    <SideTab icon={<MdLockOutline size={25} color={pathname === '/security' ? '#0D6EFD' : '#94A3B8'} />} href={'/security'} link={'Security'} />
                    <SideTab icon={<PiBellSimpleLight size={25} color={pathname === '/notifications' ? '#0D6EFD' : '#94A3B8'} />} href={'/notifications'} link={'Notifications'} />
                    <SideTab icon={<PiMoneyDuotone size={25} color={pathname === '/pricing' ? '#0D6EFD' : '#94A3B8'} />} href={'/pricing'} link={'Pricing'} />
                    <SideTab icon={<LuTag size={25} color={pathname === '/sales' ? '#0D6EFD' : '#94A3B8'} />} href={'/sales'} link={'Sales'} />
                    <SideTab icon={<PiUsers size={25} color={pathname === '/' ? '#0D6EFD' : '#94A3B8'} />} href={'/'} link={'Users & Roles'} />
                    <SideTab icon={<CgCloud size={25} color={pathname === '/backups' ? '#0D6EFD' : '#94A3B8'} />} href={'/backups'} link={'Backups'} />
                </ul>
                <hr className='w-58 h-px my-6' />
            </div>
            <div className="self-center mb-4">
                <button className="text-sm flex items-center space-x-2 border-2 border-gray-400 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300">
                    <Image src="/icons/door.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
                    <Link href="/">Back to Dashboard</Link>
                </button>
            </div>
        </div>)
};

export default Sidebar;