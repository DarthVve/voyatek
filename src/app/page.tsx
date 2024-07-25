"use client";

import { useState } from "react";

import { UserTable } from "@/components";
import Image from "next/image";

import { CreateModal } from '@/components';
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function Home() {
  const [showCreateModal, setShowcreateModal] = useState<boolean>(false);

  const handleCreatemodal = () => {
    setShowcreateModal(!showCreateModal)
  };

  return (
    <>
      {showCreateModal && <CreateModal closeModal={handleCreatemodal} />}
      <div className="flex h-full flex-col px-10 w-full">
        <div className="mb-8">
          <div className="text-xs text-gray-400 mb-8 mt-2">
            <span>Settings</span> / <span>Users & Roles Settings</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Users & Roles</h1>
          <p className="text-gray-400 text-sm">Manage all users in your business</p>
        </div>

        <div className="flex items-center mb-4 gap-5">
          <div className="px-4 py-2 border-b-2 border-blue-500">
            <h2 className="text-blue-500 font-medium text-xs">Users</h2>
          </div>
          <h2 className="text-gray-400 font-medium text-xs">Roles</h2>
        </div>

        {/* Table Section */}
        <div className="bg-white p-4 rounded-md flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-9"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.285 4.285a1 1 0 01-1.415 1.414l-4.284-4.285zM8 14A6 6 0 108 2a6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <button className="flex items-center gap-3 border border-gray-300 bg-white hover:bg-gray-100 text-gray-500 font-medium rounded-md px-4 py-2 ml-2">
              <Image src="/icons/filter.svg" alt="icon" className="h-4 w-4" width={3000} height={3000} />
              Filter
            </button>
          </div>
          <button onClick={handleCreatemodal} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 ml-4">
            <Image src="/icons/button-icon.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
            New User
          </button>
        </div>
        <UserTable />
      </div></>
  );
}
