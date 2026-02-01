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

    // have to use useEffect to avoid infinite loop
    useEffect(() => {
        const fetchCourses = axios.get(URL).then((response) => {
            const initialCourses = response.data.map((course) => ({
                ...course,
                category: "AVAILABLE", // default category
            }));
            setCourses(initialCourses);
        }).catch((error) => {
            console.error("Error fetching courses data: ", error);
        });
    }, []);

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

    return (
        <div className="container">
            <Hero />
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