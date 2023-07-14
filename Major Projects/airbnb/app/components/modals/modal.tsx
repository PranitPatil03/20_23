"use client"

import {useState,useEffect,useCallback} from 'react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: string;
  footer?: string;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const modals: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] =useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => { 

    if(disabled)return;

    setShowModal(false);
    setTimeout(() => {
        onClose();
    }, 300);

    },
    [disabled,onClose])

    const handleSubmit = useCallback(()=>{
        if(disabled) return
        onSubmit();
    },
    [disabled,onSubmit]) 

    const handleSecondaryAction = useCallback(()=>{
        if(disabled || !secondaryAction) return
        secondaryAction()    
    },[disabled,secondaryAction])

    if(!isOpen) return null;

  return (<div
   className='
    justify-content
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    insert-0
    z-50
    outline-none
    foucus:outline-none
    bg:neutral-800/70

   '
  >

  </div>);
};

export default modals;
