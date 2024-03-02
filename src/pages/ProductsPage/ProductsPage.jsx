import { useState } from 'react';
import { ModalProducts } from '../../components/Modal/ModalProducts/ModalProducts';

export default function ProductsPage() {
  const [isModalOpen, setIsModal] = useState(false);

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

      <ModalProducts isOpen={isModalOpen} onClose={() => setIsModal(false)} />
    </>
  );
}
