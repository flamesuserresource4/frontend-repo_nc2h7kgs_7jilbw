import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 backdrop-blur px-3 py-1 text-white text-sm">Saaz International LLC</span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Shop Smart. Shop Saaz.</h1>
        <p className="mt-4 max-w-2xl text-blue-50/90">A modern shopping experience with exclusive deals, fast delivery, and secure checkout. Royal Blue, Gold, and White — the look of trusted global e‑commerce.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#shop" className="px-6 py-3 rounded-xl bg-[#1A73E8] text-white font-semibold shadow hover:shadow-lg transition">Start Shopping</a>
          <a href="#deals" className="px-6 py-3 rounded-xl bg-[#FFB800] text-slate-900 font-semibold shadow hover:shadow-lg transition">Today’s Deals</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1c3a]/40 via-[#0b1c3a]/60 to-[#0b1c3a]" />
    </section>
  )
}
