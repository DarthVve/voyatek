"use client";

import { useState } from "react";
import Image from "next/image";

import EditModal from "../edit-modal";
import Delete from "../delete-modal";
import DeleteModal from "../delete-modal";

interface User {
    name: string;
    email: string;
    role: string;
}

const users: User[] = [
    { name: 'Taiwo Isaac', email: 'taiwoisaac@email.com', role: 'Administrator' },
    { name: 'Seun Fagbemi', email: 'seunfagbemi@email.com', role: 'Sales Manager' },
    { name: 'Dare Oyejide', email: 'dareoyejide@email.com', role: 'Sales Manager' },
    { name: 'StudiMatch', email: 'studimatch@email.com', role: 'Sales Representative' },
];

function UserTable() {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const handleEditmodal = () => {
        setShowEditModal(!showEditModal)
    };

    const handleDeletemodal = () => {
        setShowDeleteModal(!showDeleteModal)
    };

    return (
        <>
            {showEditModal && <EditModal closeModal={handleEditmodal} />}
            {showDeleteModal && <DeleteModal closeModal={handleDeletemodal} />}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 pb-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2 cursor-pointer w-4 h-4" />
                                    Name <span className="ml-2"><Image src="/icons/chevron-v.svg" alt="icon" className="h-4 w-5" width={3000} height={3000} /></span>
                                </div>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider flex items-center">
                                Email Address <span className="ml-2"><Image src="/icons/chevron-v.svg" alt="icon" className="h-4 w-5" width={3000} height={3000} /></span>
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Role <span className="ml-2 inline-block translate-y-1"><Image src="/icons/chevron-v.svg" alt="icon" className="h-4 w-5" width={3000} height={3000} /></span></th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {users.map((user) => (
                            <tr key={user.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm font-medium">
                                        <input type="checkbox" className="mr-2 cursor-pointer w-4 h-4 border-gray-200" />
                                        {user.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-block px-2 py-1 text-sm leading-5 rounded-full ${user.role === 'Administrator'
                                            ? 'bg-blue-100 text-blue-700'
                                            : user.role === 'Sales Manager'
                                                ? 'bg-green-100 text-green-700'
                                                : user.role === 'Sales Representative'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : ''
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={handleEditmodal} className="text-blue-600 hover:text-blue-600 mr-4">Edit</button>
                                    <button onClick={handleDeletemodal} className="text-gray-400 hover:text-red-600">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserTable;
