import Image from "next/image";

interface DeleteModalProps {
    closeModal(): void
}

const DeleteModal = ({ closeModal }: DeleteModalProps) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block align-bottom bg-white rounded-lg px-10 pt-6 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-10">
                    <h2 className="text-xl font-bold text-gray-900">Delete this user</h2>
                    <p className="mt-2 text-sm text-gray-500">This user and all associated data will be permanently removed. Do you wish to continue?</p>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                        <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1">
                            Cancel action
                        </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-2 bg-red-300 font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2">
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteModal;