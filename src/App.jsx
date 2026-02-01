import { useCourses } from './lib/api';
import { useState } from 'react';
import './App.css';

function App() {
    const { courses, loading } = useCourses('CMPT');
    // const [courses, setCourses] = useState([]);

    return (
        // <>
        //     {courses.map(c => (
        //         <div key={`${c.subject}${c.number}`}>
        //             {c.subject} {c.number}
        //         </div>
        //     ))}
        // </>
        <div className="container">
            <main className="main-content">
                <div className="courses-section">

                </div>
            </main>
        </div>
    );
}

export default App;