const Header = (props) => {
  return (

    <div className={"col-2 bg-primary"}>
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