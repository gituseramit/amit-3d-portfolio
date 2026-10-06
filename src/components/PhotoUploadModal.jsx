import React, { useState } from 'react';
import { X, Upload, Camera, Check, RefreshCw, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function PhotoUploadModal({ isOpen, onClose, currentPhoto, onSavePhoto }) {
  if (!isOpen) return null;

  const [preview, setPreview] = useState(currentPhoto || '');
  const [activeTab, setActiveTab] = useState('upload');

  const presetAvatars = [
    { label: "Amit Keshari (Official Cutout)", url: "/amit-cutout.png" },
    { label: "Professional Studio A", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80" },
    { label: "Professional Studio B", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80" },
    { label: "Developer Casual", url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleReset = () => {
    onSavePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg clay-card rounded-[36px] p-6 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full clay-pill text-[#2A3E24] hover:bg-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="text-xs font-serif italic text-[#55734F] block mb-1">
            / Customize Your Portrait
          </span>
          <h3 className="text-2xl font-bold text-[#1D2E1A]">
            Set Your Photo
          </h3>
          <p className="text-xs text-[#4E6847] mt-1">
            Upload your picture now or whenever you are ready! It will instantly update the 3D hero portrait and persist locally.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'upload' ? 'clay-button-dark' : 'clay-pill text-[#31462A]'
            }`}
          >
            Upload From Device
          </button>
          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'presets' ? 'clay-button-dark' : 'clay-pill text-[#31462A]'
            }`}
          >
            Choose Placeholder
          </button>
        </div>

        {/* Active Content */}
        {activeTab === 'upload' ? (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-[#A7C89C] rounded-2xl p-6 text-center bg-white/50 hover:bg-white/70 transition-colors">
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center">
                <div className="w-12 h-12 rounded-full clay-pill flex items-center justify-center text-[#3D5635] mb-2">
                  <Upload className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#1D2E1A]">Click to browse image</div>
                <div className="text-[10px] text-[#577251] mt-0.5">PNG, JPG, WEBP up to 10MB</div>
              </label>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {presetAvatars.map((preset, idx) => (
              <div
                key={idx}
                onClick={() => setPreview(preset.url)}
                className={`p-2 rounded-2xl border cursor-pointer transition-all flex items-center gap-2 ${
                  preview === preset.url
                    ? 'border-[#3C5236] bg-[#E1ECE0]'
                    : 'border-white bg-white/60 hover:bg-white'
                }`}
              >
                <img src={preset.url} alt={preset.label} className="w-10 h-10 rounded-xl object-cover" />
                <span className="text-[11px] font-semibold text-[#20311B] leading-tight">
                  {preset.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Live Preview Box */}
        {preview && (
          <div className="mt-4 p-3 rounded-2xl bg-[#E6EFE3] border border-[#D5E3D1] flex items-center gap-4">
            <div className="w-14 h-16 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1F311C]">Active Portrait Preview</div>
              <div className="text-[10px] text-[#526F4C]">Surrounded by floating 3D organic clay spheres</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-full text-xs font-bold clay-button-dark flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Apply To Website</span>
          </button>
          
          <button
            onClick={handleReset}
            className="px-4 py-3 rounded-full text-xs font-semibold text-[#3E5538] clay-pill hover:bg-white"
            title="Reset to default"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
