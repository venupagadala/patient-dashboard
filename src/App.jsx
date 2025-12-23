import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { fetchJessicaData } from './services/api';
import BPChart from './features/diagnosis/BPChart';
import VitalCard from './components/VitalCard';

// Assets
import respIcon from './assets/respiratory_rate.svg';
import tempIcon from './assets/temperature.svg';
import heartIcon from './assets/heart_rate.svg';

export default function App() {
  const [patient, setPatient] = useState(null);
  const [allPatients, setAllPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: { 'Authorization': `Basic ${btoa('coalition:skills-test')}` }
        });
        const data = await response.json();
        setAllPatients(data);
        setPatient(data.find(p => p.name === "Jessica Taylor"));
      } catch (error) {
        console.error("Dashboard Load Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center font-manrope font-bold text-[#01F0D0]">Loading...</div>;

  const current = patient?.diagnosis_history?.[0] || {};

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-manrope text-[#072635] pb-8">
      <Header />
      <main className="max-w-[1600px] mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Sidebar patients={allPatients} activePatient={patient?.name} />
        
        <section className="col-span-1 lg:col-span-6 flex flex-col gap-6 min-w-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm overflow-hidden">
            <h2 className="text-2xl font-extrabold mb-6">Diagnosis History</h2>
            <div className="bg-[#F4F0FE] rounded-2xl p-6 flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1 w-full min-h-[250px] relative"><BPChart history={patient?.diagnosis_history || []} /></div>
              <div className="w-full md:w-44 space-y-6 flex-shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-[#E66FD2] rounded-full" /><span className="font-bold text-[14px]">Systolic</span></div>
                  <p className="text-2xl font-bold">{current.blood_pressure?.systolic?.value}</p>
                  <p className="text-xs font-bold opacity-70 italic">↑ {current.blood_pressure?.systolic?.levels}</p>
                </div>
                <hr className="border-[#CBCBCB]" />
                <div>
                  <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-[#8C6FE6] rounded-full" /><span className="font-bold text-[14px]">Diastolic</span></div>
                  <p className="text-2xl font-bold">{current.blood_pressure?.diastolic?.value}</p>
                  <p className="text-xs font-bold opacity-70 italic">↓ {current.blood_pressure?.diastolic?.levels}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <VitalCard title="Respiratory Rate" value={`${current.respiratory_rate?.value} bpm`} status={current.respiratory_rate?.levels} icon={respIcon} bgColor="bg-[#E0F3FA]" />
              <VitalCard title="Temperature" value={`${current.temperature?.value}°F`} status={current.temperature?.levels} icon={tempIcon} bgColor="bg-[#FFE6E9]" />
              <VitalCard title="Heart Rate" value={`${current.heart_rate?.value} bpm`} status={current.heart_rate?.levels} icon={heartIcon} bgColor="bg-[#FFE6F1]" />
            </div>
          </div>
        </section>

        <aside className="col-span-1 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center">
            <img src={patient?.profile_picture} className="w-48 h-48 rounded-full mb-6 border-4 border-[#01F0D0]/10" alt="" />
            <h1 className="text-2xl font-extrabold mb-8">{patient?.name}</h1>
            <div className="w-full space-y-6">
               <div className="flex gap-4 items-center"><div className="bg-[#F6F7F8] p-3 rounded-full">📅</div><div><p className="text-[12px] opacity-50 font-bold uppercase">Date of Birth</p><p className="text-[14px] font-bold">{patient?.date_of_birth}</p></div></div>
               <div className="flex gap-4 items-center"><div className="bg-[#F6F7F8] p-3 rounded-full">📞</div><div><p className="text-[12px] opacity-50 font-bold uppercase">Contact Info.</p><p className="text-[14px] font-bold">{patient?.phone_number}</p></div></div>
            </div>
            <button className="bg-[#01F0D0] w-full py-4 mt-10 rounded-full font-bold transition-all hover:bg-[#00d8bc] active:scale-95 shadow-sm">Show All Information</button>
          </div>
        </aside>
      </main>
    </div>
  );
}