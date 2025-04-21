import Masthead from "@/components/Masthead";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Masthead />

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Space Nectar is the software development brand of Alexander Foxleigh, established in 2023. We focus on creating high-quality, user-friendly web applications and tools.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProjectCard 
              title="Alex Foxleigh Website" 
              url="https://alexfoxleigh.com" 
              imageUrl="/projects/alexfoxleigh-site.png"
              altText="Alex Foxleigh Website screenshot"
            />
            <ProjectCard 
              title="Foxy's Tale Blog" 
              url="https://foxleigh.me" 
              imageUrl="/projects/foxys-tale-site.png"
              altText="Foxy's Tale Blog screenshot"
            />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
