import React from "react";
import { Text } from 'components';

const Compare = () => {
    return (
        <table className="table-auto compare-table">
            <thead className="h-12">
                <th></th>
                <th>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        Enhanced
                    </Text>
                </th>
                <th>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        Enhanced Plus
                    </Text>
                </th>
                <th>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        Ultimate
                    </Text>
                </th>
            </thead>
            <tbody>
                <tr className="border-slate-300 border-b h-14 bg-gray-200 text-center font-bold text-gray-600">
                    <td colspan="4"> Out-Patient Benefits</td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">Total max benefit per person per annum</td>
                    <td className='text-center'>
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 4,000
                        </Text>
                    </td>
                    <td className='text-center'>
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 6,000
                        </Text>
                    </td>
                    <td className='text-center'>
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 7,500
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">General Practitioner Consultation</td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Specialist Consultation <span className='font-normal text-gray-400'>(Pediatrician, Gynecologists, Ophthalmology, Cardiology, etc... )</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Procedures Pathology <span className='font-normal text-gray-400'>Laboratory Test required by doctor (Biopsy, Histology, etc...)</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Imaging <br />
                        <span className='ml-10 font-normal text-gray-400'>
                            X-ray, USG Scan, CT Scan (No limit on body parts), MRI (No limit on body part)
                        </span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Out Patient / Minor Surgery <br />
                        <ul className='ml-6 font-normal text-gray-400'>
                            <li>Suturing of lacerations, incisions and Drainage </li>
                            <li>Post-Surgery wound dressing</li>
                        </ul>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Prescribed drugs <br />

                        <div className='ml-6 font-normal text-gray-400'>
                            <ul>
                                <li>Acute Medicines</li>
                                <li>Chronic Medicines & Treatment</li>
                            </ul>
                            <br />
                            <p>
                                For pre-existing conditions (i.e. Diabetes, Tuberculosis, Hepatitis B and Hypertension) disclosed.
                                Including Glucose Strips, Insulin Pen.
                            </p>
                        </div>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">
                        Eye Care
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Optical - Optometry, frames and lenses (every 2 years)
                        <p className='ml-6 mt-4 font-normal text-gray-400'>
                            <strong className='text-black-900'>NB:</strong> If there is a change in prescription within the 2-year period, the cost of lens
                            would be covered within the benefit limit
                        </p>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered up to GH₵ 600
                        </Text>
                    </td>
                    <td rowSpan={"3"} className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered up to GH₵ 1,000
                        </Text>
                    </td>
                    <td rowSpan={"3"} className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered up to GH₵ 1,500
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Dentistry: Basic Dental Procedures

                        <p className='ml-6 font-normal text-gray-400'>
                            Consultation and Examination, X-ray, Extractions, Fillings, Scaling and Polishing
                        </p>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered up to GH₵ 600
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Special Dental Procedures

                        <ul className='ml-6 font-normal text-gray-400'>
                            <li>Root Canal Treatment</li>
                            <li>Periodontal Treatment</li>
                        </ul>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Not Covered
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Auxiliary Services &nbsp;
                        <span className='font-normal text-gray-400'>
                            ( Upon referral & at the tertiary institutions and other designated centers -
                            Accra Physiotherapy Center, 37 Hospital, Korle Bu and Spinal Clinic )
                        </span>

                        <div className='ml-6 font-normal text-gray-400'>
                            <ul className='text-gray-400'>
                                <li className='pb-[3px]'>Physiotherapy</li>
                                <li className='pb-[3px]'>Speech Therapy</li>
                                <li className='pb-[3px]'>Chiropractic</li>
                            </ul>
                            <p className='text-gray-400 my-3'>
                                Ambulance Services ( Upon referral & at the tertiary institutions and other designated centers)
                            </p>
                        </div>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered within benefit limit
                        </Text>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered within benefit limit
                        </Text>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Covered within benefit limit
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Complementary Medicine &nbsp;
                        <span className='font-normal text-gray-400'>
                            - Herbal Medicine, Chiropractic, Acupuncture ( Upon referral & at the tertiary institutions and other designated centers
                            - Accra Physiotherapy Center, 37 Hospital, Korle Bu and Spinal Clinic )
                        </span>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Herbal Medicine
                        </Text>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Chiropractic, Herbal Medicine
                        </Text>
                    </td>
                    <td className="text-center">
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratMedium20"
                        >
                            Acupuncture, Chiropractic, Herbal Medicine
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14 bg-gray-200 text-center font-bold text-gray-600">
                    <td colspan="4">In-Patient Benefits</td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className="font-semibold border-slate-300 border-r">Total max benefit per person per annum</td>
                    <td> 
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 30,000
                        </Text>
                    </td>
                    <td> 
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 50,000
                        </Text>
                    </td>
                    <td> 
                        <Text
                            className="text-indigo-800 text-center"
                            size="txtMontserratSemiBold18"
                        >
                            GH₵ 80,000
                        </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Hospital Accommodation
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Side Ward
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Private Ward
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Private Ward
                        </Text>    
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Fees <span className='font-normal text-gray-400'>for Doctors, Specialists, Surgeons, Anesthetists, Physiotherapist</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Surgery (Major and Minor) <span className='font-normal text-gray-400'>
                            (e.g., Piles, Fibroid, Hernia, Thyroid, Prostate, Spine, etc.)
                        </span>
                        <p className='font-normal text-gray-400'>
                            Laparoscopic procedures are to be disclosed at the point of registration
                        </p>
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to the cost of the same traditional procedure / surgery
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to the cost of the same traditional procedure / surgery
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to the cost of the same traditional procedure / surgery
                        </Text>    
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Surgical Procedure <span className='font-normal text-gray-400'>(Minor & Major )</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Operating Theatre Fees
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Ward Medicines & Take home Medicines
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Consumables <span className='font-normal text-gray-400'>(Infusion, Materials for Dressing, Sutures, Bandages, Syringes, Catheters, Giving Sets, Cannulae )</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Pathology Procedures <span className='font-normal text-gray-400'>- Lab. Tests requested by a doctor. (Biopsies, Histology tests)</span>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Imaging
                        <ul className='ml-6 font-normal text-gray-400'>
                            <li>X-ray</li>
                            <li>USG Scan</li>
                            <li>CT Scan (No limit on body parts)</li>
                            <li>MRI (No limit on body parts)</li>
                        </ul>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Intensive Care
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Auxiliary Services <br />

                        <div className='ml-6 font-normal text-gray-400'>
                            <ul>
                                <li>Ambulance</li>
                                <li>Physiotherapy</li>
                                <li>Emergencies as a result of legal addiction e.g. alcoholism, smoking, etc.</li>
                            </ul>
                        </div>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                    <td className='text-center'>
                    <Text
                        className="text-indigo-800 text-center"
                        size="txtMontserratSemiBold18"
                    >
                        ✔
                    </Text>
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Cancer Treatment <br />
                        <ul className='ml-6 font-normal text-gray-400'>
                            <li>Investigations (CT Scan MRI, Angiography), Radiotherapy, Chemotherapy, Surgery </li>
                            <li>Organ Transplant (Heart, Kidney, Liver)</li>
                            <li>Kidney Dialysis</li>
                        </ul>
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to GH₵ 20,000
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to GH₵ 40,000
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                Covered up to GH₵ 60,000
                        </Text>    
                    </td>
                </tr>
                <tr className="border-slate-300 border-b h-14">
                    <td className='font-semibold'>
                        Annual Medical Checkup/ Screening <span className='font-normal text-gray-400'>(At designated Centers)</span>
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                BP, BMI, FBS, FBC
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                BP, BMI, FBS, FBC
                        </Text>    
                    </td>
                    <td>
                        <Text
                                className="text-indigo-800 text-center"
                                size="txtMontserratMedium20"
                            >
                                BP, BMI, FBS, FBC
                        </Text>    
                    </td>
                </tr>
            </tbody>
            <tbody className="insurance-info">
                <tr className="border-slate-300 border-b h-14 bg-gray-200 text-center font-bold text-gray-600">
                    <td colspan="4">Additional Benefits</td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td className='font-normal'>
                        <p>Vitamins</p>
                    </td>
                    <td colspan="3" className='text-center h-full'>
                        <p>
                            Covered within benefit limit
                        </p>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Mobile Pharmacy
                    </td>
                    <td colspan="3" className='text-center items-start justify-center'>
                        <div>
                            Delivery of prescribed medications at place of convenience
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Glico Health Beneficiary App
                    </td>
                    <td colspan="3" className='text-center bg-yellow-100  items-start justify-center'>
                        <div>
                            About Glico Health Care, Contact numbers, Exclusions, FAQ's and Service Provider accessibility
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Client Portal
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Access to online utilization report.
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Quarterly News Letters
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Health Tips, Updates on policy, Goodwill messages from Glico team, etc. Daily updates on health related issues on social
                            media platforms (i.e. INSTAGRAM, LINKEDIN, FACEBOOK, TWITTER)
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Annual Health Seminar
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Education on ailment trends
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Special Assistance at accredited Government/Regional/Tertiary hospitals
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Designated Reps at Government/Regional/Tertiary accredited hospitals to assist in swift service delivery
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        E-Medicine Service
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Access to doctors for consultation by virtual means at the comfort of your home when unable to visit the hospital
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Chronic condition management
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            A dedicated team will call known members with chronic conditions to have an update of their medications taken. These
                            medications will be supplied to the members on monthly basis as and when prescription changes. The program tends to reduce
                            cost and the overall utilization of the group.
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Death Benefit For Enrollee
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            GHS 10,000 will be paid to the family upon death of enrollee
                        </div>
                    </td>
                </tr>
                <tr className='border-slate-300 border-b h-14'>
                    <td>
                        Auxiliary Services
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Covered within benefit limit
                        </div>
                    </td>
                </tr>
                <tr className='h-14'>
                    <td>
                        Complementary Medicine
                    </td>
                    <td colspan="3" className='text-center'>
                        <div>
                            Herbal Medicine
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export { Compare };