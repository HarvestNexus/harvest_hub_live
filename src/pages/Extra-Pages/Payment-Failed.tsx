import React from "react";
import Footer from "../General-landing-page/Footer";

const CheckoutFailed: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white py-2">
                <div className="mx-auto max-w-4xl rounded-full border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-center gap-12 px-8 py-3">

                        <img src="/images/logo.avif" alt="Logo" className="h-10" />


                        <nav className="flex items-center gap-8 text-sm font-medium text-gray-800">
                            <a href="#" className="hover:text-green-700">
                                Home
                            </a>

                            <a href="#" className="hover:text-green-700">
                                Marketplace
                            </a>

                            <div className="relative group flex items-center gap-1 cursor-pointer">
                                <span className="hover:text-green-700">Services</span>
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>

                                <div className="absolute left-0 top-full z-10 mt-2 hidden w-44 rounded-md border bg-white shadow-md group-hover:block">
                                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                                        Service 1
                                    </a>
                                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                                        Service 2
                                    </a>
                                </div>
                            </div>

                            <div className="relative group flex items-center gap-1 cursor-pointer">
                                <span className="hover:text-green-700">Resources</span>
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>

                                <div className="absolute left-0 top-full z-10 mt-2 hidden w-44 rounded-md border bg-white shadow-md group-hover:block">
                                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                                        Blog
                                    </a>
                                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                                        Help Center
                                    </a>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>


            <section
                className="relative h-[32rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/12.png')" }}
            >
                <div className="absolute inset-0 bg-black/50">

                    <div className="mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-full border bg-white px-4 py-2 shadow-md">

                        <div className="flex w-[40%] items-center rounded-full border px-4 py-2">
                            <svg
                                className="mr-3 h-5 w-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>

                            <input
                                type="text"
                                placeholder="Search for fresh products, farms and prices..."
                                className="w-full text-sm outline-none placeholder:text-gray-400"
                            />
                        </div>


                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-600 hover:text-green-700 cursor-pointer">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M5.5 21a6.5 6.5 0 0113 0" />
                                </svg>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-600 hover:text-green-700 cursor-pointer">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
                                </svg>
                            </div>


                            <div className="flex h-10 w-10 items-center justify-center rounded-full border text-gray-600 hover:text-green-700 cursor-pointer">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className="mt-32 text-center text-white">
                        <h1 className="text-4xl font-semibold">Checkout</h1>

                        <span className="mt-4 inline-block rounded-full border border-gray-200 bg-white px-6 py-2 text-sm text-gray-600 shadow-sm">
                            Home / Marketplace / Checkout
                        </span>
                    </div>
                </div>
            </section>


            <main className="flex justify-center px-4 py-24">
                <div className="max-w-lg text-center">
                    <div className="mx-auto mb-6 relative h-20 w-20">
                        <div
                            className="absolute inset-0 flex items-center justify-center text-3xl text-red-400"
                            style={{
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
                                border: '2px solid rgb(248 113 113)',
                                backgroundColor: 'white'
                            }}
                        >
                            !
                        </div>
                    </div>

                    <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                        Payment Failed
                    </h2>

                    <p className="mb-8 text-sm leading-relaxed text-gray-600">
                        It seems there was a problem processing your payment. Please check
                        your internet connection or try again in a few minutes.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="rounded bg-green-700 px-6 py-2 text-sm font-medium text-white hover:bg-green-800">
                            Retry Payment
                        </button>

                        <button className="rounded border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                            Change Payment method
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CheckoutFailed;