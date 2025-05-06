
export type FormStep = {
  id: number;
  question: string;
  field: string;
  required?: boolean;
  options?: Array<{
    value: string;
    label: string;
  }>;
};

export const formSteps: FormStep[] = [
  {
    id: 1,
    question: "What's your first name?",
    field: "firstName",
    required: true
  },
  {
    id: 2,
    question: "What's your experience level with AI?",
    field: "experienceLevel",
    options: [
      { value: "beginner", label: "Beginner" },
      { value: "intermediate", label: "Intermediate" },
      { value: "advanced", label: "Advanced" },
    ]
  },
  {
    id: 3,
    question: "What's your main goal for learning AI?",
    field: "learningGoal",
    required: true,
    options: [
      { value: "workFaster", label: "Work faster" },
      { value: "makeMoney", label: "Make more money" },
      { value: "professionalGrowth", label: "Professional growth" },
      { value: "stayAhead", label: "Stay ahead of trends" },
      { value: "businessImplementation", label: "To implement it into my business" },
    ]
  },
  {
    id: 5,
    question: "What's your current job level?",
    field: "jobLevel",
    options: [
      { value: "founder", label: "Founder" },
      { value: "cSuite", label: "C-suite (CEO, CTO, etc)" },
      { value: "director", label: "Director / VP" },
      { value: "midLevel", label: "Mid or entry level" },
      { value: "student", label: "Student or intern" },
      { value: "other", label: "Other" },
    ]
  },
  {
    id: 6,
    question: "What's your biggest challenge with learning/integrating AI right now?",
    field: "challenge",
    required: true,
    options: [
      { value: "tooTechnical", label: "Too technical" },
      { value: "rightTools", label: "Finding the right tools" },
      { value: "qualityResources", label: "Lack of quality learning resources" },
      { value: "overwhelmed", label: "Overwhelmed by how fast AI is moving" },
    ]
  },
  {
    id: 7,
    question: "Outside of our newsletter, how else can we help you learn AI faster?",
    field: "helpPreference",
    required: true,
    options: [
      { value: "coursesGuides", label: "Courses and guides" },
      { value: "workshops", label: "Live, hands-on workshops" },
      { value: "oneOnOne", label: "1-on-1 AI integration support" },
      { value: "useCases", label: "Popular real-world AI use cases" },
    ]
  },
];
