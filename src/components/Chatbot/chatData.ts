// Sample injury prevention Q&A data
const chatData = [
  {
    keywords: ['back', 'pain', 'lifting'],
    response: "When lifting heavy objects, remember to: 1) Keep the object close to your body, 2) Bend your knees and hips, not your back, 3) Avoid twisting while lifting, and 4) Get help if the object is too heavy. Regular core strengthening exercises can also help prevent back injuries.",
  },
  {
    keywords: ['shoulder', 'rotator cuff', 'impingement'],
    response: "To prevent shoulder injuries, make sure to: 1) Warm up properly before activities involving your shoulders, 2) Strengthen your rotator cuff muscles with band exercises, 3) Improve your posture, and 4) Avoid sudden increases in overhead activities.",
  },
  {
    keywords: ['knee', 'acl', 'running'],
    response: "For knee injury prevention: 1) Strengthen your quadriceps and hamstrings, 2) Practice proper landing techniques with knees aligned over toes, 3) Incorporate balance training, and 4) Replace running shoes regularly to maintain proper support and cushioning.",
  },
  {
    keywords: ['ankle', 'sprain', 'twist'],
    response: "Prevent ankle injuries by: 1) Wearing appropriate footwear for your activity, 2) Strengthening ankle muscles with balance exercises, 3) Gradually increasing exercise intensity, and 4) Being cautious on uneven surfaces.",
  },
  {
    keywords: ['stretch', 'stretching', 'flexibility'],
    response: "For effective stretching: 1) Always warm up before stretching, 2) Hold each stretch for 15-30 seconds, 3) Don't bounce during stretches, 4) Stretch to the point of tension, not pain, and 5) Include dynamic stretches before activities and static stretches after.",
  },
  {
    keywords: ['warm', 'warm up', 'warmup'],
    response: "A proper warm-up should: 1) Last 5-10 minutes, 2) Gradually increase your heart rate, 3) Include dynamic movements similar to your planned activity, and 4) Prepare the specific muscles you'll be using in your workout or sport.",
  },
  {
    keywords: ['ergonomic', 'desk', 'office', 'sitting'],
    response: "Office ergonomics tips: 1) Keep your monitor at eye level, 2) Sit with knees and hips at 90 degrees, 3) Use a chair with lumbar support, 4) Take regular breaks to stand and stretch, and 5) Position keyboard and mouse so wrists remain neutral.",
  },
  {
    keywords: ['recovery', 'rest', 'sleep'],
    response: "Recovery is crucial for injury prevention. Make sure to: 1) Get 7-9 hours of quality sleep, 2) Include rest days in your exercise routine, 3) Stay hydrated, 4) Consider gentle movement like walking or swimming on recovery days, and 5) Listen to your body's signals of fatigue.",
  }
];

const fallbackResponses = [
  "I'm here to help with injury prevention advice. Could you tell me more about what specific area you're concerned about?",
  "That's an interesting question. To provide better advice, could you specify which body part or activity you're asking about?",
  "I'd be happy to help with injury prevention tips. To give you the most relevant information, could you share what type of activities you typically do?",
  "For personalized injury prevention advice, I recommend trying our full risk assessment tool which you can access from the main menu.",
];

export const generateResponse = (input: string): string => {
  const inputLower = input.toLowerCase();
  
  // Check for matches against known questions
  for (const item of chatData) {
    if (item.keywords.some(keyword => inputLower.includes(keyword))) {
      return item.response;
    }
  }
  
  // If no matches, return a random fallback
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
};