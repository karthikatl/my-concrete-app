import { useDispatch } from 'react-redux';
import { selectConcrete } from '../store/concreteSlice';

const useSelectConcrete = () => {
  const dispatch = useDispatch();

  const handleSelectConcrete = (concreteId) => {
    dispatch(selectConcrete(concreteId));
  };

  return handleSelectConcrete;
};

export default useSelectConcrete;