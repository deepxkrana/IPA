import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../common/Link';

const guides = [
  {
    id: 'back',
    title: 'Back Injury Prevention',
    description: 'Learn proper lifting techniques, core strengthening exercises, and ergonomic tips to protect your back.',
    image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/back-pain/art-20044526',
  },
  {
    id: 'shoulder',
    title: 'Shoulder Injury Prevention',
    description: 'Discover mobility exercises, rotator cuff strengthening, and proper form for overhead activities.',
    image: 'https://images.pexels.com/photos/5793682/pexels-photo-5793682.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-pain-and-common-shoulder-problems',
  },
  {
    id: 'knee',
    title: 'Knee Injury Prevention',
    description: 'Explore stabilization techniques, proper landing mechanics, and exercises to build knee resilience.',
    image: 'https://images.pexels.com/photos/14534511/pexels-photo-14534511.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://www.mayoclinic.org/diseases-conditions/knee-pain/symptoms-causes/syc-20350849',
  },
];

const GuidePreview: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Prevention Guides
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Expert advice for common injury areas
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Browse our comprehensive guides to learn how to prevent injuries in different parts of your body.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <div 
              key={guide.id} 
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <a 
                  href={guide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            View all prevention guides
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidePreview;