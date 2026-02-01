import { useState } from 'react';
import Column from './components/Column';
import './App.css';

function App() {

    // fetch Brian's courses data
    const fetchCourses = axios.get(URL).then((response) => {
        setCourses(response.data);
    });

    // store courses data in state
    const [courses, setCourses] = useState([]);

    // map an extra string field "category" to each course
    const updatedCourses = courses.map(course => ({
        ...course,
        category: "AVAILABLE", // default category
    }))

    // callback function to pass to Column component
    // const changeCourseCategory = (courseCode, newCategory) => { 
    //     const updatedCourses = courses.map(course => {
    //         if (course.id === courseId) {
    //             return { ...course, category: newCategory };
    //         }
    //         return course;
    //     });
    //     setCourses(updatedCourses);
    // }

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