export interface ClientReview {
  id: string;
  clientName: string;
  location: string;
  projectName: string;
  review: string;
  coordinates: [number, number]; // [longitude, latitude]
}

export const reviewsData: ClientReview[] = [
  {
    id: "1",
    clientName: "Corey Smith",
    location: "United States (Valdosta)",
    projectName: "UI Development",
    review: "Great work!",
    coordinates: [-83.2789, 30.8327]
  },
  {
    id: "2",
    clientName: "Alan S.",
    location: "China (Shenzhen)",
    projectName: "ChatGPT Web/UI and 2 restful apid develop",
    review: "Good freelancer,professional",
    coordinates: [114.0579, 22.5431]
  },
  {
    id: "3",
    clientName: "Shon S.",
    location: "Israel (Tel Aviv)",
    projectName: "Building Scalable & User-Friendly Solutions",
    review: "It was nice working with Sacesta",
    coordinates: [34.7818, 32.0853]
  },
  {
    id: "4",
    clientName: "Lucidya",
    location: "Saudi Arabia (Riyadh)",
    projectName: "Intercom Automation Expert",
    review: "it was nice working with Sacesta",
    coordinates: [46.6753, 24.7136]
  },
  {
    id: "5",
    clientName: "Taylor C.",
    location: "United States",
    projectName: "Quote for the Testing SPRINT",
    review: "Joshi is very patience and professional. He has great technical understanding. Our project was using frontier LLM tech and he is able to contribute a lot.",
    coordinates: [-95.7129, 37.0902]
  },
  {
    id: "7",
    clientName: "Delis G.",
    location: "United States",
    projectName: "Mac-Compatible Mathematical Formula Application",
    review: "Josh completed my project on time. From the start he made sure to ask me questions to be clear about my goals for my application. It was quick, the app was completed before the time we agreed. We were on call a few times just to touch base. In the middle of the project I realized I needed more features and he was open to the new information I provided. Overall, working with Josh was smooth, and I got what I wanted. I'll definitely be working with him again!",
    coordinates: [-118.2437, 34.0522]
  },
  {
    id: "8",
    clientName: "Bhumika S.",
    location: "India",
    projectName: "Zapier AI Trigger Debug",
    review: "We were facing troubles with our Zapier automations, and we reached out to Sumit. He was quick to identify the problem and communicated with us promptly and professionally. Would definitely recommend working with him regarding any of your tech solutions.",
    coordinates: [78.9629, 20.5937]
  },
  {
    id: "10",
    clientName: "Lauren D.",
    location: "United Kingdom",
    projectName: "GoHighLevel + Zapier Automation",
    review: "Joshi was great! He listened to what I needed done, we had a discovery call to make sure everything was aligned and he went away and did the work that was needed. We then hopped on a call to go through it and he walked me through the changes that I needed to learn! Very happy and satisfied with his level of experience and work ethic. Would highly recommend him for any project you have with integrations and CRM platforms!",
    coordinates: [-3.4360, 55.3781]
  },
  {
    id: "11",
    clientName: "Jaysika G.",
    location: "India (Navsari)",
    projectName: "Enhance AI App Features",
    review: "We worked with this team for AI product enhancement and new feature development, and it’s been a great experience. They’re not just good developers but real problem-solvers. The team took time to understand our product, even ran user surveys to shape new ideas, and delivered everything on time with proper testing and documentation. Each feature came well-tested with a clear testing plan. Highly recommend them for anyone looking for a dependable development partner.",
    coordinates: [72.9278, 20.9467]
  },
  {
    id: "12",
    clientName: "Alexandra S.",
    location: "Israel (Herzliya)",
    projectName: "iOS sport App Functional Validation Task - India",
    review: "thank you for your very good job , i highly recommand to work with him",
    coordinates: [34.8333, 32.1667]
  },
  {
    id: "14",
    clientName: "Darshan R.",
    location: "Australia (Melbourne)",
    projectName: "AI-Driven React JS + Flutter App Development",
    review: "I was nice to work with them, they have pretty good experience in Developing Full stack application with React, Node,flutter and they are expert in integrating Artificial intelligence in the application, not just they have experience in technical aspect but they have good knowledge in terms of Product understanding and market fit. Their earlier projects expertise reflects in their work and the processes which they are following. Looking forward to work with them again.",
    coordinates: [144.9631, -37.8136]
  },
  {
    id: "15",
    clientName: "Akhil N.",
    location: "India (Mumbai)",
    projectName: "AI-Powered Blog Content Generator Web App",
    review: "Working with Joshi S. was a smooth and professional experience. He delivered a clean, responsive UI with Next.js and Tailwind, and integrated the OpenAI API flawlessly for real-time content generation. His full-stack skills, clear communication, and problem-solving mindset made the project a success. I’d highly recommend him for any AI-powered or content-driven web app development.",
    coordinates: [72.8777, 19.0760]
  },
  {
    id: "19",
    clientName: "Tw T.",
    location: "United States",
    projectName: "NextJS Website Cleanup and Simplification",
    review: "Really good experience working with Joshi.",
    coordinates: [-74.0060, 40.7128]
  },
  {
    id: "22",
    clientName: "Jens M.",
    location: "Germany",
    projectName: "React Developer",
    review: "Sumit is a good developer, thanks for the help.",
    coordinates: [13.4050, 52.5200]
  },
  {
    id: "23",
    clientName: "James H.",
    location: "Canada",
    projectName: "Sumit Joshi Quote",
    review: "Sumit was prompt in his delivery and performed the tasks well.",
    coordinates: [-79.3832, 43.6532]
  },
  {
    id: "25",
    clientName: "Roberto Alejandro Vergara A.",
    location: "Mexico",
    projectName: "Employee-Focused Microlearning Platform Development",
    review: "excellent work developed by Joshi. I have been very satisfied with his proactivity, good disposition and high professional quality.",
    coordinates: [-99.1332, 19.4326]
  },
  {
    id: "26",
    clientName: "Karel C.",
    location: "Czech Republic",
    projectName: "Images Upload Components and backend endpoint example",
    review: "Result is good and in style I want it. I only update code with my specific styling that very individual",
    coordinates: [14.4378, 50.0755]
  },
  {
    id: "30",
    clientName: "Pooya M.",
    location: "Iran",
    projectName: "Experienced Front-End Developer for Interactive Web Sections",
    review: "Talented freelancer with exceptional research skills and a knack for getting the job done right. Highly recommended for anyone looking for quality work and professionalism.",
    coordinates: [51.3890, 35.6892]
  },
  {
    id: "34",
    clientName: "Ht H.",
    location: "Netherlands",
    projectName: "PHP expert with knowledge of the Google Indexing API -- 2",
    review: "Thank you for your outstanding effort. It was a wonderful learning project that we successfully completed together. Your commitment, professionalism, and dedication are greatly appreciated. Looking forward to working with you again in the future.",
    coordinates: [4.8952, 52.3702]
  },
  {
    id: "36",
    clientName: "Rickey F.",
    location: "Germany",
    projectName: "Angular coaching required",
    review: "Best Angular freelancer I ever have worked with...",
    coordinates: [9.9937, 53.5511]
  },
  {
    id: "37",
    clientName: "Zsolt H.",
    location: "Hungary",
    projectName: "Project for Sumit J.",
    review: "The communication is poor. But he not done the project. But he tried. Sorry",
    coordinates: [19.0402, 47.4979]
  },
  {
    id: "42",
    clientName: "Zsolt H.",
    location: "Hungary",
    projectName: "Pizza's Frontend Developer Needed",
    review: "Really nice guy and talented. My project done right on time. I can only recommend",
    coordinates: [21.6273, 47.5316]
  }
];
