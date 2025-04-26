import React from 'react';
import RiskAssessment from '../components/Assessment/RiskAssessment';

const AssessmentPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Injury Risk Assessment
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Complete this assessment to receive personalized recommendations for
            preventing injuries based on your activities and risk factors.
          </p>
        </div>

        <RiskAssessment />
      </div>
    </div>
  );
};

export default AssessmentPage;