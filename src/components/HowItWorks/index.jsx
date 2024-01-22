import React from "react";
import { List, Text } from "components";

const HowItWorks = () => {
    return (
        <div className="bg-gray-50_01 flex flex-col items-center justify-end p-14 md:px-10 sm:px-5 w-full sm:pt-[36px]">
            <div className="flex flex-col gap-7 items-center justify-start max-w-[1204px] mx-auto w-full">
                <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-800 w-full"
                    size="txtMontserratBold32"
                >
                    How it Works
                </Text>
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col gap-[23px] items-center justify-center w-full">
                        <List
                            className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                            orientation="horizontal"
                        >
                            <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
                                <Text
                                    className="leading-[24.00px] text-[15px] text-black-900"
                                    size="txtMontserratRegular15Black900"
                                >
                                    <span className="text-indigo-800 font-montserrat text-left font-semibold">
                                        <>
                                            1. Select Your Age-Specific Package
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-700 font-montserrat text-left font-normal">
                                        <>
                                            Under 60 Years
                                            <br />
                                            60 Years and Above
                                        </>
                                    </span>
                                </Text>
                            </div>
                            <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
                                <Text
                                    className="leading-[24.00px] text-[15px] text-black-900"
                                    size="txtMontserratRegular15Black900"
                                >
                                    <span className="text-indigo-800 font-montserrat text-left font-semibold">
                                        <>
                                            2. Choose Your Plan
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-700 font-montserrat text-left font-normal">
                                        Select a plan that fits the healthcare needs of your
                                        family.
                                    </span>
                                </Text>
                            </div>
                            <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
                                <Text
                                    className="leading-[24.00px] text-[15px] text-black-900"
                                    size="txtMontserratRegular15Black900"
                                >
                                    <span className="text-indigo-800 font-montserrat text-left font-semibold">
                                        3. Provide Details
                                    </span>
                                    <span className="text-indigo-800 font-montserrat text-left font-normal">
                                        <>
                                            {" "}
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-700 font-montserrat text-left font-normal">
                                        Fill in the necessary information about your dependents
                                        in Ghana.
                                    </span>
                                </Text>
                            </div>
                        </List>
                        <List
                            className="sm:flex-col flex flex-row gap-[25px] justify-center w-full"
                            orientation="horizontal"
                        >
                            <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
                                <Text
                                    className="leading-[24.00px] text-[15px] text-black-900"
                                    size="txtMontserratRegular15Black900"
                                >
                                    <span className="text-indigo-800 font-montserrat text-left font-semibold">
                                        <>
                                            4. Make Payment
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-700 font-montserrat text-left font-normal">
                                        Securely make your payment online using our convenient
                                        payment options.
                                    </span>
                                </Text>
                            </div>
                            <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-center sm:ml-[0] p-6 sm:px-5 rounded-lg shadow-bs w-96 sm:w-full sm:items-start">
                                <Text
                                    className="leading-[24.00px] text-[15px] text-black-900"
                                    size="txtMontserratRegular15Black900"
                                >
                                    <span className="text-indigo-800 font-montserrat text-left font-semibold">
                                        <>
                                            5. Instant Confirmation
                                            <br />
                                        </>
                                    </span>
                                    <span className="text-gray-700 font-montserrat text-left font-normal">
                                        Receive instant confirmation and policy details via email.
                                    </span>
                                </Text>
                            </div>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { HowItWorks };