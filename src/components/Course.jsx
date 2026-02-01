const Course = (props) => {

    const { title, description, updateCourse } = props;

    const categories = ["COMPLETED", "CURRENT", "AVAILABLE"];

    return (
        <div className="course-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="course-actions">
                {categories.map((category) => (
                    <button key={category} onClick={() => updateCourse(props.id, category)}>
                        {category.substring(1).toLowerCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Course;