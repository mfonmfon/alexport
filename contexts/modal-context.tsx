"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { Modal } from "@/components/ui/modal"

type ModalContextType = {
  openModal: (props: ModalOptions) => void
  closeModal: () => void
}

type ModalOptions = {
  title?: string
  content: ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalProps, setModalProps] = useState<ModalOptions>({
    content: null,
  })

  const openModal = (props: ModalOptions) => {
    setModalProps(props)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} title={modalProps.title} size={modalProps.size}>
        {modalProps.content}
      </Modal>
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

