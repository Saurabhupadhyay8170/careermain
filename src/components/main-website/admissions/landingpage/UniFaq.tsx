import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const UniFaq: React.FC = () => {
  // Static data for headings and FAQs
  const headings = ["Sanskriti University FAQs"];
  const faqs: FAQ[] = [
    { question: "When was Sanskriti University established?", answer: "Sanskriti University was established in 2016." },
    { question: "Is Sanskriti University a private or government university?", answer: "Sanskriti University is a private university." },
    { question: "How good is Sanskriti University?", answer: "Sanskriti University offers excellent education and infrastructure." },
    { question: "What courses does Sanskriti University offer?", answer: "Sanskriti University offers a wide range of courses including Engineering, Management, Science, and Arts." },
    { question: "Is there any entrance exam for Sanskriti University admission?", answer: "Yes, admissions are based on entrance exams like SUNAT or other criteria set by the university." },
    { question: "Does Sanskriti University offer scholarships?", answer: "Yes, the university offers scholarships based on merit and other criteria." },
    { question: "What is SUNAT? How to apply for it?", answer: "SUNAT is Sanskriti University's National Admission Test. You can apply online through their official website." },
    { question: "How many constituent schools are there at Sanskriti University?", answer: "Sanskriti University has several constituent schools offering specialized courses." }
  ];

  return (
    <div className="px-8 sm::px-4 mt-6">
    <div className="shadow-lg p-2 sm:p-6">
      {/* Render dynamic headings */}
      {headings.map((heading, index) => (
        <h1
          key={index}
          className="text-3xl font-bold mb-4 text-gray-800"
        >
          {heading}
        </h1>
      ))}

      <div className="bg-white shadow rounded-lg p-3 sm:p-6 mt-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 hover:bg-gray-50"
          >
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UniFaq;
