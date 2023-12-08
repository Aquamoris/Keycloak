import useAuth from "./hooks/useAuth.ts";
import Protected from "./components/Protected.tsx";
import Public from "./components/Public.tsx";


function App() {
    const isLogin: boolean = useAuth();

    return isLogin ? <Protected/> : <Public/>
}

export default App
