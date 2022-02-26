const Total = ( {course} ) => {

const total =  course.reduce((prev, curr) => {
    return {exercises: prev.exercises + curr.exercises} }
);

return (
  <table>
    <tfoot>
      <tr>
        <td width="200px">
          <b>Number of exercises:</b>
        </td>
        <td>
          <b>{total.exercises}</b>
        </td>
      </tr>
    </tfoot>
  </table>
)};

export default Total;