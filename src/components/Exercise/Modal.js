import React, { useState } from 'react';
import Cross from '../../assets/Icons/x.svg';


const Modal = (props) => {
    const [open, setOpen] = useState(false);

    const handleToggleModal = () => {
        setOpen(!open);
    }

    return (
        <div class="m-20">
            <button type="button" class="bg-purple-heart-500 text-white px-5 py-3 rounded-md" onClick={handleToggleModal}>
                Launch demo modal
            </button>
            {
                open ? <div class="modal z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed m-20">
                    <div class="border rounded-lg z-50 w-1/2 relative">
                        <div class="bg-white overflow-hidden">
                            <div class="flex justify-between border-b py-4 px-6">
                                <h5 class="subpixel-antialiased">{props.modalTitles}</h5>
                                <div class="" onClick={handleToggleModal} >
                                    <span class="">
                                        <img src={Cross} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div class="px-6 pt-6 pb-10 text-gray-500 border-b">
                                <p>{props.modalBody}</p>
                            </div>
                            <div class="flex justify-end pr-10 py-6">
                                <button type="button" class="bg-black-haze-500 hover:bg-mystic-500 px-4 py-2 rounded-md text-gray-500" onClick={handleToggleModal}>Close</button>
                                <button type="button" class="ml-10 bg-purple-heart-500 px-6 py-2 rounded-md text-white">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                    : null
            }
        </div>
    )
}

export default Modal;
