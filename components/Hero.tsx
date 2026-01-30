import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  mousePos: { x: number, y: number };
}

export const Hero: React.FC<Props> = ({ mousePos }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>("image/jpeg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const biologyImages = [
    "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/910000000000?text=Hi%20BioCharya,%20I%20have%20an%20enquiry.', '_blank');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAskAI = async () => {
    if (!query.trim() && !image) return;

    setIsLoading(true);
    setResponse("");
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let contents;

      if (image) {
        const base64Data = image.split(',')[1];
        contents = {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: query || "Explain this biology diagram or image in detail as a teacher would." }
          ]
        };
      } else {
        contents = [{ parts: [{ text: query }] }];
      }

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: "You are BioCharya AI, a friendly and expert biology teacher. Provide accurate, structured, and easy-to-understand explanations for Class 9-12 and NEET levels. Use bold text for key terms.",
        }
      });

      setResponse(result.text || "I'm sorry, I couldn't process that. Please try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("My neural connections are a bit foggy. Please ensure your prompt is clear and try once more.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-8 md:pt-12 pb-24 overflow-visible">
      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto w-full">
        {/* Headline - Responsive Sizing */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight leading-[1.15] text-[#1a1a1a] mb-6 md:mb-8 lowercase">
          Learn 
          <div className="inline-block relative -top-0.5 md:-top-2 mx-1.5 md:mx-3 w-20 sm:w-32 md:w-56 lg:w-72 h-8 sm:h-14 md:h-24 lg:h-32 bg-gray-100 rounded-full overflow-hidden border border-white shadow-2xl ring-1 ring-black/5 align-middle">
            <div className="flex h-full w-[200%] animate-image-slide">
              {biologyImages.map((src, i) => (
                <div key={i} className="w-1/6 h-full flex-shrink-0">
                  <img src={src} alt="Bio" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div> 
          the way
          <br />
          doctors 
          <div className="inline-block relative -top-0.5 md:-top-2 mx-1.5 md:mx-3 w-28 sm:w-40 md:w-64 lg:w-84 h-8 sm:h-14 md:h-24 lg:h-32 bg-white rounded-full border border-black/5 shadow-2xl align-middle overflow-hidden">
            <div className="flex flex-col h-[400%] animate-word-slide">
              <div className="h-1/4 flex items-center justify-center text-black font-bold text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-tight shrink-0">think</div>
              <div className="h-1/4 flex items-center justify-center text-blue-600 font-bold text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-tight shrink-0">imagine</div>
              <div className="h-1/4 flex items-center justify-center text-green-600 font-bold text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-tight shrink-0">perform</div>
              <div className="h-1/4 flex items-center justify-center text-black font-bold text-lg sm:text-3xl md:text-5xl lg:text-6xl tracking-tight shrink-0">think</div>
            </div>
          </div> 
        </h1>

        <p className="mt-2 md:mt-8 text-gray-400 text-sm md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
          The ultimate Biology sanctuary. Ask our AI for instant help or upload a diagram.
        </p>

        {/* BioAI Assistant Chat Interface */}
        <div className="mt-8 md:mt-12 w-full max-w-2xl mx-auto relative z-30">
          <div className="bg-white border border-black/10 rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 shadow-2xl transition-all duration-300 focus-within:ring-4 ring-black/5">
            
            {image && (
              <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 rounded-xl overflow-hidden group">
                <img src={image} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute inset-0 bg-black/40 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex items-end gap-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors shrink-0 border border-black/5"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />
              
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask BioCharya AI..."
                className="flex-1 bg-transparent px-3 py-2 md:py-3 text-sm font-semibold outline-none text-[#1a1a1a] resize-none min-h-[40px] md:min-h-[50px] max-h-[150px]"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAskAI();
                  }
                }}
              />
              
              <button 
                onClick={handleAskAI}
                disabled={isLoading}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-black text-white shadow-lg transition-all active:scale-95 shrink-0 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {isLoading ? (
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4 md:w-5 md:h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* AI Response Box - Manual Styling for better compatibility */}
          {(response || isLoading) && (
            <div className="mt-6 bg-white/90 backdrop-blur-xl border border-black/5 rounded-[2rem] p-6 md:p-8 text-left shadow-2xl reveal">
              <div className="flex items-center gap-2 mb-4 opacity-40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">BioCharya Assistant</span>
              </div>
              {isLoading ? (
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200/50 rounded-full w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200/50 rounded-full w-full animate-pulse" />
                  <div className="h-4 bg-gray-200/50 rounded-full w-5/6 animate-pulse" />
                </div>
              ) : (
                <div className="text-gray-800 text-sm md:text-base font-medium leading-relaxed whitespace-pre-wrap">
                  {response}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-10 left-6 md:left-10 z-50 flex flex-col items-start scale-75 md:scale-100">
        {showTooltip && (
          <div className="mb-4 bg-white border border-black/5 shadow-2xl rounded-2xl p-4 animate-bounce-slow relative origin-bottom-left">
            <button onClick={() => setShowTooltip(false)} className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold">✕</button>
            <p className="text-xs font-black text-gray-800">Any enquiry? <span className="text-green-600">Contact us!</span></p>
          </div>
        )}
        <div className="cursor-pointer" onClick={handleWhatsAppClick}>
          <button className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};