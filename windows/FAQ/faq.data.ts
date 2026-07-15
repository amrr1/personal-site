export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "placeholder-question",
    question: "What is this question about?",
    answer: "Placeholder answer. Replace with real FAQ content in the next phase.",
  },
];
