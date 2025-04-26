import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from '../common/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SafeMotion</span>
            </div>
            <p className="text-gray-400 mb-4">
              Helping you prevent injuries and maintain optimal physical health
              through expert advice and personalized guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Prevention Guides</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Back Injuries
                </a>
              </li>
              <li>
                <a href="https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-pain-and-common-shoulder-problems" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Shoulder Injuries
                </a>
              </li>
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/knee-pain/symptoms-causes/syc-20350849" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Knee Injuries
                </a>
              </li>
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/sprained-ankle/symptoms-causes/syc-20353225" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Ankle Injuries
                </a>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  All Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.insure4sport.co.uk/blog/injury-prevention-exercises/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Preventive Exercises
                </a>
              </li>
              <li>
                <a href="https://www.bu.edu/articles/2020/10-ergonomics-dos-and-donts-for-those-now-working-from-home/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Ergonomic Tips
                </a>
              </li>
              <li>
                <a href="https://www.healthline.com/nutrition/27-health-and-nutrition-tips" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Nutrition Advice
                </a>
              </li>
              <li>
                <a href="https://www.chesapeakehand.com/2024/04/05/rehabilitation-techniques-for-faster-recovery-after-sports-injuries/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Recovery Techniques
                </a>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  All Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-gray-400 hover:text-white transition-colors">
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SafeMotion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;