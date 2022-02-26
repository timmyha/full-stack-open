
const Part = ( {course} ) => {
    
    return (
<>
<tr>
    <td>
        {course.name}
    </td>
     <td>
        {course.exercises}
    </td>
</tr>
</>              
)};

export default Part;