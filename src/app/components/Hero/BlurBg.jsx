const BlurBg = () => {
  return (
    <>
      <div className="absolute -z-10 top-0 left-0 w-32 h-32 md:w-80 md:h-80 rounded-full bg-[#019ADF] mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000" />
      <div className="absolute -z-10 top-0 right-0 w-32 h-32 md:w-80 md:h-80 rounded-full bg-secondary mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -z-10 -bottom-32 left-0 w-32 h-32 md:w-80 md:h-80 rounded-full bg-secondary mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000" />
      <div className="absolute -z-10 -bottom-32 right-0 w-32 h-32 md:w-80 md:h-80 rounded-full bg-[#32C0A0] mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
    </>
  );
};

export default BlurBg;
