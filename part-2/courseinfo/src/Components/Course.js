import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const Course = ( {course} ) => {


return (
<>
<Header 
    course={course} />
<Content 
    course={course.parts} />
<Total 
    course={course.parts} />
</>
)
};

export default Course;