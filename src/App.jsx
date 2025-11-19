import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import TopNav from './components/TopNav'
import Section from './components/Section'
import ProductCard from './components/ProductCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch(`${API_BASE}/api/categories`).then(r=>r.json()).then(setCategories).catch(()=>{})
    fetch(`${API_BASE}/api/products`).then(r=>r.json()).then(setProducts).catch(()=>{})
  }, [])

  const filtered = useMemo(() => {
    if (!query) return products
    const q = query.toLowerCase()
    return products.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(q))
  }, [products, query])

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav onSearch={setQuery} />
      <Hero />

      {/* Categories */}
      <Section title="Shop by Category" action={<a href="#" className="text-sm font-semibold" style={{color:'#1A73E8'}}>View all</a>}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map(c => (
            <a key={c._id} href="#" className="group bg-white rounded-xl border border-slate-200/60 p-4 hover:shadow-md transition flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-[#1A73E8]/10 text-[#1A73E8] text-lg font-bold">
                {c.icon ? <img src={c.icon} alt={c.name} className="w-8 h-8 object-contain"/> : c.name[0]}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-800">{c.name}</div>
            </a>
          ))}
        </div>
      </Section>

      {/* New Arrivals */}
      <Section title="New Arrivals" action={<a href="#" className="text-sm font-semibold" style={{color:'#1A73E8'}}>View all</a>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.slice(0,8).map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </Section>

      {/* Best Sellers */}
      <Section title="Best Sellers" action={<a href="#" className="text-sm font-semibold" style={{color:'#1A73E8'}}>View all</a>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.slice(8,16).map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">© {new Date().getFullYear()} Saaz International LLC</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline" style={{color:'#1A73E8'}}>Customer Support</a>
            <a href="#" className="hover:underline" style={{color:'#1A73E8'}}>Privacy</a>
            <a href="#" className="hover:underline" style={{color:'#1A73E8'}}>Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
