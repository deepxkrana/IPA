import React from 'react';
import { MessageSquare, ShieldCheck, Activity, FileText } from 'lucide-react';

const features = [
  {
    name: 'AI Chatbot Advisor',
    description:
      'Get immediate answers about injury prevention with our AI-powered chatbot that draws from medically reviewed content.',
    icon: MessageSquare,
  },
  {
    name: 'Personalized Risk Assessment',
    description:
      'Complete our comprehensive assessment to receive tailored recommendations based on your activities and history.',
    icon: ShieldCheck,
  },
  {
    name: 'Interactive Exercise Library',
    description:
      'Access our extensive library of preventive exercises with proper form guidance and technique tips.',
    icon: Activity,
  },
  {
    name: 'Expert-Developed Guides',
    description:
      'Browse in-depth guides developed by sports medicine professionals and physical therapists.',
    icon: FileText,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your personal injury prevention assistant
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive platform helps you understand and mitigate injury risks
            with personalized recommendations.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;