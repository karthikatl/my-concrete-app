// useFetchConcreteDataById.js
import { useGetConcreteDetailsQuery } from '../services/concreteApi';

const useFetchConcreteDataByDetails = (concreteDetails) => {
  return useGetConcreteDetailsQuery(concreteDetails);
};

export default useFetchConcreteDataByDetails;
