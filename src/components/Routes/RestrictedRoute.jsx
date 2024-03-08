import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLoggedin } from "../../redux/auth/selectors";


export const RestrictedRoute = ({component: Component, redirectTo = "/"}) => {
    const isLoggedin = useSelector(selectIsLoggedin);

    return isLoggedin ? (<Navigate to={redirectTo} />) : Component;
}