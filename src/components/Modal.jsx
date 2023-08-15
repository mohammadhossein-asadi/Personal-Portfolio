import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Personal from "../assets/work/personal.gif";
import { BsGithub } from "react-icons/bs";
import { ImLink } from "react-icons/im";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={closeModal}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl"
              onClick={stopPropagation}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none w-[600px] h-[600px]">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font-semibold">Project Name</h3>
                  <button
                    className=" bg-white border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <GrClose size={22} />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <img src={Personal} alt="" className="rounded-lg" />
                  <div className="flex pt-2">
                    <span>Technologies:</span>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Default
                    </span>
                  </div>
                  <p className="font-semibold p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, assumenda corrupti vel quisquam architecto sequi sed
                    ad labore soluta veritatis minus omnis eos iusto in
                    distinctio? Voluptate pariatur animi voluptates, inventore
                    possimus ratione quod facere, asperiores dicta magni
                    voluptatibus expedita.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mohammadhossein-asadi"
                      target="_blank"
                      rel="noreferrer"
                      className=" w-24 py-2 flex gap-3 items-center justify-center rounded-full shadow-lg bg-[#030a1c] text-white cursor-pointer"
                    >
                      <ImLink size={16} /> Live
                    </a>
                    <a
                      href="https://github.com/mohammadhossein-asadi"
                      target="_blank"
                      rel="noreferrer"
                      className=" w-24 py-2 flex gap-3 items-center justify-center rounded-full shadow-lg bg-[#030a1c] text-white cursor-pointer"
                    >
                      <BsGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
