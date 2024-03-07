import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedin, selectIsRefreshing } from "../../redux/auth/selectors";


export const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
    const isLoggedin = useSelector(selectIsLoggedin);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedin && !isRefreshing;

    return shouldRedirect ? (<Navigate to={redirectTo} />) : Component;
}