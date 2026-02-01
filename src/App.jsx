import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Column from './components/Column';

function App() {

    const [courses, setCourses] = useState([]);

    // fetch Brian's courses data
    const term = "2026-spring";
    const subject = 'CMPT';
    const URL = `https://api.sfucourses.com/v1/rest/sections?term=${term}&dept=${subject}`;

    // have to use useEffect to avoid infinite loop
    useEffect(() => {
        const fetchCourses = axios.get(URL).then((response) => {
            console.log(response.data);
            setCourses(response.data);
        }).catch((error) => {
            console.error("Error fetching courses data: ", error);
        });
    }, []);

    // map an extra string field "category" to each course
    const updatedCourses = courses.map(course => ({
        ...course,
        category: "AVAILABLE", // default category
    }));

    console.log(updatedCourses);

    // callback function to pass to Column component
    const changeCourseCategory = (courseCode, newCategory) => {
        const updatedCourses = courses.map(course => {
            if (course.id === courseId) {
                return { ...course, category: newCategory };
            }
            return course;
        });
        setCourses(updatedCourses);
    }

    const categories = ["COMPLETED", "PLANNED", "AVAILABLE"];

    return (
        <div className="container">
            <main className="main-content">
                <div className="courses-section">
                    {categories.map((index, category) => (
                        <Column key={index} courses={courses} category={category} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;