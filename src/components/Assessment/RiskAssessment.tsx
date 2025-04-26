import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import PreventionPlan from '../Prevention/PreventionPlan';

interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 'q1',
    text: 'How many days per week do you typically engage in physical activity?',
    options: [
      { id: 'q1a', text: '0-1 days', score: 3 },
      { id: 'q1b', text: '2-3 days', score: 2 },
      { id: 'q1c', text: '4-5 days', score: 1 },
      { id: 'q1d', text: '6-7 days', score: 2 },
    ],
  },
  {
    id: 'q2',
    text: 'Do you warm up before physical activities?',
    options: [
      { id: 'q2a', text: 'Never', score: 3 },
      { id: 'q2b', text: 'Sometimes', score: 2 },
      { id: 'q2c', text: 'Usually', score: 1 },
      { id: 'q2d', text: 'Always', score: 0 },
    ],
  },
  {
    id: 'q3',
    text: 'Have you had any injuries in the past year?',
    options: [
      { id: 'q3a', text: 'No injuries', score: 0 },
      { id: 'q3b', text: 'Minor injury (recovered quickly)', score: 1 },
      { id: 'q3c', text: 'Moderate injury (affected activities for 1-4 weeks)', score: 2 },
      { id: 'q3d', text: 'Serious injury (affected activities for >4 weeks)', score: 3 },
    ],
  },
  {
    id: 'q4',
    text: 'How would you rate your overall flexibility?',
    options: [
      { id: 'q4a', text: 'Poor', score: 3 },
      { id: 'q4b', text: 'Fair', score: 2 },
      { id: 'q4c', text: 'Good', score: 1 },
      { id: 'q4d', text: 'Excellent', score: 0 },
    ],
  },
  {
    id: 'q5',
    text: 'Do you perform strength training exercises?',
    options: [
      { id: 'q5a', text: 'Never', score: 3 },
      { id: 'q5b', text: '1-2 times per month', score: 2 },
      { id: 'q5c', text: '1-2 times per week', score: 1 },
      { id: 'q5d', text: '3+ times per week', score: 0 },
    ],
  },
];

const RiskAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showPreventionPlan, setShowPreventionPlan] = useState(false);

  const handleOptionSelect = (questionId: string, optionId: string, optionScore: number) => {
    setSelectedOption(optionId);
    setAnswers({
      ...answers,
      [questionId]: optionId,
    });
    setScore(prevScore => {
      // If changing an answer, subtract the previous option's score
      const prevOptionId = answers[questionId];
      const prevOption = questions[currentQuestion].options.find(opt => opt.id === prevOptionId);
      const prevOptionScore = prevOption ? prevOption.score : 0;
      
      return prevScore - prevOptionScore + optionScore;
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[questions[currentQuestion + 1].id] || null);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null);
    }
  };

  const getResultMessage = () => {
    const totalPossibleScore = questions.reduce(
      (sum, q) => sum + Math.max(...q.options.map(o => o.score)),
      0
    );
    const percentage = (score / totalPossibleScore) * 100;

    if (percentage < 30) {
      return {
        title: 'Low Risk',
        message: 'You have a good foundation for injury prevention. Continue your current practices and consider the recommendations below to further reduce your risk.',
        color: 'text-green-600',
      };
    } else if (percentage < 60) {
      return {
        title: 'Moderate Risk',
        message: 'You have some areas that could use improvement to reduce your injury risk. Review our recommendations carefully.',
        color: 'text-yellow-600',
      };
    } else {
      return {
        title: 'High Risk',
        message: 'You have several factors that increase your risk of injury. Following our recommendations is highly advised to reduce your risk.',
        color: 'text-red-600',
      };
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
      {!completed ? (
        <>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Injury Risk Assessment</h2>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">
            {questions[currentQuestion].text}
          </h3>

          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option) => (
              <div
                key={option.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleOptionSelect(questions[currentQuestion].id, option.id, option.score)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedOption === option.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedOption === option.id && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span>{option.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`px-4 py-2 rounded flex items-center ${
                !selectedOption
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion < questions.length - 1 ? 'Next' : 'See Results'}
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </>
      ) : (
        <>
          {!showPreventionPlan ? (
            <div className="text-center">
              <div className="mb-4">
                <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Assessment Complete!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for completing the injury risk assessment.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className={`text-xl font-bold mb-2 ${getResultMessage().color}`}>
                  {getResultMessage().title}
                </h3>
                <p className="text-gray-700 mb-4">{getResultMessage().message}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Low Risk</span>
                    <span>High Risk</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        score < 5
                          ? 'bg-green-500'
                          : score < 10
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${(score / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3">
                Your Personalized Recommendations
              </h3>
              <div className="text-left bg-blue-50 p-5 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 mr-2" />
                    <span>Incorporate a proper warm-up routine before physical activity (5-10 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 mr-2" />
                    <span>Add 2-3 strength training sessions per week focusing on core and major muscle groups</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 mr-2" />
                    <span>Include flexibility exercises at least 3 times weekly</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 mr-2" />
                    <span>Ensure proper form during all exercises - review our technique guides</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 mr-2" />
                    <span>Schedule adequate rest days between intense training sessions</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setScore(0);
                    setCompleted(false);
                    setSelectedOption(null);
                  }}
                  className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded mr-3 hover:bg-blue-50"
                >
                  Retake Assessment
                </button>
                <button 
                  onClick={() => setShowPreventionPlan(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Detailed Prevention Plan
                </button>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowPreventionPlan(false)}
                className="mb-6 text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Results
              </button>
              <PreventionPlan 
                riskLevel={
                  score < 5 ? 'Low' : 
                  score < 10 ? 'Moderate' : 
                  'High'
                }
                score={score}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default RiskAssessment;