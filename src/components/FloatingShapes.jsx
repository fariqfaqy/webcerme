/**
 * FloatingShapes - Decorative animated shapes for hero backgrounds.
 * Renders multiple floating elements with staggered animations.
 */
export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large circle - top right */}
      <div className="animate-float-slow absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-400/[0.07] blur-2xl" />

      {/* Medium circle - bottom left */}
      <div className="animate-float-medium absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-amber-400/[0.08] blur-2xl" />

      {/* Small dot - center right */}
      <div className="animate-float-fast absolute right-1/4 top-1/3 h-6 w-6 rounded-full bg-emerald-500/20" />

      {/* Tiny dot - top center */}
      <div className="animate-pulse-glow absolute left-1/3 top-1/4 h-3 w-3 rounded-full bg-emerald-600/25" />

      {/* Ring - bottom right */}
      <div className="animate-float-medium absolute bottom-1/4 right-1/6 h-20 w-20 rounded-full border-2 border-emerald-400/10" style={{ animationDelay: '1s' }} />

      {/* Decorative ring - top left */}
      <div className="animate-spin-slow absolute -left-8 top-1/2 h-32 w-32 rounded-full border border-dashed border-emerald-300/10" />

      {/* Small square rotated */}
      <div className="animate-float-slow absolute right-1/3 bottom-1/3 h-8 w-8 rotate-45 rounded-sm bg-amber-500/10" style={{ animationDelay: '2s' }} />

      {/* Gradient blob */}
      <div className="animate-pulse-glow absolute left-1/2 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-300/[0.06] to-teal-200/[0.04] blur-3xl" style={{ animationDelay: '1.5s' }} />
    </div>
  )
}
