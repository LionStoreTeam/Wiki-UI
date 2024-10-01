import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";


const SignUpScreen = () => {
    return (
        <section className="w-full bg-transparent md:bg-transparent">
            <div className="h-[calc(100vh-2rem)] flex justify-center items-center">
                <div className="p-5  h-[calc(100vh)] w-full flex flex-col justify-center items-center bg-white rounded-lg md:h-min md:bg-slate-100 md:ml-20 md:mr-20 md:mb-20">
                    <div className="text-center">
                        {/* Title */}
                        <h1 className="text-[30px] font-semibold">Create your free account</h1>
                        {/* Login with Google or Github */}
                        <div className="flex justify-center gap-4 items-center">
                            <div className="flex p-3 border-2 border-slate-300 rounded-md">
                                <FcGoogle size={20} />
                                <span className="ml-2">Sign in with Google</span>
                            </div>
                            <div className="p-3 px-10 border-2 border-slate-300 rounded-md">
                                <BsGithub size={30} />
                            </div>
                        </div>
                        {/* ---- OR ---- */}
                        <div className="relative flex mx-32 justify-center mt-5">
                            <div className="absolute left-0 top-1/2 w-full border-t border-gray-400"></div>
                            <div className="relative z-10 bg-slate-100 px-2 text-sm leading-4.5 text-gray-700">OR</div>
                        </div>
                        {/* Input Email */}
                        <div className="p-2 relative items-center justify-center gap-2">
                            <CiMail size={20} className="absolute left-6 top-1/2 transform -translate-y-1/2" />
                            <input type="email" className="block w-full pl-10 pr-3 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Work email"
                            />
                        </div>
                        {/* Button */}
                        <button className="w-full text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                        {/* By registering, you agree to our Terms of Use & Privacy Policy */}
                        <div className="text-center mt-3">
                            <a href="#" className="text-sm underline">Terms of Use & Privacy Policy</a>
                        </div>
                        {/* Already have an account?Log in */}
                        <div className="">
                            <a href="#" className="text-sm text-blue-500">Already have an account? Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUpScreen;

