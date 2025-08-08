import React, { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { MdPhotoCamera } from 'react-icons/md';


export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);


    const fileInputRef = useRef(null);
    const [image, setImage] = useState("https://via.placeholder.com/150");


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };
    return (

        <section className="min-h-screen px-3 flex flex-col" style={{ background: "linear-gradient(to bottom right, #F0F2F5, #D4D4D4, #B0BEC5, #546E7A)" }}>
            {/* Header */}
            <header className="flex justify-between items-center px-4 py-4">
                <div className="text-black font-bold text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">CA</div>
                    <span>CHAT APP</span>
                </div>
                <NavLink to={'/'} className="border uppercase border-black sm:px-10 px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white transition">
                    LOGIN
                </NavLink>
            </header>

            {/* Form Container */}
            <main className="flex-grow flex items-center justify-center ">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center ">
                    <h2 className="text-2xl font-semibold mb-4 underline">Sign up to Chat App</h2>

                    <form className="space-y-4 text-left">


                        <div className=" flex items-center justify-center">
                            <div className="relative w-28 h-28">
                                <img
                                    src={image || "https://via.placeholder.com/150"}
                                    alt=""
                                    className="w-28 h-28 object-cover rounded-full border  border-gray-700"
                                />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        handleClick();
                                    }}
                                    className="absolute bottom-0 right-0 bg-black bg-opacity-70 rounded-full p-1 cursor-pointer"
                                >
                                    <MdPhotoCamera className="text-white w-5 h-5" />
                                </button>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        {/* FIRST NAME */}
                        <div>
                            <label className="block text-sm text-gray-900 mb-1">FIRST NAME</label>
                            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm text-gray-900 mb-1">EMAIL</label>
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        {/* PASSWORD */}
                        <div className="relative">
                            <label className="block text-sm text-gray-900 mb-1">PASSWORD</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 "
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoMdEyeOff /> : <FaEye />}
                            </button>
                        </div>

                        {/* CONFIRM PASSWORD */}
                        <div className="relative">
                            <label className="block text-sm text-gray-900 mb-1 uppercase">Confirm PASSWORD</label>
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Enter confirm password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-9 "
                                onClick={() => setShowConfirm(!showConfirm)}
                            >
                                {showConfirm ? <IoMdEyeOff /> : <FaEye />}
                            </button>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" id="terms" className="accent-black" />
                            <label htmlFor="terms">I agree to the <span className="underline">Terms</span></label>
                        </div>

                        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition">
                            CREATE AN ACCOUNT
                        </button>
                    </form>

                    {/* OR Divider */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="mx-2 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-6 h-6 cursor-pointer" />
                        <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-6 h-6 cursor-pointer" />
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 py-4">
                © 2024 - 2025 All Rights Reserved. CHAT APP
            </footer>
        </section>
    )
}
