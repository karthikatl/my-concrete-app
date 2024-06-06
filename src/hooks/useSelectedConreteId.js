import { useSelector } from 'react-redux';
import { selectSelectedConcreteId } from '../store/concreteSlice';

const useSelectedBConcreteId = () => {
  return useSelector(selectSelectedConcreteId);
};

export default useSelectedBConcreteId;