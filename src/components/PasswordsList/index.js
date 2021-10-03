import './index.css'

const PasswordsList = props => {
  const {eachpasswordlist, isChecked, ondeletepassword} = props
  const {name, website, password, isStyle, id} = eachpasswordlist
  const initial = website[0].toUpperCase()
  const initialstylecon = `initialcontainer ${isStyle}`
  const onclickdelete = () => {
    ondeletepassword(id)
  }
  return (
    <li className="each-passwordcon">
      <div className={initialstylecon}>
        <h1 className="initial-leter">{initial}</h1>
      </div>
      <div className="names-content">
        <p className="content-style">{website}</p>
        <p className="content-style">{name}</p>
        <p className="content-style">
          {isChecked ? (
            `${password}`
          ) : (
            <img
              alt="stars"
              className="stars-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </p>
      </div>
      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={onclickdelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordsList
