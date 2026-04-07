import React, { useState, useRef, useEffect } from "react";

const DEEPSEEK_API_KEY = "sk-e263424e578042f0ba7116c18c472cdc";
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

const SYSTEM_PROMPT = `You are a helpful assistant for Shareef Transport, a professional auto transport company.
You help customers get quotes, understand the shipping process, and answer any questions about vehicle transport.

KEY FACTS ABOUT SHAREEF TRANSPORT:
- Services: Open transport, Enclosed transport, Door-to-door delivery, Motorcycle shipping, Classic car shipping, Dealer/auction transport, Military shipping, Expedited shipping, Cross-country shipping
- Coverage: All 50 US states, nationwide
- Quote process: Enter pickup ZIP, delivery ZIP, vehicle type → get instant price + carrier availability
- Pricing: Sedan $350-$1500 depending on distance. SUV/Truck add 10-15%. Enclosed adds 40%. Minimum $350.
- Transit times: Under 500 miles: 1-3 days. 500-1500 miles: 3-6 days. Over 1500 miles: 6-10 days.
- Insurance: All shipments covered by carrier insurance. Enclosed = premium coverage.
- Booking: No upfront payment to book. Pay driver on delivery (cash/certified check) or pay online.
- Preparation: Remove personal items, keep gas to 1/4 tank, document existing damage with photos, disable alarm.
- Open transport: Safe for 95% of vehicles. Exposed to elements but industry standard. 7-10 cars per hauler.
- Enclosed transport: Best for luxury, classic, exotic, high-value vehicles. Full protection. Higher cost.
- Door-to-door: Carrier picks up and delivers to your exact address when street access allows.
- Military discount: Available for active duty, veterans, and military families.
- Classic cars: Always recommend enclosed transport. White glove handling.
- Motorcycle: Specialized crating and securing. Open or enclosed available.
- Contact: (602) 555-0100 | shareeftransport@gmail.com
- FMCSA Licensed (pending MC# and DOT#)

PERSONALITY: Be helpful, direct, and conversational. Keep answers concise. If they want a quote, tell them to use the quote calculator at the top of the page or ask for their ZIPs and vehicle type and you'll give them an estimate. Always end with a helpful follow-up or CTA.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm the Shareef Transport AI. I can answer any questions about car shipping, get you a quote estimate, or help you book. What do you need?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText || loadingRef.current) return;

    const newMessages: Message[] = [...messagesRef.current, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    loadingRef.current = true;

    try {
      const res = await fetch(DEEPSEEK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "I'm having trouble connecting. Please call us at (602) 555-0100!";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Connection issue! Please call us at (602) 555-0100 or email shareeftransport@gmail.com" }]);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  // Listen for openChat custom events (fired by footer links)
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setIsOpen(true);
      if (e.detail?.message) {
        setTimeout(() => sendMessage(e.detail.message), 100);
      }
    };
    window.addEventListener("openChat", handler as EventListener);
    return () => window.removeEventListener("openChat", handler as EventListener);
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-amber-400 hover:bg-amber-500 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-[9998] w-[360px] max-w-[calc(100vw-2rem)] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col"
          style={{ height: "480px" }}
        >
          {/* Header */}
          <div className="bg-sky-900 rounded-t-2xl px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">ST</div>
            <div>
              <p className="text-white font-semibold text-sm">Shareef Transport AI</p>
              <p className="text-green-400 text-xs">● Online — instant answers</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-amber-400 text-slate-900 font-medium"
                      : "bg-slate-700 text-white"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything about shipping..."
              className="flex-1 bg-slate-800 text-white text-sm rounded-xl px-3 py-2 outline-none border border-slate-600 focus:border-amber-400"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-900 rounded-xl px-3 py-2 font-bold text-sm"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
