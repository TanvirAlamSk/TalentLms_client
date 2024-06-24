import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../context/AuthContext";

const useGetUserName = () => {
    const [userName, setUserName] = useState("")
    const { user } = useContext(AuthProvider)
    useEffect(() => {
        fetch(`https://talentlms-server.onrender.com/users?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("talent-lms-token")}`
            }
        })
            .then((response) => response.json())
            .then((data) => setUserName(data.name))
    }, [user?.email])

    return userName;
};

export default useGetUserName;