import React from 'react';
import { Shield, Award, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About SafeMotion
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dedicated to helping you prevent injuries and maintain optimal physical health
            through expert guidance and innovative technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            {
              icon: Shield,
              title: 'Expert Knowledge',
              description: 'Built on evidence-based practices and current research in sports medicine and injury prevention.'
            },
            {
              icon: Award,
              title: 'Proven Results',
              description: 'Thousands of users have successfully prevented injuries using our guidance and tools.'
            },
            {
              icon: Users,
              title: 'Personalized Approach',
              description: 'Tailored recommendations based on your specific activities and risk factors.'
            },
            {
              icon: Heart,
              title: 'Continuous Support',
              description: '24/7 access to our AI assistant and comprehensive resource library.'
            }
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-500 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At SafeMotion, we believe that prevention is better than cure. Our mission is to empower
            individuals with the knowledge and tools they need to prevent injuries before they occur.
            Through our innovative AI-powered platform, we provide personalized guidance, expert
            resources, and continuous support to help you maintain optimal physical health and
            performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-semibold text-gray-900">Assessment:</span> We analyze your
                  activities, history, and risk factors.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-semibold text-gray-900">Personalization:</span> We create
                  tailored recommendations based on your profile.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-semibold text-gray-900">Education:</span> We provide
                  comprehensive resources and guidance.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <p className="ml-3 text-gray-600">
                  <span className="font-semibold text-gray-900">Support:</span> We offer ongoing
                  assistance through our AI chatbot and updates.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based Practice</h3>
                <p className="text-gray-600">
                  Our recommendations are based on current research in sports medicine, physical
                  therapy, and injury prevention.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Collaboration</h3>
                <p className="text-gray-600">
                  We work with leading professionals in sports medicine, physical therapy, and
                  biomechanics.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  Our AI-powered platform provides personalized recommendations and real-time
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;