import { useSelector } from 'react-redux';
import {
    selectUser, selectIsAuthenticated, selectIsRefreshing
} from '../../redux/auth/selectors';

export const useAuth = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isAuthenticated,
        isRefreshing,
        user,
    };
};