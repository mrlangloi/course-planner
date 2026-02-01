import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Column from './components/Column';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {

    const [courses, setCourses] = useState([]);

    // fetch Brian's courses data
    const term = "2026-spring";
    const subject = 'CMPT';
    const URL = `https://api.sfucourses.com/v1/rest/sections?term=${term}&dept=${subject}`;

    // callback function to pass to Column component
    const changeCourseCategory = (currentCourseCode, newCategory) => {
        const updatedCourses = courses.map(course => {
            const courseCode = `${course.dept}-${course.number}`;
            if (currentCourseCode === courseCode) {
                console.log(`Changing category of course ${currentCourseCode} to ${newCategory}`);
                return { ...course, category: newCategory };
            }
            return course;
        });
        setCourses(updatedCourses);
    }

    const categories = ["COMPLETED", "CURRENT", "AVAILABLE"];

    const TOTAL_UNITS = 120;
    const completedUnits = courses
        .filter(c => c.category === "COMPLETED")
        .reduce((sum, c) => sum + Number(c.units), 0);
    const completedPercent = TOTAL_UNITS > 0 ? (completedUnits / TOTAL_UNITS) * 100 : 0;

    const currentUnits = courses
        .filter(c => c.category === "CURRENT")
        .reduce((sum, c) => sum + Number(c.units), 0);
    const currentPercent = TOTAL_UNITS > 0 ? (currentUnits / TOTAL_UNITS) * 100 : 0;

    useEffect(() => {
        // check for saved data in localStorage
        const savedCourses = localStorage.getItem('sfu-course-tracker');

        if (savedCourses) {
            setCourses(JSON.parse(savedCourses));
        } else {
            // fetch from API if no saved data
            axios.get(URL).then((response) => {
                const initialCourses = response.data.map((course) => ({
                    ...course,
                    category: "AVAILABLE",
                }));
                setCourses(initialCourses);
            }).catch((error) => {
                console.error("Error fetching courses data: ", error);
            });
        }
    }, []);

    // saves courses to localStorage whenever courses list updates
    useEffect(() => {
        if (courses.length > 0) {
            localStorage.setItem('sfu-course-tracker', JSON.stringify(courses));
        }
    }, [courses]);

    return (
        <div className="container">
            <Hero />

            <div className="progress-container" style={{ padding: '20px', maxWidth: '800px', margin: '2rem auto', width:'80%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                    <span>Degree Progress</span>
                    <span>{completedUnits + currentUnits} / {TOTAL_UNITS} Units Tracked</span>
                </div>

                <div className="progress-bar-bg" style={{
                    background: '#e0e0e0',
                    borderRadius: '10px',
                    height: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    position: 'relative'
                }}>
                    <div
                        style={{
                            width: `${completedPercent}%`,
                            height: '100%',
                            background: '#4caf50',
                            transition: 'width 0.5s ease-in-out',
                            zIndex: 2
                        }}
                    ></div>

                    <div
                        style={{
                            width: `${currentPercent}%`,
                            height: '100%',
                            background: 'rgba(76, 175, 80, 0.4)',
                            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                            backgroundSize: '20px 20px',
                            transition: 'width 0.5s ease-in-out',
                            zIndex: 1
                        }}
                    ></div>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '8px', fontSize: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '12px', height: '12px', background: '#4caf50' }}></div> Completed
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <div style={{ width: '12px', height: '12px', background: 'rgba(76, 175, 80, 0.4)' }}></div> In Progress
                    </div>
                </div>
            </div>

            <main className="main-content">
                <div className="courses-section">
                    {categories.map((category) => (
                        <Column key={category} courses={courses} category={category} changeCourseCategory={changeCourseCategory} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;