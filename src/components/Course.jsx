const Course = (props) => {

    const { id, title, units, changeCourseCategory } = props;

    const categories = ["COMPLETED", "CURRENT", "AVAILABLE"];

    return (
        <div className="course-card">
            <div className="course-card-header">
                <h3>{id}</h3>
                <h3>{units} units</h3>
            </div>
            <h4>{title}</h4>
            <div className="course-actions">
                {categories.map((category) => (
                    <button key={category} onClick={() => changeCourseCategory(id, category)}>
                        {category.charAt(0) + category.substring(1).toLowerCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Course;