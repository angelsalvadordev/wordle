/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

export interface ModalProps {
  title: string;
  openModal: boolean;
  children?: ReactNode;
  handleClose?: () => void;
}

const Modal: FC<ModalProps> = ({ title, children, openModal }) => {
  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-2 bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[546px] transform overflow-hidden rounded-2xl bg-gray-2 border-solid border-black border px-12 py-14 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-4xl font-extrabold leading-6 text-black dark:text-white text-center mb-12"
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
