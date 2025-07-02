// app/terms/page.tsx

import React from 'react';

const RULES = [
    'All course fees must be paid in full before access is granted.',
    'You must complete all modules in sequence; skipping is not allowed.',
    'Assignments must be submitted by the deadlines specified in each module.',
    'Certificates are awarded upon meeting a minimum 80% score in assessments.',
    'Any form of plagiarism or academic dishonesty will lead to account suspension.',
    'Refund requests must be made within 7 days of enrollment; after that period, fees are non-refundable.',
    'You agree to respect the privacy and intellectual property of instructors and fellow students.',
    'The platform may update these Terms and Conditions; continued use implies acceptance of changes.'
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
                    Terms & Conditions
                </h1>
                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Welcome to our course platform. Please read and agree to the following rules before proceeding with your application.
                </p>
                <ol className="space-y-4 list-decimal list-inside text-gray-800 dark:text-gray-200">
                    {RULES.map((rule, index) => (
                        <li key={index} className="pl-2">
                            {rule}
                        </li>
                    ))}
                </ol>

            </div>
        </div>
    );
}
