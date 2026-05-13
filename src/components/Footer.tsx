export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-24 flex flex-col items-center">
      <div className="w-full h-px bg-white/10 mb-24" />
      
      <div className="relative group cursor-pointer overflow-hidden mb-24">
        <h2 
          className="font-display text-[15vw] md:text-[12vw] leading-none uppercase font-black tracking-tighter"
        >
          Start Your Story
        </h2>
        <div className="absolute bottom-0 left-0 w-0 h-2 bg-white transition-all duration-700 group-hover:w-full" />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8">
          <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">Twitter / X</a>
          <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">Instagram</a>
          <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">Behance</a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="font-display uppercase text-[10px] tracking-[0.2em] opacity-40">© 2024 AMBER STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
