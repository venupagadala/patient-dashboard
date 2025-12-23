import React from 'react';
import moreIcon from '../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';
import searchIcon from '../assets/search_FILL0_wght300_GRAD0_opsz24.svg';

export default function Sidebar({ patients, activePatient }) {
  return (
    <aside className="hidden lg:block lg:col-span-3 bg-white rounded-2xl py-5 shadow-sm h-[800px] overflow-hidden flex flex-col">
      <div className="px-5 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-extrabold text-[#072635]">Patients</h2>
        <img src={searchIcon} alt="Search" className="w-5 h-5 cursor-pointer" />
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {patients.map((patient) => (
          <div 
            key={patient.name}
            className={`
              flex items-center justify-between px-5 py-4 cursor-pointer transition-colors
              ${patient.name === activePatient ? 'bg-[#D8FCF7]' : 'hover:bg-gray-50'}
            `}
          >
            <div className="flex items-center gap-3">
              <img 
                src={patient.profile_picture} 
                className="w-12 h-12 rounded-full" 
                alt={patient.name} 
              />
              <div className="flex flex-col">
                {/* Name Styling: Bold 14px/19px Manrope #072635 */}
                <span className="font-manrope font-bold text-[14px] leading-[19px] text-[#072635]">
                  {patient.name}
                </span>
                {/* Detail Styling: Normal 14px/19px Manrope #707070 */}
                <span className="font-manrope text-[14px] leading-[19px] text-[#707070]">
                  {patient.gender}, {patient.age}
                </span>
              </div>
            </div>
            <img src={moreIcon} alt="Actions" className="w-5 h-5 opacity-70" />
          </div>
        ))}
      </div>
    </aside>
  );
}