import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();


  const submit = {
    email: email,
    password: password,
  };
  console.log("🚀 ~ file: Login.js:11 ~ Login ~ submit:", submit);
  return (
    <div>
      <div className="flex justify-between bg-black px-16 py-12">
        <div className="flex justify-center items-center">
          <div className="m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
          <div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-3">Đăng nhập</h1>
            </div>
            <div>
              <h1 className="text-2xl text-gray-500">Welcome back !!!</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-2xl pr-5 text-white">Trang chủ</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div className=" h-[100vh] w-full  mt-12">
        <div className="flex flex-col justify-center items-center ">
          <div>
            <p className="text-xl mb-4 ">Email</p>
            <input
              className="mb-4 border w-[760px] py-4 rounded-2xl text-xl px-5"
              placeholder="Email của bạn"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className="text-xl mb-4">Password</p>
            <input
              className="mb-4 border w-[760px] py-4 rounded-2xl text-xl px-5"
              placeholder="Mật khẩu của bạn"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div>
            <p className="text-red-500 text-xl mb-10">undefined</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="border bg-red-500 rounded-full px-32 py-4 mr-5 hover:bg-white ">
              <p className="text-white text-xl font-semibold hover:text-red-500">
                Đăng nhập
              </p>
            </div>
            <div className="border bg-white rounded-full px-32 py-4 hover:bg-red-500">
              <p className="text-xl font-semibold text-red-500 hover:text-white">
                Đăng ký
              </p>
            </div>
          </div>
          <div>
            <button className="text-red-500 text-xl font-medium mt-10 mb-10">
              Quên mật khẩu ?
            </button>
          </div>
          <div>
            <p className="text-xl">
              Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
              Điều khoản sử dụng của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
