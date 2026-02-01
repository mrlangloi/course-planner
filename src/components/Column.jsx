import Course from './Course.jsx';

const Column = (props) => {
    const { courses, category, changeCourseCategory } = props;
    
    const filteredCourses = courses.filter(course => course.category === category);

    console.log(filteredCourses);

    const capitalizeCategory = category.charAt(0) + category.substring(1).toLowerCase();

    return (
        <div className="column">
            <h3>{capitalizeCategory} Courses</h3>
            <div className="course-list">
                {filteredCourses.map((course) => (
                    <Course key={`${course.dept}-${course.number}`} id={`${course.dept}-${course.number}`} courseCode={course.number} title={course.title} units={course.units} />
                ))}
            </div>
        </div>
    );
}

export default Column;