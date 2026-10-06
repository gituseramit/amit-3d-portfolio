import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, recentWorks, skillCategories } from '../data/portfolioData.js';

export default function TerminalModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  const [history, setHistory] = useState([
    { type: 'system', text: 'Amit Keshari Dev Console v2.6.0 [Prayagraj, India]' },
    { type: 'system', text: 'Type "help" for a list of available commands.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `amit@portfolio:~$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • whoami       : Quick bio & AI/ML engineer background
  • skills       : Core tech stack breakdown
  • projects     : Active production projects & live links
  • contact      : Email, phone, GitHub, LinkedIn
  • sudo hire-me : Fast-track collaboration with celebration!
  • clear        : Clear console output
  • exit         : Close terminal`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${personalInfo.name} — AIML & Full Stack Developer
Based in Prayagraj, UP, India.
B.Tech in Computer Science (AI & ML) at UCER Prayagraj (CGPA: 7.1).
Specialized in end-to-end full-stack systems, computer vision, AutoAI, and robust REST APIs.`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: skillCategories.map(c => `[${c.title}]: ${c.skills.join(', ')}`).join('\n'),
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. GST Billing Software [React + Firebase] -> https://billing-software-21dcb.web.app
2. CivyX Smart Emergency Platform -> https://github.com/gituseramit/CivyX
3. El Presto Full Stack Café System -> https://elpresto.co.in
4. LocalLoop Cyber-Cafe Manager -> https://github.com/gituseramit/localloop
5. Disease Prediction AutoAI Model -> IBM Watson AutoAI`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email    : ${personalInfo.email}
Phone    : ${personalInfo.phone}
LinkedIn : ${personalInfo.linkedin}
GitHub   : ${personalInfo.github}`,
        });
        break;

      case 'sudo hire-me':
      case 'hire-me':
      case 'hire':
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        newHistory.push({
          type: 'output',
          text: `Permission granted! Opening direct contact drawer... Excellent choice!`,
        });
        setTimeout(() => {
          onClose();
          onOpenContact();
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${cmd}. Type "help" for valid commands.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#141E13] rounded-3xl border border-[#3E5C36] shadow-2xl overflow-hidden font-mono text-xs text-white">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1C2C19] border-b border-[#304828]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="text-[11px] text-[#A6C99B] font-bold ml-2">
              amit@dev-box: ~ (zsh)
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#A6C99B] hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 h-80 overflow-y-auto space-y-2 bg-[#10190F]">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'system' && (
                <div className="text-[#84A877]">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="text-white font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-[#D6E6D2] font-mono whitespace-pre-wrap">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <div className="text-red-400">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#172415] border-t border-[#304828]">
          <span className="text-emerald-400 font-bold">amit@portfolio:~$</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or 'sudo hire-me'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-white/30 text-xs"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-[#7DA470]" />
        </form>

      </div>
    </div>
  );
}
