import Part from "./Part.js";

const Content = ({course}) => {

const parts = course.map(e =>
    <Part
        key={e.id}
        course = {e} />
);

return (     

<table>
    <tbody>
        {parts}
    </tbody>   
</table>
)};

export default Content;