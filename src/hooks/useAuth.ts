import {useEffect, useState, useRef} from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
    url: import.meta.env.VITE_KEYCLOACK_URL,
    realm: import.meta.env.VITE_KEYCLOACK_REALM,
    clientId: import.meta.env.VITE_KEYCLOACK_CLIENT,
})

const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {

        if (isRun.current) return;

        isRun.current = true;

        client
            .init({ onLoad: "login-required" })
            .then(res => setIsLogin(res));

    }, []);

    return isLogin;
}

export default useAuth;