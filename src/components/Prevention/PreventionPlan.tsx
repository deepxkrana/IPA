import React from 'react';
import { CheckCircle, Clock, Calendar, AlertTriangle } from 'lucide-react';

interface PreventionPlanProps {
  riskLevel: 'Low' | 'Moderate' | 'High';
  score: number;
}

const PreventionPlan: React.FC<PreventionPlanProps> = ({ riskLevel, score }) => {
  const exercises = {
    warmup: [
      {
        name: 'Dynamic Stretching',
        duration: '5-10 minutes',
        frequency: 'Before every workout',
        description: 'Include arm circles, leg swings, hip rotations, and light jogging'
      },
      {
        name: 'Mobility Drills',
        duration: '5 minutes',
        frequency: 'Before every workout',
        description: 'Focus on joint mobility for shoulders, hips, and ankles'
      }
    ],
    strengthening: [
      {
        name: 'Core Stability',
        sets: '3 sets of 12-15 reps',
        frequency: '3x per week',
        exercises: ['Planks', 'Bird dogs', 'Dead bugs', 'Side planks']
      },
      {
        name: 'Lower Body Strength',
        sets: '3 sets of 10-12 reps',
        frequency: '2-3x per week',
        exercises: ['Bodyweight squats', 'Lunges', 'Step-ups', 'Bridges']
      },
      {
        name: 'Upper Body Strength',
        sets: '3 sets of 10-12 reps',
        frequency: '2-3x per week',
        exercises: ['Push-ups', 'Band pulls', 'Wall slides', 'YTWLs']
      }
    ],
    recovery: [
      {
        name: 'Static Stretching',
        duration: '15-20 minutes',
        frequency: 'After workouts',
        description: 'Hold each stretch for 30 seconds, focus on major muscle groups'
      },
      {
        name: 'Self-Massage',
        duration: '10-15 minutes',
        frequency: 'Daily',
        description: 'Use foam roller or massage ball on tight muscles'
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Detailed Prevention Plan</h2>
        <div className={`inline-flex items-center px-4 py-2 rounded-full ${
          riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
          riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          <CheckCircle className="h-5 w-5 mr-2" />
          {riskLevel} Risk Level
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Program Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <Clock className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="font-medium">Duration</h4>
            <p>4-6 weeks initial phase</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <Calendar className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="font-medium">Frequency</h4>
            <p>3-4 sessions per week</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-blue-600 mb-2" />
            <h4 className="font-medium">Intensity</h4>
            <p>Progressive increase</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Warm-up Routine</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {exercises.warmup.map((exercise, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{exercise.name}</h4>
                <p className="text-gray-600 mb-2">{exercise.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Duration: {exercise.duration}</p>
                  <p>Frequency: {exercise.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Strengthening Exercises</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {exercises.strengthening.map((exercise, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{exercise.name}</h4>
                <ul className="text-gray-600 mb-2 list-disc list-inside">
                  {exercise.exercises.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500">
                  <p>Sets: {exercise.sets}</p>
                  <p>Frequency: {exercise.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Recovery Protocol</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {exercises.recovery.map((exercise, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{exercise.name}</h4>
                <p className="text-gray-600 mb-2">{exercise.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Duration: {exercise.duration}</p>
                  <p>Frequency: {exercise.frequency}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Important Notes:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Start with lower intensity and gradually increase as you build strength</li>
          <li>Listen to your body and adjust the program as needed</li>
          <li>Maintain proper form throughout all exercises</li>
          <li>Stay hydrated and get adequate sleep for optimal recovery</li>
          <li>Contact a healthcare professional if you experience pain or discomfort</li>
        </ul>
      </div>
    </div>
  );
};

export default PreventionPlan;