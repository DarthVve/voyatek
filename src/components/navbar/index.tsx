import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white p-6 shadow">
            <div className="flex items-center space-x-4">
                <Image src="/images/logo.svg" alt="Logo" className="h-12 w-12" width={3000} height={3000} />
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-96 bg-gray-100 rounded-lg pr-2 pl-9 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
            </div>
            <ul className="flex items-center space-x-8">
                <li className="flex flex-col items-center justify-center space-y-1 cursor-pointer" >
                    <Image src="/icons/bell.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
                    <p className="text-gray-600 text-xs">Notifications</p>
                </li>
                <li className="flex flex-col items-center justify-center space-y-1 cursor-pointer" >
                    <Image src="/icons/wallet.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
                    <p className="text-gray-600 text-xs">Wallet</p>
                </li>
                <li className="flex flex-col items-center justify-center space-y-1 cursor-pointer" >
                    <Image src="/icons/question.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
                    <p className="text-gray-600 text-xs">Inquiries</p>
                </li>
                <li className="flex flex-col items-center justify-center space-y-1 cursor-pointer" >
                    <Image src="/icons/gear.svg" alt="icon" className="h-6 w-6" width={3000} height={3000} />
                    <p className="text-blue-600 text-xs">Settings</p>
                </li>
                <Image src="/images/profile.svg" alt="Profile" className="h-12 w-12 rounded-full cursor-pointer" width={3000} height={3000} />
            </ul>
        </nav>
    )
};

export default Navbar;