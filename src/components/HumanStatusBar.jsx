import React, { useState, useEffect } from 'react';
import { Clock, Disc3, Sparkles, Terminal } from 'lucide-react';

export default function HumanStatusBar({ onOpenTerminal }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Prayagraj local time (IST = UTC+5:30)
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm text-xs text-[#2A3E24]">
        
        {/* Prayagraj Time */}
        <div className="flex items-center gap-2 font-medium">
          <Clock className="w-3.5 h-3.5 text-[#507444]" />
          <span>Prayagraj, IN:</span>
          <span className="font-mono font-bold text-[#1C2C1A]">{timeStr || 'Loading...'} (IST)</span>
        </div>

        {/* Current Coding Focus */}
        <div className="hidden sm:flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Focus:</span>
          <span className="font-semibold text-[#1F311C]">Fine-tuning AI Vision Models & Scalable Cloud Backends</span>
        </div>

        {/* Interactive Terminal Launcher Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#344C2D] text-white hover:bg-[#25391F] transition-all font-mono text-[11px] shadow-sm"
            title="Open Interactive Developer CLI"
          >
            <Terminal className="w-3 h-3 text-[#A6C99B]" />
            <span>Ctrl + K Terminal</span>
          </button>
        </div>

      </div>
    </div>
  );
}
