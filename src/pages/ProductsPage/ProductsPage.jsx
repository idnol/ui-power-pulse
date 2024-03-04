import { useState } from 'react';
import { ModalProducts } from '../../components/Modal/ModalProducts/ModalProducts';
import { ModalProductSuccess } from '../../components/Modal/ModalProductSuccess/ModalProductSuccess';
import { ModalWaist } from '../../components/Modal/ModalWaist/ModalWaist';

export default function ProductsPage() {
  const [isModalOpen, setIsModal] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false)
  const [isModalWaistOpen, setIsModalWaistOpen] = useState(false)

  return (
    <>
      <h1>product</h1>
      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModal(true)}
      >
        Open
      </button>
      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModalSuccessOpen(true)}
      >
        Open Success
      </button>

      <button
        style={{
          position: 'relative',
        }}
        type="button"
        onClick={() => setIsModalWaistOpen(true)}
      >
        Open Waist
      </button>

      <ModalProducts isOpen={isModalOpen} onClose={() => setIsModal(false)} />
      <ModalProductSuccess isOpen={isModalSuccessOpen} onClose={() => setIsModalSuccessOpen(false)}/>
      <ModalWaist isOpen={isModalWaistOpen} onClose={() => setIsModalWaistOpen(false)}/>
    </>
  );
}
