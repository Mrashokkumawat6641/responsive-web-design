import { useState } from 'react';
import useAboutStore from '../store/aboutus.js';

const AboutUsPage = () => {
    const { teamMembers, addTeamMember, deleteTeamMember, clearTeamMembers } = useAboutStore();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [bio, setBio] = useState('');

    const handleAddTeamMember = async () => {
        if (!name || !position || !bio) {
            alert("Please fill out all fields!");
            return;
        }

        await addTeamMember({ name, position, bio });

        setName('');
        setPosition('');
        setBio('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">About Us</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mb-2 w-full rounded"
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="border p-2 mb-2 w-full rounded"
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="border p-2 mb-2 w-full rounded"
                />
                <button
                    onClick={handleAddTeamMember}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Team Member
                </button>
                <button
                    onClick={clearTeamMembers}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700"
                >
                    Clear Team Members
                </button>
            </div>

            <div>
                {teamMembers.length === 0 ? (
                    <p>No team members available.</p>
                ) : (
                    <ul>
                        {teamMembers.map((member) => (
                            <li key={member._id} className="border p-2 mb-2">
                                <h2 className="font-bold">{member.name}</h2>
                                <p>{member.position}</p>
                                <p>{member.bio}</p>
                                <button
                                    onClick={() => deleteTeamMember(member._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded mt-2 hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AboutUsPage;
