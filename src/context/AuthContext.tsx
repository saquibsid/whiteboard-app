"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

// Define AuthContext types
interface AuthContextType {
    user: any;
    loading: boolean;
    logout: () => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`;
    useEffect(() => {
        const authenticateUser = async () => {
            try {
                // Step 1: Get token using session cookie
                const tokenResponse = await fetch(`${apiUrl}/token`, {
                    credentials: "include", // Ensures cookies are sent with the request
                });
                const {data} = await tokenResponse.json();
                console.log("tokenData", data);
                if (!tokenResponse.ok || !data.accessToken) {
                    logout(); // If token request fails, logout user
                    return;
                }

                // // Store tokens in cookies
                Cookies.set("accessToken", data.accessToken, { secure: true, sameSite: "Strict" });
                Cookies.set("refreshToken", data.refreshToken, { secure: true, sameSite: "Strict" });

                // // Step 2: Fetch user details
                const userResponse = await fetch(`${apiUrl}/user`, {
                    headers: { Authorization: `Bearer ${data.accessToken}` },
                });

                const userData = await userResponse.json();
                console.log("userData", userData);
                if (userResponse.ok) {
                    setUser(userData);
                } else {
                    logout();
                }
            } catch (error) {
                logout();
            } finally {
                setLoading(false);
            }
        };

        authenticateUser();
    }, []);

    const logout = () => {
        setUser(null);
        window.location.href = "http://localhost:8000/";
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to access AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
