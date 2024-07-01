import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.id]: e.target.value });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/auth/register", info, { withCredentials: false });
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            <Navbar />
            <div className="registerCard">
                <div className="center">
                    <h1>Unete a nosotros</h1>
                    <form>  

                        <div className="formInput">
                            <div className="txt_field">
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    id="username"
                                    onChange={handleChange}
                                    value={info.username}
                                    required
                                />
                            </div>
                            <div className="txt_field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    onChange={handleChange}
                                    value={info.email}
                                    required
                                />
                            </div>
                            <div className="txt_field">
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    id="password"
                                    onChange={handleChange}
                                    value={info.password}
                                    required
                                />
                            </div>
                        </div>
                        <div className="login_button">
                            <button className="button" onClick={handleClick}>
                                Registrarse
                            </button>
                        </div>
                        <div className="signup_link">
                            <p>
                                Ya estas registrado? <Link to="/login">Ingresar</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;