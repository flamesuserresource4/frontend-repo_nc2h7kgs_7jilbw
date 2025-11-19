export default function Section({ title, children, action }) {
  return (
    <section className="container mx-auto px-4 py-8" id={title?.toLowerCase().replace(/\s+/g,'-')}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold" style={{color:'#1A73E8'}}>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}
