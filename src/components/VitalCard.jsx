import React from 'react';

export default function VitalCard({ title, value, status, icon, bgColor }) {
  return (
    <div 
      className={`
        ${bgColor} p-5 rounded-2xl cursor-pointer shadow-sm
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-xl hover:brightness-105
        active:scale-95 focus-within:ring-2 focus-within:ring-[#01F0D0]
        flex flex-col items-center sm:items-start group
      `}
      tabIndex="0"
    >
      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>
      <p className="text-sm font-semibold text-[#07263E] opacity-70 uppercase tracking-tight">{title}</p>
      <p className="text-3xl font-extrabold text-[#07263E] mt-1 mb-3">{value}</p>
      <div className="flex items-center gap-2 text-sm font-medium text-[#07263E]">
        <span className="opacity-80">
          {status.includes('Higher') ? '▲ ' : status.includes('Lower') ? '▼ ' : ''}
          {status}
        </span>
      </div>
    </div>
  );
}