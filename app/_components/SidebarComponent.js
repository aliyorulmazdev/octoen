import React from 'react';

function SidebarComponent() {
  return (
    <div className="h-screen bg-blue-900 p-4 relative">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="h-12 w-auto absolute top-10 left-20"
      />
      <div className="absolute inset-0 z-0 opacity-10 bg-center bg-cover" style={{ backgroundImage: "url('/assets/bg.png')" }}></div>
      <div className="relative z-10">
        <div className="mb-6 p-10 pt-24">
          <h2 className="text-md  mb-2 text-white border-b-2 border-white">Genel Bilgiler</h2>
          <ul className="text-white">
            <li className="py-1">Kullanıcı Bilgileri</li>
            <li className="py-1">Makineler</li>
            <li className="py-1">Mağaza</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default SidebarComponent;
