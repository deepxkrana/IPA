import { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { Link } from '../common/Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                SafeMotion
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  Prevention Guides
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Back Injuries
                  </a>
                  <a
                    href="https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-pain-and-common-shoulder-problems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Shoulder Injuries
                  </a>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/knee-pain/symptoms-causes/syc-20350849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Knee Injuries
                  </a>
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/sprained-ankle/symptoms-causes/syc-20353225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Ankle Injuries
                  </a>
                </div>
              </div>
              <Link
                href="/assessment"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Risk Assessment
              </Link>
              <Link
                href="/resources"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/assessment" className="ml-4 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Start Assessment
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <div className="space-y-1 pl-3">
              <a
                href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/back-pain/art-20044526"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Back Injuries
              </a>
              <a
                href="https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-pain-and-common-shoulder-problems"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Shoulder Injuries
              </a>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/knee-pain/symptoms-causes/syc-20350849"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Knee Injuries
              </a>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/sprained-ankle/symptoms-causes/syc-20353225"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Ankle Injuries
              </a>
            </div>
            <Link
              href="/assessment"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Risk Assessment
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <button className="mt-2 w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Start Assessment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;