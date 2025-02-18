import { useState } from 'react';
import useFAQsStore from '../store/faqsStore.js';
import 'tailwindcss/tailwind.css';

const FAQsPage = () => {
    const { faqs, addFAQ, clearFAQs } = useFAQsStore();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAddFAQ = () => {
        const newFAQ = {
            id: faqs.length + 1,
            question,
            answer,
        };
        addFAQ(newFAQ);
        setQuestion('');
        setAnswer('');
    };

    return (
        <div className="container mx-auto p-4 dark:text-white text-black">
            <h1 className="text-2xl font-bold mb-4">FAQs</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <textarea
                    placeholder="Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <button
                    onClick={handleAddFAQ}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add FAQ
                </button>
                <button
                    onClick={clearFAQs}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700"
                >
                    Clear FAQs
                </button>
            </div>
            <div>
                {faqs.length === 0 ? (
                    <p className='dark:text-white text-black'>No FAQs available.</p>
                ) : (
                    <ul>
                        {faqs.map((faq) => (
                            <li key={faq.id} className="border p-2 mb-2">
                                <h2 className="font-bold">{faq.question}</h2>
                                <p>{faq.answer}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FAQsPage;