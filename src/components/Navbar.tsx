export default function Navbar() {
  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none"
    >
      <div className="flex gap-12 pointer-events-auto">
        <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">Movies</a>
      </div>
      
      <div className="flex flex-col items-center pointer-events-auto">
        <span className="font-display uppercase text-[11px] tracking-[0.3em]">Kevin Hart</span>
      </div>

      <div className="flex gap-12 pointer-events-auto">
        <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">About</a>
        <a href="#" className="font-display uppercase text-[11px] tracking-[0.2em] hover:opacity-60 transition-opacity">Comedic Genius</a>
      </div>
    </nav>
  );
}
