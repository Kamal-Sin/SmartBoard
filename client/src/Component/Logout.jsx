import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../authContext/AuthContext";
import toast from 'react-hot-toast'

const Logout = () => {
    const { setAuthUser, setUser } = useAuthContext();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("user-info");
        setAuthUser(null);
        localStorage.removeItem("user")
        setUser(null)

        console.log("Item removed");
        toast.success("Logout Succesfully");
        navigate("/");
    }
    return (
        <nav class="navbar p-0 m-0" style={{ height: "8vh", background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
            <div class="container-fluid d-flex justify-content-end me-5">
                <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Logout;