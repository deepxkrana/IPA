import React from 'react';
import { Book, Video, Download, Calendar } from 'lucide-react';

const resources = [
  {
    category: 'Exercise Libraries',
    items: [
      {
        title: 'Core Strengthening Program',
        description: 'A comprehensive collection of core exercises for injury prevention',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=_TdWdFQ1Cms' // Example: Core Strengthening Workout
      },
      {
        title: 'Mobility Routines',
        description: 'Daily mobility exercises for different body parts',
        type: 'pdf',
        url: 'https://pliability.com/stories/mobility-exercises'
      },
      {
        title: 'Resistance Band Workouts',
        description: 'Complete guide to resistance band exercises',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=hQ2lHMP4kco' // Example: Resistance Band Full Body Workout
      }
    ]
  },
  {
    category: 'Training Programs',
    items: [
      {
        title: '4-Week Injury Prevention',
        description: 'Progressive program for building resilience',
        type: 'program',
        url: 'https://www.physio-pedia.com/Injury_Prevention_in_Sport'
      },
      {
        title: 'Return to Sport Protocol',
        description: 'Safe progression for returning to athletic activities',
        type: 'pdf',
        url: 'https://www.physio-pedia.com/Return_to_Sport'
      },
      {
        title: 'Recovery Techniques',
        description: 'Essential recovery methods and timing',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=PUJpU6Ti5jU'
      }
    ]
  },
  {
    category: 'Educational Materials',
    items: [
      {
        title: 'Anatomy Basics',
        description: "Understanding your body's movement patterns",
        type: 'pdf',
        url: 'https://www.kenhub.com/en/library/anatomy/human-anatomy-terminology'
      },
      {
        title: 'Injury Prevention 101',
        description: 'Fundamental concepts and principles',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=YDNNYWaw6l0'
      },
      {
        title: 'Risk Assessment Guide',
        description: 'Learn to identify potential injury risks',
        type: 'pdf',
        url: 'https://www.hse.gov.uk/simple-health-safety/risk/steps-needed-to-manage-risk.htm'
      }
    ]
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'video':
      return <Video className="h-5 w-5 text-blue-500" />;
    case 'pdf':
      return <Book className="h-5 w-5 text-blue-500" />;
    case 'program':
      return <Calendar className="h-5 w-5 text-blue-500" />;
    default:
      return <Download className="h-5 w-5 text-blue-500" />;
  }
};

const ResourcesPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Prevention Resources
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Access our comprehensive collection of injury prevention resources,
            from exercise libraries to educational materials.
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {getIcon(item.type)}
                      <h3 className="ml-3 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Access Resource
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;