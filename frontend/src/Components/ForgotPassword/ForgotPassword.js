import React from 'react'

export default function ForgotPassword() {

    return (

        <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(to bottom right, #F0F2F5, #D4D4D4, #B0BEC5, #546E7A)" }}>
            {/* Header */}
            <header className="flex justify-between items-center px-8 py-4">
                <div className="text-black font-bold text-lg flex items-center gap-2">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">CA</div>
                    <span>CHAT APP</span>
                </div>
                <NavLink to={'signup'} className="border border-black sm:px-10 px-5 py-3 text-sm font-semibold hover:bg-black hover:text-white transition">
                    SIGN IN
                </NavLink>
            </header>

            {/* Form Container */}
            <main className="flex-grow flex items-center justify-center ">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center ">
                    <h2 className="text-2xl font-semibold mb-4 underline">Login to Chat App</h2>

                    <form className="space-y-4 text-left">


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

                        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition uppercase">
                            Login
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
        </div>
    )

}
