import {Component} from 'react'
import {v4 as uniqueIdv4} from 'uuid'

import './index.css'
import PasswordsList from '../PasswordsList'

const initialstyleNames = [
  'moody-blue',
  'buttercup',
  'mountain-Meadow',
  'mountain-Meadow-light',
  'ecstasy',
  'thunderbird',
  'cerulean',
]

class PasswordManager extends Component {
  state = {
    isChecked: false,
    userinputwebsite: '',
    userinputName: '',
    userinputPassword: '',
    userinputSearch: '',
    passwordListall: [],
  }

  onchangepassword = event => {
    this.setState({userinputPassword: event.target.value})
  }

  onchangewebsite = event => {
    this.setState({userinputwebsite: event.target.value})
  }

  onchangename = event => {
    this.setState({userinputName: event.target.value})
  }

  onchangecheckbox = () => {
    this.setState(prevstate => ({
      isChecked: !prevstate.isChecked,
    }))
  }

  onchangesearch = event => {
    this.setState({
      userinputSearch: event.target.value,
    })
  }

  onclickaddpassword = event => {
    event.preventDefault()
    const {userinputwebsite, userinputName, userinputPassword} = this.state

    const isstyleIndex = Math.ceil(Math.random() * initialstyleNames.length - 1)
    const newPasswordlist = {
      id: uniqueIdv4(),
      website: userinputwebsite,
      name: userinputName,
      password: userinputPassword,
      isStyle: initialstyleNames[isstyleIndex],
    }

    this.setState(prevstate => ({
      passwordListall: [...prevstate.passwordListall, newPasswordlist],
      userinputwebsite: '',
      userinputName: '',
      userinputPassword: '',
    }))
  }

  ondeletepassword = id => {
    const {passwordListall} = this.state
    this.setState({
      passwordListall: passwordListall.filter(eachoneis => eachoneis.id !== id),
    })
  }

  render() {
    const {
      userinputName,
      userinputSearch,
      userinputwebsite,
      userinputPassword,
      passwordListall,
      isChecked,
    } = this.state
    const passwordlistResults = passwordListall.filter(each =>
      each.website.toUpperCase().includes(userinputSearch.toUpperCase()),
    )
    const count = passwordlistResults.length

    return (
      <div className="appcontainer">
        <div className="appcontent-con">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="user-input-img-con">
            <div className="passwordmanager-smimg-con">
              <img
                className="passwordmanager-smimg"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
            <div className="user-inputs-con">
              <h1 className="heading">Add New Password</h1>
              <form onSubmit={this.onclickaddpassword}>
                <div className="each-user-input-con">
                  <img
                    className="each-input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <hr className="vr-line" />
                  <input
                    type="text"
                    className="user-each-input"
                    placeholder="Enter Website"
                    required="required"
                    value={userinputwebsite}
                    onChange={this.onchangewebsite}
                  />
                </div>
                <div className="each-user-input-con">
                  <img
                    className="each-input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <hr className="vr-line" />
                  <input
                    type="text"
                    className="user-each-input"
                    placeholder="Enter Username"
                    required="required"
                    value={userinputName}
                    onChange={this.onchangename}
                  />
                </div>
                <div className="each-user-input-con">
                  <img
                    className="each-input-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <hr className="vr-line" />
                  <input
                    type="password"
                    className="user-each-input"
                    placeholder="Enter Password"
                    required="required"
                    onChange={this.onchangepassword}
                    value={userinputPassword}
                  />
                </div>
                <div className="add-button-con">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="passwordmanager-img-con">
              <img
                className="passwordmanager-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
          <div className="user-input-results-con">
            <div className="heading-search-con">
              <div className="countcont">
                <h1 className="heading">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="each-user-search-con">
                <img
                  className="each-input-img"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <hr className="vr-line" />
                <input
                  type="search"
                  className="user-each-input"
                  placeholder="Search"
                  value={userinputSearch}
                  onChange={this.onchangesearch}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="checkboxcontainer">
              <input
                type="checkbox"
                id="selectedis"
                className="checkbox"
                onClick={this.onchangecheckbox}
              />
              <label htmlFor="selectedis" className="showbox-text">
                Show Passwords
              </label>
            </div>
            {`${count}` > 0 ? (
              <ul className="passwords-list-con">
                {passwordlistResults.map(eachone => (
                  <PasswordsList
                    eachpasswordlist={eachone}
                    key={eachone.id}
                    ondeletepassword={this.ondeletepassword}
                    isChecked={isChecked}
                  />
                ))}
              </ul>
            ) : (
              <div className="nopassimgcon">
                <img
                  className="no-passwordimg"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="heading">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
