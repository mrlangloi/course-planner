const Column = (props) => {
    const { courses, updateCourses } = props;
    
    return (
        <div className="column">
            {props.children}
        </div>
    );
}

export default Column;