import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  url: string;
  imageUrl?: string; // Optional image URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, imageUrl }) => {
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative block border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      {imageUrl ? (
        <Image 
          src={imageUrl} 
          alt={`${title} preview`} 
          fill
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
      )}
      <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent">
        <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
        <p className="text-sm text-gray-400">{url.replace(/^https?:\/\//, '')}</p>
      </div>
    </Link>
  );
};

export default ProjectCard; 