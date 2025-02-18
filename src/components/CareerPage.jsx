import { useState, useEffect } from 'react';
import useCareersStore from '../store/careersStore.js';
import 'tailwindcss/tailwind.css';

const CareersPage = () => {
    const { jobListings, fetchJobListings, addJobListing, clearJobListings } = useCareersStore();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [employmentType, setEmploymentType] = useState('');

    useEffect(() => {
        fetchJobListings();
    }, []);

    const handleAddJobListing = () => {
        const newJob = {
            jobTitle: title,
            location,
            jobDescription: description,
            salary,
            typeofemployement: employmentType,
        };
        addJobListing(newJob);
        setTitle('');
        setLocation('');
        setDescription('');
        setSalary('');
        setEmploymentType('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">Careers</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <textarea
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <input
                    type="text"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <input
                    type="text"
                    placeholder="Type of Employment (Full-time, Part-time, Contract)"
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <button
                    onClick={handleAddJobListing}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Job
                </button>
                <button
                    onClick={clearJobListings}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700"
                >
                    Clear Jobs
                </button>
            </div>
            <div>
                {jobListings.length === 0 ? (
                    <p className='text-black dark:text-white'>No job listings available.</p>
                ) : (
                    <ul>
                        {jobListings.map((job) => (
                            <li key={job._id} className="border p-2 mb-2">
                                <h2 className="font-bold">{job.jobTitle}</h2>
                                <p>{job.location}</p>
                                <p>{job.jobDescription}</p>
                                <p>Salary: {job.salary}</p>
                                <p>Type of Employment: {job.typeofemployement}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CareersPage;
