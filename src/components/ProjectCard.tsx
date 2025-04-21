import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  url: string;
  imageUrl?: string;
  altText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url, imageUrl, altText }) => {
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      <div className="h-80 relative">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={altText || `${title} preview`} 
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-800">
        <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
        <p className="text-sm text-gray-400">{url.replace(/^https?:\/\//, '')}</p>
      </div>
    </Link>
  );
};

export default ProjectCard; 