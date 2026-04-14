import { Button } from "@/components/ui/button";
import { Phone, Upload, Calendar, CheckCircle2, Mic, Check, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B13] text-white selection:bg-purple-500/30 selection:text-white font-sans overflow-x-hidden relative">
      {/* Background Grid Pattern & Global Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute right-[-10%] top-[20%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/5 bg-[#0B0B13]/80 backdrop-blur-xl">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
              <Mic className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">RecruitAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">How It Works</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex text-gray-300 hover:text-white hover:bg-white/5 font-medium transition-colors">Sign In</Button>
            <Button className="bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] font-semibold px-6 transition-all border-0 hidden sm:flex">
              Get Started Free
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Hero Content */}
          <div className="flex flex-col items-start pt-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-sm font-medium text-purple-200">AI-Powered Recruiting</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
              Hire Faster with <br className="hidden md:block"/>
              <span className="text-gradient-brand drop-shadow-sm">AI Voice Screening</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
              Import your candidate list and let our AI agent automatically call, screen, and schedule interviews — 24/7, at scale, with zero manual effort.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400 mb-10">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> No credit card required
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> Setup in 5 minutes
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> Cancel anytime
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-lg bg-purple-600 text-white hover:bg-purple-500 font-semibold group rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] border-0">
                Start Screening Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="h-14 px-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 font-medium w-full sm:w-48 backdrop-blur-sm cursor-text hover:bg-white/10 transition-colors">
                Book a Demo
              </div>
            </div>
          </div>
          
          {/* Right Hero Mockup */}
          <div className="relative mt-10 lg:mt-0">
            {/* Floating Top Label */}
            <div className="absolute -top-6 right-8 glass-panel py-2 px-4 rounded-xl z-20 flex flex-col shadow-2xl border border-white/10">
              <span className="text-xs font-semibold text-white">24/7 calls today</span>
              <span className="text-[10px] text-gray-400">Fully automated</span>
              <div className="flex items-center gap-1 absolute bottom-2 right-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-green-500 font-medium">Live</span>
              </div>
            </div>

            {/* Main Glass Mockup Container */}
            <div className="glass-panel rounded-2xl p-6 shadow-premium relative w-full border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>

              {/* Agent Top Row */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">RecruitAI Agent</div>
                  <div className="text-gray-400 text-sm">Calling candidates...</div>
                </div>
              </div>

              {/* Candidate List */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Screened Item */}
                <div className="bg-black/40 rounded-xl p-3 flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-xs font-bold text-gray-300">SJ</div>
                    <div>
                      <div className="text-white text-sm font-medium">Sarah Johnson</div>
                      <div className="text-gray-500 text-xs">Frontend Dev</div>
                    </div>
                  </div>
                  <div className="text-green-400 text-xs font-semibold flex items-center gap-1">
                    Screened <Check className="w-3 h-3" />
                  </div>
                </div>
                
                {/* Calling Item Active */}
                <div className="bg-purple-900/20 rounded-xl p-3 flex items-center justify-between border border-purple-500/30 shadow-[0_0_15px_rgba(107,33,168,0.2)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-inner">MC</div>
                    <div>
                      <div className="text-white text-sm font-medium">Marcus Chen</div>
                      <div className="text-purple-300 text-xs">Backend Dev</div>
                    </div>
                  </div>
                  <div className="text-purple-400 text-xs font-semibold flex items-center gap-1">
                    Calling... <Phone className="w-3 h-3 animate-pulse" />
                  </div>
                </div>

                {/* Queued Item */}
                <div className="bg-black/40 rounded-xl p-3 flex items-center justify-between border border-white/5 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">PP</div>
                    <div>
                      <div className="text-white text-sm font-medium">Priya Patel</div>
                      <div className="text-gray-500 text-xs">UX Designer</div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs font-semibold">Queued</div>
                </div>
              </div>

              {/* Live Transcript Feature */}
              <div className="bg-black/50 rounded-xl p-4 border border-white/5 mb-4 relative overflow-hidden">
                <div className="text-xs text-gray-400 mb-3 font-semibold tracking-wide">Live Transcript</div>
                
                <div className="flex items-end gap-1 h-12 mb-4 justify-between px-2">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2.5 rounded-t-sm ${i > 15 ? 'bg-purple-900' : 'bg-purple-500'}`}
                      style={{ 
                        height: `${Math.max(20, Math.random() * 100)}%`,
                        animation: i < 15 ? `bar-pulse ${0.5 + Math.random()}s infinite ease-in-out` : 'none',
                        animationDelay: `${Math.random() * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <p className="text-sm text-gray-300 italic font-mono bg-black/40 p-2 rounded border border-white/5">
                  "Tell me about your experience with React and TypeScript..."
                </p>
              </div>

              {/* Lower Stats Frame */}
              <div className="grid grid-cols-3 gap-2 text-center border-t border-white/10 pt-4">
                <div className="glass-panel p-2 rounded-lg">
                  <div className="text-lg font-bold text-white">1/4</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Screened</div>
                </div>
                <div className="glass-panel p-2 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="text-lg font-bold text-green-400 relative z-10">8.4</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5 relative z-10">Avg Score</div>
                </div>
                <div className="glass-panel p-2 rounded-lg">
                  <div className="text-lg font-bold text-purple-400">3.2h</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Time Saved</div>
                </div>
              </div>
            </div>

            {/* Floating Bottom Notification */}
            <div className="absolute -bottom-6 right-20 glass-panel border border-green-500/30 p-3 rounded-xl flex items-center gap-3 shadow-[0_10px_30px_rgba(34,197,94,0.15)] z-20">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <div className="text-white text-sm font-bold">Interview Scheduled!</div>
                <div className="text-gray-400 text-xs">Sarah Johnson - Tmwr 2PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-purple-500 font-bold tracking-[0.2em] text-xs mb-4 uppercase">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">From Import to Interview in <span className="text-gradient-brand">Minutes</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Three simple steps to automate your entire initial screening process and focus only on the best candidates.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 relative justify-center items-stretch max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-3xl w-full relative overflow-hidden group border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all flex flex-col items-start">
              <div className="absolute -right-4 -top-8 text-[140px] font-black text-white/[0.02] pointer-events-none group-hover:text-purple-500/[0.03] transition-colors leading-none tracking-tighter">01</div>
              
              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                <Upload className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Import Candidate Data</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">Upload a CSV, Excel, or PDF with candidate names and phone numbers. Our system instantly parses and queues them for outreach.</p>
              
              <ul className="space-y-3 w-full border-t border-white/5 pt-6 mt-auto">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> CSV / Excel / PDF support
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Auto-parse contact info
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Bulk import up to 10,000
                </li>
              </ul>
            </div>
            
            {/* Arrow separator desktop */}
            <div className="hidden lg:flex items-center justify-center text-purple-600/50 flex-shrink-0">
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-3xl w-full relative overflow-hidden group border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all flex flex-col items-start">
              <div className="absolute -right-4 -top-8 text-[140px] font-black text-white/[0.02] pointer-events-none group-hover:text-purple-500/[0.03] transition-colors leading-none tracking-tighter">02</div>
              
              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                <Mic className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">AI Agent Auto-Calls</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">Our voice AI agent calls each candidate, conducts a natural screening interview, and evaluates responses in real time.</p>
              
              <ul className="space-y-3 w-full border-t border-white/10 pt-6 mt-auto">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Human-like voice conversations
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Custom screening questions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Real-time sentiment analysis
                </li>
              </ul>
            </div>
            
            {/* Arrow separator desktop */}
            <div className="hidden lg:flex items-center justify-center text-purple-600/50 flex-shrink-0">
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-3xl w-full relative overflow-hidden group border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all flex flex-col items-start">
              <div className="absolute -right-4 -top-8 text-[140px] font-black text-white/[0.02] pointer-events-none group-hover:text-purple-500/[0.03] transition-colors leading-none tracking-tighter">03</div>
              
              <div className="w-14 h-14 rounded-2xl bg-[#2563EB] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Schedule Interviews</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">Top candidates are automatically scored and interview slots are booked directly into your calendar — zero manual work.</p>
              
              <ul className="space-y-3 w-full border-t border-white/10 pt-6 mt-auto">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div> Auto-scoring & ranking
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div> Calendar integration
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></div> Instant candidate notifications
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Footer Area Simplified for aesthetics */}
      <footer className="border-t border-white/5 pt-12 pb-12 mt-12 bg-black/40">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm text-gray-500">
           <div className="flex items-center gap-2">
            <Mic className="w-4 h-4" /> RecruitAI © {new Date().getFullYear()}
           </div>
           <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
