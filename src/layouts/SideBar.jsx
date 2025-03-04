
import React from 'react';
import logo from '../../src/assets/bankCash.png'
import { ImCross } from "react-icons/im";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [active, setActive] = React.useState("home");
  
    return (
      <>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <aside
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button (Only on Mobile) */}
          <button
            className="absolute top-5 right-3 p-1 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <ImCross />
          </button>
          {/** Sidebar Header */}
          <div className="flex items-center space-x-[9px] mb-6 p-4">
            <h2 className="text-[25px] flex gap-2 font-extrabold text-[#343C6A]">
             <img src={logo} alt="" /> BankDash.
            </h2>
          </div>
  
          {/** Sidebar Items */}
          <nav>
            <ul className="space-y-3">
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "home"
                    ? "border-[#2D60FF] rounded-tr-lg rounded-br-lg fill-[#2D60FF] text-[#2D60FF] hover:bg-blue-200"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("home")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="current"
                >
                  <g clipPath="url(#clip0_0_326)">
                    <path
                      d="M24.3254 10.8738C24.3248 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4983 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678111 10.8667C0.674678 10.8702 0.671244 10.8738 0.667811 10.8772C-0.224828 11.775 -0.223302 13.2317 0.672198 14.1272C1.08132 14.5365 1.62168 14.7736 2.19941 14.7984C2.22287 14.8006 2.24652 14.8018 2.27037 14.8018H2.67682V22.3066C2.67682 23.7917 3.88513 25 5.37057 25H9.36036C9.76472 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1115 25 22.3198 23.7917 22.3198 22.3066V14.8018H22.6967C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z"
                      fill="current"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_326">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-lg font-semibold leading-normal">Dashboard</span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "transactions"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("transactions")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="current"
                >
                  <g clipPath="url(#clip0_0_294)">
                    <path
                      d="M5.20831 22.9167C5.20897 23.469 5.42867 23.9985 5.81923 24.3891C6.20979 24.7797 6.73931 24.9994 7.29165 25H17.7083C18.2606 24.9994 18.7902 24.7797 19.1807 24.3891C19.5713 23.9985 19.791 23.469 19.7916 22.9167V22.0052H5.20831V22.9167Z"
                      fill="current"
                    />
                    <path
                      d="M19.7916 2.08333C19.791 1.531 19.5713 1.00148 19.1807 0.610917C18.7902 0.220358 18.2606 0.00065473 17.7083 0L7.29165 0C6.73931 0.00065473 6.20979 0.220358 5.81923 0.610917C5.42867 1.00148 5.20897 1.531 5.20831 2.08333V3.125H19.7916V2.08333Z"
                      fill="current"
                    />
                    <path
                      d="M24.7097 6.70052L21.5847 3.44531L20.0819 4.88802L21.3893 6.25H19.7916V8.33333H21.5017L20.1126 9.66459L21.554 11.1688L24.679 8.17396C24.7778 8.07926 24.857 7.96602 24.912 7.8407C24.9671 7.71538 24.9968 7.58045 24.9997 7.44361C25.0026 7.30677 24.9784 7.17071 24.9287 7.04321C24.8789 6.91571 24.8045 6.79926 24.7097 6.70052Z"
                      fill="current"
                    />
                    <path
                      d="M16.6666 6.24999H19.7916V4.16666H5.20831V16.6667H8.33331V18.75H5.20831V20.8333H19.7916V8.33332H16.6666V6.24999ZM15.625 10.4167H11.9791C11.841 10.4167 11.7085 10.4715 11.6109 10.5692C11.5132 10.6669 11.4583 10.7994 11.4583 10.9375C11.4583 11.0756 11.5132 11.2081 11.6109 11.3058C11.7085 11.4035 11.841 11.4583 11.9791 11.4583H13.0208C13.6666 11.4577 14.2896 11.697 14.7689 12.1299C15.2482 12.5627 15.5495 13.1582 15.6144 13.8008C15.6793 14.4433 15.5032 15.087 15.1201 15.607C14.7371 16.127 14.1745 16.4861 13.5416 16.6146V17.7083H11.4583V16.6667H9.37498V14.5833H13.0208C13.1589 14.5833 13.2914 14.5285 13.3891 14.4308C13.4868 14.3331 13.5416 14.2006 13.5416 14.0625C13.5416 13.9244 13.4868 13.7919 13.3891 13.6942C13.2914 13.5965 13.1589 13.5417 13.0208 13.5417H11.9791C11.3333 13.5423 10.7103 13.303 10.2311 12.8701C9.75179 12.4372 9.45045 11.8417 9.38555 11.1992C9.32064 10.5567 9.4968 9.91293 9.87983 9.39297C10.2629 8.87301 10.8254 8.51392 11.4583 8.38541V7.29166H13.5416V8.33332H15.625V10.4167Z"
                      fill="current"
                    />
                    <path
                      d="M3.49828 16.6667L4.88734 15.3354L3.44593 13.8312L0.320931 16.826C0.222115 16.9207 0.142929 17.034 0.0879011 17.1593C0.0328728 17.2846 0.00308028 17.4195 0.000226477 17.5564C-0.00262733 17.6932 0.0215135 17.8293 0.0712692 17.9568C0.121025 18.0843 0.19542 18.2007 0.290202 18.2995L3.4152 21.5547L4.91807 20.112L3.61064 18.75H5.2083V16.6667H3.49828Z"
                      fill="current"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_294">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Transactions
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "Accounts"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("Accounts")}
              >
                <svg
                  width="25.000000"
                  height="25.000000"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip0_315">
                      <rect
                        id="user 3 1"
                        rx="0.000000"
                        width="24.000000"
                        height="24.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fillOpacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="user 3 1"
                    rx="0.000000"
                    width="24.000000"
                    height="24.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#C5C5CF"
                    fillOpacity="0"
                  />
                  <g clip-path="url(#clip0_315)">
                    <path
                      id="Vector"
                      d="M12.32 12.04C13.97 12.04 15.4 11.44 16.57 10.27C17.75 9.1 18.34 7.67 18.34 6.02C18.34 4.36 17.75 2.93 16.57 1.76C15.4 0.59 13.97 0 12.32 0C10.66 0 9.23 0.59 8.06 1.76C6.89 2.93 6.3 4.36 6.3 6.02C6.3 7.67 6.89 9.1 8.06 10.27C9.23 11.44 10.66 12.04 12.32 12.04Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M22.85 19.22C22.82 18.73 22.75 18.2 22.65 17.64C22.55 17.07 22.42 16.54 22.26 16.05C22.1 15.55 21.88 15.05 21.61 14.57C21.33 14.07 21 13.64 20.62 13.29C20.24 12.91 19.76 12.62 19.21 12.4C18.66 12.18 18.05 12.07 17.4 12.07C17.15 12.07 16.9 12.18 16.43 12.49C16.13 12.68 15.79 12.9 15.41 13.14C15.08 13.35 14.64 13.55 14.09 13.72C13.55 13.9 13.01 13.99 12.47 13.99C11.94 13.99 11.4 13.9 10.86 13.72C10.31 13.55 9.87 13.35 9.54 13.14C9.16 12.9 8.82 12.68 8.52 12.49C8.05 12.18 7.8 12.07 7.54 12.07C6.89 12.07 6.29 12.18 5.74 12.4C5.19 12.62 4.71 12.91 4.32 13.29C3.95 13.64 3.62 14.07 3.34 14.57C3.07 15.05 2.85 15.55 2.69 16.05C2.53 16.54 2.4 17.07 2.3 17.64C2.2 18.2 2.13 18.73 2.1 19.22C2.06 19.7 2.05 20.19 2.05 20.7C2.05 22 2.46 23.06 3.28 23.84C4.09 24.61 5.16 25 6.46 25L18.49 25C19.79 25 20.86 24.61 21.67 23.84C22.49 23.06 22.9 22 22.9 20.7C22.9 20.19 22.89 19.69 22.85 19.22Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Accounts
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "Investments"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("Investments")}
              >
                <svg
                  width="25.000000"
                  height="25.000000"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip0_283">
                      <rect
                        id="economic-investment 1"
                        rx="0.000000"
                        width="24.000000"
                        height="24.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="economic-investment 1"
                    rx="0.000000"
                    width="24.000000"
                    height="24.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#C5C5CF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip0_283)">
                    <path
                      id="Vector"
                      d="M3.92 10.22L1.13 10.22C0.5 10.22 0 10.73 0 11.36L0 23.86C0 24.49 0.5 25 1.13 25L3.92 25C4.54 25 5.05 24.49 5.05 23.86L5.05 11.36C5.05 10.73 4.54 10.22 3.92 10.22Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M10.56 13.63L7.78 13.63C7.15 13.63 6.64 14.14 6.64 14.77L6.64 23.86C6.64 24.49 7.15 24.99 7.78 24.99L10.56 24.99C11.19 24.99 11.7 24.49 11.7 23.86L11.7 14.77C11.7 14.14 11.19 13.63 10.56 13.63Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M17.21 13.63L14.43 13.63C13.8 13.63 13.29 14.14 13.29 14.77L13.29 23.86C13.29 24.49 13.8 24.99 14.43 24.99L17.21 24.99C17.84 24.99 18.35 24.49 18.35 23.86L18.35 14.77C18.35 14.14 17.84 13.63 17.21 13.63Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M23.86 10.22L21.07 10.22C20.45 10.22 19.94 10.73 19.94 11.36L19.94 23.86C19.94 24.49 20.45 25 21.07 25L23.86 25C24.49 25 25 24.49 25 23.86L25 11.36C25 10.73 24.49 10.22 23.86 10.22Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M12.83 6.84L12.83 8.89C13.45 8.85 14.1 8.56 14.1 7.87C14.1 7.17 13.38 6.96 12.83 6.84Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M11.05 4.39C11.05 4.91 11.43 5.21 12.21 5.36L12.21 3.51C11.5 3.53 11.05 3.95 11.05 4.39Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M12.5 0C9.05 0 6.25 2.8 6.25 6.25C6.25 9.69 9.05 12.49 12.5 12.49C15.94 12.49 18.75 9.69 18.75 6.25C18.75 2.8 15.94 0 12.5 0ZM12.83 9.94L12.83 10.58C12.83 10.76 12.69 10.93 12.51 10.93C12.34 10.93 12.21 10.76 12.21 10.58L12.21 9.94C10.46 9.9 9.59 8.86 9.59 8.04C9.59 7.63 9.84 7.39 10.23 7.39C11.39 7.39 10.49 8.81 12.21 8.89L12.21 6.73C10.67 6.45 9.75 5.78 9.75 4.63C9.75 3.22 10.92 2.5 12.21 2.46L12.21 1.91C12.21 1.73 12.34 1.56 12.51 1.56C12.69 1.56 12.83 1.73 12.83 1.91L12.83 2.46C13.63 2.48 15.29 2.99 15.29 4C15.29 4.4 14.98 4.64 14.63 4.64C13.96 4.64 13.97 3.53 12.83 3.51L12.83 5.48C14.19 5.77 15.4 6.17 15.4 7.76C15.4 9.14 14.37 9.85 12.83 9.94Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Investments
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "CreditCards"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("CrediCards")}
              >
                <svg
                  width="26.000000"
                  height="26.000000"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip0_277">
                      <rect
                        id="credit-card 1"
                        rx="0.000000"
                        width="25.000000"
                        height="25.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="credit-card 1"
                    rx="0.000000"
                    width="25.000000"
                    height="25.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#C5C5CF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip0_277)">
                    <path
                      id="Vector"
                      d="M22.96 7.16L22.96 6.8C22.96 5.17 21.63 3.84 19.99 3.84L2.96 3.84C1.33 3.84 0 5.17 0 6.8L0 7.16L22.96 7.16Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M13.56 16.7C13.56 15.16 14.05 13.7 14.97 12.49L0 12.49L0 16.63C0 18.26 1.33 19.59 2.96 19.59L14.19 19.59C13.78 18.7 13.56 17.71 13.56 16.7ZM11.48 15.8L8.92 15.8L8.92 14.27L11.48 14.27L11.48 15.8ZM3.41 14.27L7.39 14.27L7.39 15.8L3.41 15.8L3.41 14.27Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M16.55 10.97C17.71 10.16 19.09 9.72 20.54 9.72C21.38 9.72 22.19 9.86 22.96 10.15L22.96 8.68L0 8.68L0 10.97L16.55 10.97Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M25.99 16.7C25.99 13.68 23.55 11.24 20.54 11.24C17.53 11.24 15.08 13.68 15.08 16.7C15.08 19.71 17.53 22.15 20.54 22.15C23.55 22.15 25.99 19.71 25.99 16.7ZM21.27 19.61L21.27 20.23L20.51 20.23L20.51 20.23L20.51 20.23L19.75 20.23L19.75 19.62C19.29 19.46 18.91 19.19 18.55 18.92L19.45 17.69C19.94 18.05 20.19 18.22 20.54 18.22C20.74 18.22 20.89 18.13 20.95 17.98C21.03 17.8 20.92 17.63 20.68 17.53C20.68 17.53 19.59 17.17 19.09 16.65C18.67 16.22 18.53 15.62 18.67 15.04C18.8 14.46 19.19 14 19.75 13.78L19.75 13.16L21.27 13.16L21.27 13.75C21.66 13.86 21.99 14.02 22.18 14.12L21.45 15.46C20.97 15.2 20.53 15.12 20.35 15.18C20.19 15.24 20.16 15.34 20.15 15.39C20.14 15.44 20.13 15.53 20.22 15.64C20.31 15.74 21.26 16.12 21.26 16.12C22.27 16.53 22.75 17.57 22.37 18.54C22.17 19.04 21.77 19.42 21.27 19.61Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Credit Cards
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "Loans"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("Loans")}
              >
                <svg
                  width="24.253113"
                  height="24.999969"
                  viewBox="0 0 24.2531 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M14.11 15.33C18.31 15.33 21.72 11.89 21.72 7.66C21.72 3.44 18.31 0 14.11 0C9.92 0 6.51 3.44 6.51 7.66C6.51 11.89 9.92 15.33 14.11 15.33ZM11.67 10.06C11.89 9.72 12.34 9.62 12.68 9.84C13.18 10.17 13.36 10.2 14.01 10.19C14.65 10.19 15.02 9.71 15.09 9.28C15.12 9.06 15.14 8.54 14.49 8.32C13.74 8.05 12.96 7.74 12.43 7.32C11.89 6.9 11.64 6.17 11.78 5.42C11.94 4.6 12.5 3.96 13.26 3.73C13.27 3.73 13.28 3.72 13.28 3.72L13.28 3.44C13.28 3.04 13.61 2.71 14.02 2.71C14.42 2.71 14.75 3.04 14.75 3.44L14.75 3.68C15.25 3.79 15.59 4.02 15.73 4.13C16.06 4.37 16.12 4.83 15.88 5.15C15.64 5.48 15.18 5.54 14.86 5.3C14.71 5.19 14.29 4.95 13.69 5.13C13.33 5.24 13.24 5.59 13.22 5.69C13.18 5.9 13.23 6.09 13.33 6.17C13.7 6.46 14.37 6.72 14.98 6.94C16.1 7.33 16.73 8.37 16.53 9.52C16.44 10.08 16.15 10.61 15.73 10.99C15.45 11.26 15.11 11.44 14.75 11.55L14.75 11.88C14.75 12.29 14.42 12.62 14.02 12.62C13.61 12.62 13.28 12.29 13.28 11.88L13.28 11.62C12.81 11.57 12.41 11.42 11.88 11.07C11.54 10.85 11.45 10.39 11.67 10.06Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M2.4 17.79L0.73 17.79C0.32 17.79 0 18.12 0 18.52L0 24.26C0 24.67 0.32 24.99 0.73 24.99L2.4 24.99L2.4 17.79L2.4 17.79Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M24.03 17.74C22.66 16.37 20.43 16.37 19.06 17.74L16.86 19.93L15.97 20.83C15.6 21.2 15.11 21.4 14.6 21.4L10.23 21.4C9.83 21.4 9.49 21.1 9.47 20.7C9.45 20.28 9.79 19.93 10.21 19.93L14.65 19.93C15.54 19.93 16.32 19.3 16.47 18.42C16.5 18.22 16.52 18.01 16.52 17.8C16.52 17.39 16.19 17.06 15.79 17.06L13.36 17.06C12.56 17.06 11.8 16.7 10.99 16.32C10.14 15.92 9.26 15.5 8.24 15.44C7.34 15.38 6.44 15.47 5.56 15.73C4.63 16 3.95 16.83 3.87 17.79C3.87 17.79 3.86 17.79 3.86 17.79L3.86 24.99L16.47 25C17.34 25 18.15 24.66 18.77 24.04L24.03 18.78C24.32 18.49 24.32 18.03 24.03 17.74Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Loans
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "Services"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("Services")}
              >
                <svg
                  width="25.000000"
                  height="25.000000"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip0_256">
                      <rect
                        id="service 1"
                        rx="0.000000"
                        width="24.000000"
                        height="24.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="service 1"
                    rx="0.000000"
                    width="24.000000"
                    height="24.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="#C5C5CF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip0_256)">
                    <path
                      id="Vector"
                      d="M24.78 1.25L23.74 0.21C23.53 -0.01 23.2 -0.07 22.92 0.06L17.36 2.52C17.14 2.62 16.99 2.82 16.94 3.05C16.9 3.29 16.98 3.53 17.15 3.7L21.29 7.84C21.46 8.01 21.7 8.09 21.94 8.05C22.17 8 22.37 7.85 22.47 7.63L24.93 2.07C25.06 1.79 25 1.46 24.78 1.25Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M4.73 16.12L0.64 20.21C-0.22 21.07 -0.22 22.46 0.64 23.32L1.67 24.35C2.53 25.21 3.92 25.21 4.78 24.35L8.87 20.26L4.73 16.12ZM4.27 21.77C3.98 22.05 3.52 22.05 3.23 21.77C2.95 21.48 2.95 21.02 3.23 20.73L5.25 18.71C5.54 18.43 6 18.43 6.29 18.71C6.57 19 6.57 19.46 6.29 19.75L4.27 21.77Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M11.98 17.16L7.83 13.01C7.26 12.44 6.33 12.44 5.76 13.01C5.19 13.58 5.19 14.51 5.76 15.08L9.91 19.23C10.48 19.8 11.41 19.8 11.98 19.23C12.55 18.66 12.55 17.73 11.98 17.16Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M19.22 7.84L17.15 5.77L11.46 11.46C10.89 10.89 9.96 10.89 9.39 11.46L8.87 11.98L13.01 16.12L13.53 15.6C14.1 15.03 14.1 14.1 13.53 13.53L19.22 7.84Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M23.71 17.49C22.52 16.3 21.09 16.05 19.45 16.34L16.12 13.01L15.33 13.81C15.59 14.79 15.33 15.87 14.57 16.64L14.05 17.15L16.34 19.45C16.11 20.74 16.13 21.84 16.93 23.03C17.86 24.4 19.48 25.18 21.18 24.95C21.46 24.91 21.7 24.71 21.79 24.44C21.88 24.17 21.81 23.88 21.61 23.68L20.6 22.67L20.6 20.6L22.67 20.6L23.68 21.6C23.88 21.8 24.17 21.87 24.44 21.78C24.71 21.69 24.91 21.45 24.94 21.17C25.12 19.84 24.69 18.47 23.71 17.49Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      id="Vector"
                      d="M8.64 5.53C8.93 3.9 8.69 2.48 7.49 1.27C6.67 0.45 5.57 0 4.39 0C4.2 0 4 0.01 3.81 0.03C3.53 0.07 3.29 0.27 3.2 0.53C3.11 0.8 3.18 1.1 3.38 1.3L4.39 2.3L4.39 4.39L2.31 4.39L1.3 3.37C1.1 3.17 0.81 3.1 0.54 3.19C0.27 3.28 0.08 3.52 0.04 3.8C-0.19 5.42 0.52 7.07 1.95 8.04C3.15 8.85 4.25 8.87 5.53 8.64L7.84 10.94L8.35 10.42C9.12 9.66 10.2 9.4 11.18 9.66L11.98 8.87L8.64 5.53Z"
                      fill="#B1B1B1"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Services
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "MyPrivileges"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("MyPrivileges")}
              >
                <svg
                  width="24.118896"
                  height="25.000000"
                  viewBox="0 0 24.1189 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M4.37 16.66C4.62 16.81 4.83 17.01 5.01 17.23L8.26 17.23L8.26 14.08L6.72 13.12C6.37 12.91 6.27 12.45 6.48 12.11C6.69 11.77 7.14 11.66 7.49 11.87L8.99 12.81L10.3 11.99C7.69 8.41 8.29 3.33 11.77 0.46C6.04 -1.46 0.02 2.81 6.1e-5 8.94C-0.02 12.19 1.71 15.08 4.37 16.66Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M5.46 18.7L12.4 18.7L12.4 20.36L5.46 20.36L5.46 18.7Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M9.73 14.08L9.73 17.23L12.84 17.23C13.01 17.01 13.22 16.83 13.46 16.68C14.12 16.29 14.73 15.81 15.28 15.27C13.75 14.92 12.37 14.16 11.28 13.11C11.24 13.14 10.94 13.32 9.73 14.08Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M17.13 0C13.29 0 10.15 3.17 10.15 7.03C10.15 10.66 12.94 13.66 16.51 13.98C20.64 14.35 24.11 11.07 24.11 7.03C24.11 3.18 20.98 0 17.13 0ZM17.87 10.2L17.87 10.36C17.87 10.76 17.54 11.09 17.13 11.09C16.73 11.09 16.4 10.76 16.4 10.36L16.4 10.29C16.06 10.23 15.76 10.1 15.37 9.84C15.03 9.62 14.93 9.17 15.15 8.83C15.38 8.49 15.83 8.4 16.17 8.62C16.52 8.85 16.64 8.87 17.13 8.87C17.6 8.86 17.79 8.49 17.82 8.28C17.86 8.08 17.82 7.82 17.46 7.69C16.85 7.48 16.23 7.23 15.78 6.88C14.78 6.1 15.08 4.29 16.4 3.81L16.4 3.71C16.4 3.3 16.73 2.98 17.13 2.98C17.54 2.98 17.87 3.3 17.87 3.71L17.87 3.75C18.23 3.85 18.52 4.03 18.72 4.24C19 4.53 19 4.99 18.71 5.27C18.42 5.56 17.96 5.55 17.67 5.27C17.63 5.23 17.41 5.04 16.92 5.18C16.72 5.24 16.67 5.45 16.66 5.51C16.64 5.63 16.67 5.72 16.69 5.73C16.96 5.95 17.48 6.15 17.94 6.31C19.87 6.99 19.64 9.56 17.87 10.2Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M6.64 22.7C6.64 23.97 7.66 25 8.93 25C10.2 25 11.22 23.97 11.22 22.7L11.22 21.82L6.64 21.82L6.64 22.7Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  My Privileges
                </span>
              </li>
              <li
                className={`flex items-center space-x-6 p-2 rounded-sm cursor-pointer border-l-4 ${
                  active === "Setting"
                    ? "border-blue-500 fill-blue-500 text-blue-500 font-bold"
                    : "border-transparent hover:bg-gray-200 fill-[#B1B1B1] hover:rounded-lg"
                }`}
                onClick={() => setActive("Setting")}
              >
                <svg
                  width="25.000061"
                  height="25.000000"
                  viewBox="0 0 25.0001 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M22.69 9.41L22.16 9.41C21.99 8.87 21.77 8.35 21.51 7.84L21.89 7.47C22.8 6.56 22.78 5.1 21.89 4.21L20.78 3.1C19.89 2.22 18.44 2.19 17.52 3.1L17.15 3.48C16.64 3.22 16.12 3 15.58 2.83L15.58 2.3C15.58 1.03 14.55 0 13.28 0L11.71 0C10.44 0 9.41 1.03 9.41 2.3L9.41 2.83C8.87 3 8.35 3.22 7.84 3.48L7.47 3.1C6.56 2.19 5.1 2.21 4.21 3.1L3.1 4.21C2.22 5.1 2.19 6.56 3.1 7.47L3.48 7.84C3.22 8.35 3 8.87 2.83 9.41L2.3 9.41C1.03 9.41 0 10.44 0 11.71L0 13.28C0 14.55 1.03 15.58 2.3 15.58L2.83 15.58C3 16.12 3.22 16.64 3.48 17.15L3.1 17.52C2.19 18.43 2.21 19.89 3.1 20.78L4.21 21.89C5.1 22.77 6.56 22.8 7.47 21.89L7.84 21.51C8.35 21.77 8.87 21.99 9.41 22.16L9.41 22.69C9.41 23.96 10.44 25 11.71 25L13.28 25C14.55 25 15.58 23.96 15.58 22.69L15.58 22.16C16.12 21.99 16.64 21.77 17.15 21.51L17.52 21.89C18.43 22.8 19.89 22.78 20.78 21.89L21.89 20.78C22.77 19.89 22.8 18.43 21.89 17.52L21.51 17.15C21.77 16.64 21.99 16.12 22.16 15.58L22.69 15.58C23.96 15.58 25 14.55 25 13.28L25 11.71C25 10.44 23.96 9.41 22.69 9.41ZM12.5 17.93C9.5 17.93 7.06 15.49 7.06 12.5C7.06 9.5 9.5 7.06 12.5 7.06C15.49 7.06 17.93 9.5 17.93 12.5C17.93 15.49 15.49 17.93 12.5 17.93Z"
                    fill="#B1B1B1"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
  
                <span className="text-lg font-medium leading-normal text-[#B1B1B1]">
                  Setting
                </span>
              </li>
            </ul>
          </nav>
        </aside>
      </>
    );
  };

export default SideBar;