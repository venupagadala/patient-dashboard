import React from 'react';

// Assets imported as local SVGs from your assets/header folder
import logo from '../assets/header/TestLogo.svg';
import overviewIcon from '../assets/header/home_FILL0_wght300_GRAD0_opsz24.svg';
import patientsIcon from '../assets/header/group_FILL0_wght300_GRAD0_opsz24.svg';
import scheduleIcon from '../assets/header/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import messageIcon from '../assets/header/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import transactionsIcon from '../assets/header/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import settingsIcon from '../assets/header/settings_FILL0_wght300_GRAD0_opsz24.svg';
import moreIcon from '../assets/header/more_vert_FILL0_wght300_GRAD0_opsz24.svg';
import doctorAvatar from '../assets/header/senior-woman-doctor.png';

export default function Header() {
  const navItems = [
    { name: 'Overview', icon: overviewIcon },
    { name: 'Patients', icon: patientsIcon, active: true },
    { name: 'Schedule', icon: scheduleIcon },
    { name: 'Message', icon: messageIcon },
    { name: 'Transactions', icon: transactionsIcon },
  ];

  return (
    <header className="bg-white rounded-full mx-4 mt-4 px-4 lg:px-8 py-3 flex justify-between items-center shadow-sm sticky top-4 z-50 font-manrope">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src={logo} alt="TechCare" className="h-8 lg:h-10" />
      </div>

      {/* Navigation - Tablet and Desktop Only */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-200
              ${item.active ? 'bg-[#01F0D0]' : 'hover:bg-gray-100'}
            `}
          >
            <img src={item.icon} alt="" className="w-4 h-4" />
            <span className="text-[14px] font-bold leading-[19px] text-[#072633]">
              {item.name}
            </span>
          </div>
        ))}
      </nav>

      {/* Profile & Settings Section */}
      <div className="flex items-center gap-2 lg:gap-3 lg:border-l lg:pl-6 border-gray-100">
        <div className="flex items-center gap-3">
          <img 
            src={doctorAvatar} 
            className="w-9 h-9 lg:w-11 lg:h-11 rounded-full border border-gray-50" 
            alt="Dr. Jose Simmons" 
          />
          <div className="hidden xl:block">
            <p className="text-[14px] font-bold leading-[19px] text-[#072633]">
              Dr. Jose Simmons
            </p>
            <p className="text-[12px] opacity-50 font-medium">
              General Practitioner
            </p>
          </div>
        </div>

        {/* Global Action Icons */}
        <div className="flex items-center gap-1 lg:gap-3 lg:ml-4">
          <div className="p-2 hover:bg-gray-50 rounded-full cursor-pointer transition-colors">
            <img src={settingsIcon} className="w-5 h-5" alt="Settings" />
          </div>
          <div className="p-2 hover:bg-gray-50 rounded-full cursor-pointer transition-colors">
            <img src={moreIcon} className="w-5 h-5" alt="Actions" />
          </div>
        </div>
      </div>
    </header>
  );
}