 const Total = (props) => {
     return (
       <div>
         <table>
           <tr>
             <td width="200px">
        <b>Number of exercises:</b>
              </td>
              <td>
              <b>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</b>
              </td>
          </tr>
        </table>
       </div>
     )
   }

   export default Total;