import Link from 'next/link';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import Tooltip from './Tooltip';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16 w-full">
      <div className="px-4 text-center">
        <div className="mb-4 flex justify-center space-x-6">
          <Tooltip text="Facebook">
            <Link 
              href="https://www.facebook.com/profile.php?id=61575624237572" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-300 transition-colors icon-wobble"
              aria-label="Space Nectar on Facebook"
            >
              <FaFacebook size={24} />
            </Link>
          </Tooltip>
          <Tooltip text="GitHub">
            <Link 
              href="https://github.com/orgs/spacenectar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-300 transition-colors icon-wobble"
              aria-label="Space Nectar on GitHub"
            >
              <FaGithub size={24} />
            </Link>
          </Tooltip>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Space Nectar. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Space Nectar is a trading name of Alexander Foxleigh.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 