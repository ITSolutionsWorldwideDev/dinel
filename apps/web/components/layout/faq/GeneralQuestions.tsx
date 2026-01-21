import React from 'react'
import QuestionAnswer from './QuestionAnswer';

const GeneralQuestions = () => {

     const faqs = [
    {
      question: "What is a Dineler?",
      answer:
        "A Dineler is a professional who works with Dinel, contributing their expertise to various projects and initiatives. Dinelers are part of a dynamic team that values innovation, collaboration, and professional growth.",
    },
    {
      question: "How does Dinel support my career development?",
      answer:
        "Dinel supports your career development through mentorship programs, training opportunities, skill development workshops, and exposure to diverse projects. We believe in investing in our team members' growth and providing clear pathways for advancement.",
    },
    {
      question: "How do I apply for vacancies?",
      answer:
        "You can apply for vacancies by visiting our careers page, selecting the position that matches your skills and interests, and submitting your application through our online portal. Make sure to include your updated resume and a cover letter highlighting your relevant experience.",
    },
    {
      question: "What types of projects can I expect to work on?",
      answer:
        "As a Dineler, you'll work on a variety of projects ranging from client-facing initiatives to internal innovation projects. These may include technology implementations, strategic consulting, process optimization, and creative solutions across different industries.",
    },
  ];
  return (
    <div>
        <QuestionAnswer faqs={faqs} whosQUestions='General' />
    </div>
  )
}

export default GeneralQuestions