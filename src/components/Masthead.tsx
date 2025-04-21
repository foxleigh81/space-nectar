import Image from 'next/image';

const Masthead: React.FC = () => {
  return (
    <div 
      className="relative flex items-center justify-center h-[60vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/branding/orion-nebula.jpg')" }} 
    >
      <div 
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-0"
      ></div>
      <div className="relative z-10 flex flex-col items-center">
        <Image 
          src="/branding/logos/space-nectar-logo-full-colour-no-bg.svg" 
          alt="Space Nectar Logo" 
          width={300} 
          height={150} 
          className="mb-4 drop-shadow-[0_0_15px_rgba(75,0,130,0.7)]"
          priority 
        />
        <h1 className="text-5xl font-black tracking-tighter uppercase font-sans">Space Nectar</h1>
      </div>
    </div>
  );
};

export default Masthead; 