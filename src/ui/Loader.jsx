function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
    </div>
  );
}

export default Loader;
