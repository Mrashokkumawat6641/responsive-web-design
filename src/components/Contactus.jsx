import { useState } from 'react';
import useContactStore from '../store/contactusStore.js';
import 'tailwindcss/tailwind.css';
const ContactUsPage = () => {
    const { contacts, addContact, clearContacts } = useContactStore();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleAddContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name,
            email,
            message,
        };
        addContact(newContact);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl dark:text-white font-bold mb-4">Contact Us</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border p-2 mb-2 w-full rounded-xl"
                />
                <button
                    onClick={handleAddContact}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
                <button
                    onClick={clearContacts}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2 hover:bg-red-700"
                >
                    Clear
                </button>
            </div>
            <div>
                {contacts.length === 0 ? (
                    <p className='dark:text-white text-black'>No contacts available.</p>
                ) : (
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id} className="border p-2 mb-2">
                                <h2 className="font-bold">{contact.name}</h2>
                                <p>{contact.email}</p>
                                <p>{contact.message}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ContactUsPage;