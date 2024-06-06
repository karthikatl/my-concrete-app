import { useGetConcretesQuery } from '../services/concreteApi';

const useConcretes = () => {
  const { data: concretes, error, isLoading } = useGetConcretesQuery();
  console.log(concretes)
  return { concretes, error, isLoading };
};

export default useConcretes;
