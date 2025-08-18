import { toast } from "react-hot-toast";
import { useAuthContext } from "../authContext/AuthContext.jsx";

const useAdminSignup = () => {
    const { setAuthUser, setUser } = useAuthContext();

    const signup = async (input) => {
        // Validate all fields
        const isValid = validateInput(input);
        if (!isValid){ 
            return;
        }

        try {
            // Transform the input to match backend expectations
            const transformedInput = {
                ...input,
                fullname: input.fullName,
            };
            delete transformedInput.fullName;

            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
            const res = await fetch(`${API_BASE_URL}/auth/admin/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(transformedInput),
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                toast.error(data.error || "Signup failed. Please try again.");
                return;
            }

            // Store user and update context
            localStorage.setItem("user-info", "admin");
            setAuthUser("admin");

             localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            toast.success("Signup successful!");
            console.log(data);

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            console.error(error);
        }
    };

    return { signup };
};

export default useAdminSignup;

// Helper validation function
const validateInput = (input) => {
    const { email, fullName, employee_id, password, confirmPassword } = input;

    if (!email || !fullName || !employee_id || !password || !confirmPassword) {
        toast.error("Please fill in all fields.");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
    }

    return true;
};
