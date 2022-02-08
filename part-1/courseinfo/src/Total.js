const Total = (props) => {
  return (
    <div className={"col-2 bg-danger"}>
      <table>
        <tfoot>
          <tr>
            <td width="200px">
              <b>Number of exercises:</b>
            </td>
            <td>
              <b>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Total;