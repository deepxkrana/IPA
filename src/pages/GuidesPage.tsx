import React from 'react';
import { ArrowRight } from 'lucide-react';


const guides = [
  {
    id: 'back',
    title: 'Back Injury Prevention',
    description: 'Learn proper lifting techniques, core strengthening exercises, and ergonomic tips to protect your back.',
    image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906',
    content: [
      {
        title: 'Proper Lifting Technique',
        steps: [
          'Keep your feet shoulder-width apart',
          'Squat down by bending at the knees and hips',
          'Look straight ahead and keep your back straight',
          'Hold the load close to your body',
          'Use your legs to lift by straightening your knees and hips, not your back',
        ]
      },
      {
        title: 'Core Strengthening Exercises',
        exercises: [
          'Planks (30-60 seconds)',
          'Bird dogs (10-12 repetitions each side)',
          'Dead bugs (12-15 repetitions)',
          'Bridges (12-15 repetitions)',
          'Side planks (20-30 seconds each side)'
        ]
      }
    ]
  },
  {
    id: 'shoulder',
    title: 'Shoulder Injury Prevention',
    description: 'Discover mobility exercises, rotator cuff strengthening, and proper form for overhead activities.',
    image: 'https://images.pexels.com/photos/5793682/pexels-photo-5793682.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://orthoinfo.aaos.org/en/diseases--conditions/shoulder-pain-and-common-shoulder-problems',
    content: [
      {
        title: 'Rotator Cuff Exercises',
        exercises: [
          'External rotation with resistance band',
          'Internal rotation with resistance band',
          'Shoulder blade squeezes',
          'Wall slides',
          'YTWLs with light weights'
        ]
      },
      {
        title: 'Mobility Drills',
        exercises: [
          'Arm circles (forward and backward)',
          'Cross-body arm swings',
          'Shoulder dislocates with band',
          'Thread the needle stretch',
          'Child\'s pose with arm rotation'
        ]
      }
    ]
  },
  {
    id: 'knee',
    title: 'Knee Injury Prevention',
    description: 'Explore stabilization techniques, proper landing mechanics, and exercises to build knee resilience.',
    image: 'https://images.pexels.com/photos/14534511/pexels-photo-14534511.jpeg?auto=compress&cs=tinysrgb&w=1600',
    url: 'https://www.mayoclinic.org/diseases-conditions/knee-pain/symptoms-causes/syc-20350849',
    content: [
      {
        title: 'Strengthening Exercises',
        exercises: [
          'Bodyweight squats',
          'Step-ups',
          'Single-leg deadlifts',
          'Wall sits',
          'Calf raises'
        ]
      },
      {
        title: 'Landing Mechanics',
        steps: [
          'Land softly on the balls of your feet',
          'Keep knees aligned with toes',
          'Maintain slight knee bend on landing',
          'Avoid knee caving inward',
          'Practice with small hops first'
        ]
      }
    ]
  }
];

const GuidesPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Injury Prevention Guides
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive guides to help you prevent common injuries through proper technique,
            exercises, and best practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h2>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <a
                  href={guide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read full guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;