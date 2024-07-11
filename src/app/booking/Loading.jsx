const Loader = () => {
  return (
    <div className="fixed z-[9999999] shadow-lg w-full flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
    </div>
  );
};

export default Loader;
