import { Search, ShoppingCart, User, Menu, Mic } from 'lucide-react'

export default function TopNav({ onSearch }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-slate-200/40">
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-slate-100"><Menu size={22} /></button>
        <a href="#" className="text-xl font-extrabold tracking-tight" style={{color:'#1A73E8'}}>Saaz</a>
        <div className="flex-1" />
        <div className="flex items-center gap-2 w-full max-w-xl bg-slate-100 rounded-xl px-3 py-2">
          <Search className="text-slate-500" size={18} />
          <input onChange={(e)=>onSearch?.(e.target.value)} placeholder="Search products…" className="flex-1 bg-transparent outline-none text-sm" />
          <button className="p-1 rounded hover:bg-slate-200"><Mic size={18} className="text-slate-600" /></button>
        </div>
        <div className="flex-1" />
        <a href="#cart" className="relative p-2 rounded-lg hover:bg-slate-100"><ShoppingCart /></a>
        <a href="#profile" className="p-2 rounded-lg hover:bg-slate-100"><User /></a>
      </div>
    </header>
  )
}
