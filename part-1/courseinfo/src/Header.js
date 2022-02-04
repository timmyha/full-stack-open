import { tab } from "@testing-library/user-event/dist/tab";

const Header = (props) => {
  return (

    <div class="col-2 bg-primary">
      <table>
        <thead>
          <tr>
            <td>
              <p><b>{props.course.name}</b></p>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Header;