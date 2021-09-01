import { AiFillGithub } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

import Header from "../components/Header";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 smLpx-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page Header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome back. We exist to make entrepreneurism easier
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        htmlFor="email"
                        className="block text-gray-800 text-sm font-medium mb-1"
                      >
                        E-mail <span className="text-red-500 text-bold">*</span>
                      </label>
                      <input
                        id="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Link
                          to="reset-password"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          Having trouble signing in?
                        </Link>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-start">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">
                            keep me signed in
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <button className="btn px-0 text-white bg-github hover:bg-black w-full relative">
                      <AiFillGithub className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4 absolute left-1" />
                      Continue with Github
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <button className="btn px-0 text-white bg-google hover:bg-red-800 w-full relative">
                      <FaGoogle className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4 absolute left-1" />
                      Continue with Google
                    </button>
                  </div>
                </div>
                <div className="flex items-center my-6 font-medium">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600">
                    Don't have a account?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                    >
                      Signup
                    </Link>
                  </div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signin;
