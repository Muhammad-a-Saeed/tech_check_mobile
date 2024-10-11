import {useSelector} from 'react-redux';
import {accountSelector} from '../redux/selectors';
import {ACCOUNT_TYPE} from '../utils/constants';

const useAccountType = () => {
  const accountType = useSelector(accountSelector);

  const isTechnician = accountType === ACCOUNT_TYPE.technician;
  const isCompany = accountType === ACCOUNT_TYPE.company;

  return {isTechnician, isCompany};
};

export default useAccountType;
