"use client";
import { ReactNode, useRef } from "react";

interface DialogProps {
  trigger: ReactNode;
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
}
export default function Dialog(dialog: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <span onClick={() => dialogRef.current?.showModal()}>{dialog.trigger}</span>
      <dialog ref={dialogRef} className="relative m-auto p-4 rounded min-w-xl">
        <button
          type="button"
          onClick={() => {
            dialogRef.current?.close();
            dialog.onClose?.();
          }}
          className="absolute top-0 right-0 w-6 h-6"
        >
          x
        </button>
        {dialog.title && <h2 className="text-2xl">{dialog.title}</h2>}
        {dialog.children}
      </dialog>
    </>
  );
}
