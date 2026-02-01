const Column = (props) => {
    const { courses, category, changeCourseCategory } = props;
    
    const filteredCourses = courses.filter(course => course.category === category);

    return (
        <div className="column">
            <h3>{category.substring(1).toLowerCase()} Courses</h3>
            <div className="course-list">
                {filteredCourses.map((course) => (
                    <Course key={`${course.dept}-${course.number}`} id={`${course.dept}-${course.number}`} courseCode={course.number} title={course.title} units={course.units} />
                ))}
            </div>
        </div>
    );
}

export default Column;