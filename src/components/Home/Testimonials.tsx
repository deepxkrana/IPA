import React from 'react';

const testimonials = [
  {
    content:
      "The injury risk assessment helped me identify issues with my running form that were causing knee pain. After following the recommended exercises, I'm now running pain-free.",
    author: 'Sarah J.',
    role: 'Marathon Runner',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    content:
      "As someone who works at a desk all day, the ergonomic tips and stretching routines have made a huge difference in preventing back pain. The chatbot is incredibly helpful for quick questions too.",
    author: 'Michael T.',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    content:
      "I used to get frequent shoulder injuries during weightlifting. The preventive exercises and technique tips from SafeMotion have helped me train safely while making consistent progress.",
    author: 'Elena R.',
    role: 'Fitness Enthusiast',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Success stories from our users
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from people who have prevented injuries and improved their physical well-being with our guidance.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-8 relative"
            >
              <div className="text-xl text-gray-600 italic mb-6">"{testimonial.content}"</div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-blue-200 text-6xl font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;