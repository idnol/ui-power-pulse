import { useField } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const showToastError = (errorMessage) => {
  toast.error(errorMessage);
};

const ToastError = ({ name }) => {
  const [, meta] = useField(name);

  useEffect(() => {
    if (meta.error && meta.touched) {
      showToastError(meta.error);
    }
  }, [meta.error, meta.touched]);

  return null;
};

export default ToastError;