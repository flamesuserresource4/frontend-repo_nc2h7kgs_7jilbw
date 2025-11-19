import { Star, Heart } from 'lucide-react'

export default function ProductCard({ product, onWishlist }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition p-3">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50">
        <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop'} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition"/>
        {product.discount_percent ? (
          <span className="absolute top-2 left-2 bg-[#FFB800] text-slate-900 text-xs font-bold px-2 py-1 rounded">-{product.discount_percent}%</span>
        ) : null}
        <button onClick={()=>onWishlist?.(product)} className="absolute top-2 right-2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-lg shadow"><Heart size={16} /></button>
      </div>
      <div className="pt-3">
        <h3 className="font-semibold text-slate-900 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-slate-500">{product.category}</p>
        <div className="flex items-center gap-1 text-[#FFB800] pt-1">
          <Star size={14} fill="#FFB800" />
          <span className="text-sm text-slate-700">{product.ratings?.toFixed?.(1) || '4.5'}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-bold">${product.price?.toFixed?.(2) ?? product.price}</div>
          <a href="#" className="px-3 py-1.5 rounded-lg bg-[#1A73E8] text-white text-sm font-semibold">Add to Cart</a>
        </div>
      </div>
    </div>
  )
}
