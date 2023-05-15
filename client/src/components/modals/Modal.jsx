import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import Heading from '../Heading';
import Input from '../inputs/Input';

const Modal = ({ title, subTitle, body, onClick }) => {
  return (
    <div className="absolute inset-0 bg-black/60 z-50">
      <div className="w-full md:w-2/5  mx-auto p-4 ">
        {/* Content */}
        <div className="bg-white h-full rounded-md p-4 relative flex flex-col gap-4">
          {/* Header */}
          <div>
            <button className="absolute right-4 hover:cursor-pointer hover:text-neutral-500 transition">
              <AiOutlineClose size={24} onClick={() => {}} />
            </button>
            <Heading title={title} />
            <h2>{subTitle}</h2>
          </div>

          {/* Body */}
          <form className="flex flex-col gap-4">
            <Input type="text" label="Name" />
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
          </form>
          <div className="border-t-2 mt-4 " />

          {/* footer */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
