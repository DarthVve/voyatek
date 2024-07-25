"use client";

import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface CreateModalProps {
    closeModal(): void
}

const CreateModal = ({ closeModal }: CreateModalProps) => {
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    //Ideally I would use formik for better error handling and yup for validation but ther is no time

    const { isLoading, refetch } = useQuery("tutorial", {
        queryFn: async () => {
            const response = await fetch("/create-users", {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    role: role,
                    password: password
                })
            })

            const data = await response.json();
            return data;
        },
        enabled: false,
        onSuccess: ({ data }) => {
            console.log('user create:', data);
            toast.success('User created Succesfully!')
        },
        onError: (error) => {
            toast.error("Sorry Cannot Fetch Data");
            console.error(error)
        }
    });

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                        <button onClick={closeModal} type="button" className="bg-white rounded-md inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 sm:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col justify-center items-center mb-6">
                        <Image src="/images/user.svg" alt="icon" className="h-12 w-12 mb-4" width={3000} height={3000} />
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-2xl leading-6 font-medium text-gray-900" id="modal-title">
                                New User
                            </h3>
                        </div>
                    </div>

                    <form className="mt-3 sm:mt-4">
                        <div className="relative mb-6">
                            <label htmlFor="email" className="block text-sm text-gray-700 font-medium">
                                Email Address
                            </label>
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" id="email" className="p-4 mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="New User's Email Address" />
                        </div>
                        <div className="relative mb-6">
                            <label htmlFor="fullname" className="block text-sm text-gray-700 font-medium">
                                Full Name
                            </label>
                            <input onChange={(e) => { setFullname(e.target.value) }} value={fullname} type="fullname" name="fullname" id="email" className="p-4 mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="New User's Full Name" />
                        </div>

                        <select onChange={(e) => { setRole(e.target.value) }} value={role} name="role" id="role" className="mb-6 p-4 mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>Select Role</option>
                            <option value={'Administrator'} className="p-4" >Administrator</option>
                            <option value={'Sales Manager'}>Sales Manager</option>
                            <option value={'Sales Representative'}>Sales Representative</option>
                        </select>

                        <div className="relative mb-6">
                            <label htmlFor="password" className="block text-sm text-gray-700 font-medium">
                                Create Password
                            </label>
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" name="password" id="password" className="p-4 mt-1 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Create Password for New User" />
                        </div>
                    </form>

                    <div className="mt-5 sm:mt-6 ">
                        <button onClick={() => { refetch() }} disabled={isLoading} type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-blue-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2">
                            Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreateModal;