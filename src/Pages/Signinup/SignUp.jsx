/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import toast from "react-hot-toast";

const SignUp = () => {
    const { createUser, setUser, setLoader, googleSignIn } = useContext(AuthProvider);
    const navigate = useNavigate()

    const handelSignup = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email, password)
            .then((userCredential) => {
                const currentUser = userCredential.user
                // name: currentUser.displayName,
                const dataForDB = {
                    name,
                    email,
                    photo: currentUser.photoURL
                }

                // dataForDB sent to database
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(dataForDB)
                })
                    .then((response) => response.json())
                    .then((data) => localStorage.setItem("talent-lms-token", data.token))

                setUser(currentUser)
                setLoader(false)
                toast.success("User Create Successfully")
                navigate("/")
            })
            .catch((error) => alert(error))
    }

    const handelGoogleLogin = () => {
        googleSignIn()
            .then((userCredential) => {
                const currentUser = userCredential.user
                setUser(currentUser)
                setLoader(false)
                const dataForDB = {
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photo: currentUser.photoURL
                }

                // dataForDB sent to database
                // fetch("https://stride-wave-assignment-server.onrender.com/users", {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json"
                //     },
                //     body: JSON.stringify(dataForDB)
                // })
                //     .then((response) => response.json())
                //     .then((data) => localStorage.setItem("talent-lms-token", data.token))
                navigate("/")

            }).catch((error) => alert(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-[900px] mx-auto gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6 font-medium">Create an account to enhance your skill with the help those courses.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignup} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label justify-start">
                                Already Have an Account?
                                <Link to="/login" className="link link-hover text-left ms-1 text-orange-400">Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="form-control my-6 mx-8">
                        <button onClick={handelGoogleLogin} className="btn btn-info text-white">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;