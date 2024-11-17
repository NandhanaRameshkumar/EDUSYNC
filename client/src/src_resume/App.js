import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import Form2 from './components/Form2';
import Resume2 from './components/Resume2';
import Preloader from './components/Preloader';
import Home from './components/Home';
import useFormHandlers from './components/Handler'; // Assuming this is for the first form
import useFormHandlers2 from './components/Handler2';
import './App.css';

const ResumeApp = () => {
    const [loading, setLoading] = useState(true);
    const [selectedResume, setSelectedResume] = useState(null); // Tracks the selected resume

    const { formData: formData1, handleChange: handleChange1, handleSubmit: handleSubmit1 } = useFormHandlers();
    const { formData: formData2, handleChange: handleChange2, handleSubmit: handleSubmit2 } = useFormHandlers2();

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return <Preloader />;
    }

    // Display Home component if no resume is selected
    if (!selectedResume) {
        return <Home onSelectResume={setSelectedResume} />;
    }

    return (
        <div className="form-and-resume">
            {selectedResume === 'resume1' && (
                <>
                    <div className="form-wrapper">
                        <Form formData={formData1} handleChange={handleChange1} handleSubmit={handleSubmit1} />
                    </div>
                    <div className="resume-wrapper">
                        <Resume resumeData={formData1} />
                    </div>
                </>
            )}
            {selectedResume === 'resume2' && (
                <>
                    <div className="form-wrapper">
                        <Form2 formData={formData2} handleChange={handleChange2} handleSubmit={handleSubmit2} />
                    </div>
                    <div className="resume-wrapper">
                        <Resume2 resumeData={formData2} />
                    </div>
                </>
            )}
            <button className="secondary-btn" onClick={() => setSelectedResume(null)}>
                Back to Home
            </button>
        </div>
    );
};

export default ResumeApp;
