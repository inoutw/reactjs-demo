import React, { useContext } from 'react'
import { LoginVO } from 'api/platform-user'
import { withStore } from 'services/store'

interface LoginInfo extends LoginVO {
  isLogin: boolean
}
interface LoginContext {
  state: LoginInfo
  login(loginvo: LoginVO): Promise<LoginInfo>
  logout(): void
}
const defaultLogin: LoginInfo = { isLogin: false }
export const WithLogin = withStore('login', defaultLogin)
const LoginContext = React.createContext({} as LoginContext)
export const useLoginContext = () => useContext(LoginContext)

export const LoginProvider = WithLogin(props => {
  const [state, setState] = props.storeState

  const login = async (loginvo: LoginVO) => {
    const loginInfo = { ...loginvo, isLogin: true }
    setState(loginInfo)
    return loginInfo
  }
  const logout = () => {
    setState(defaultLogin)
    window.location.href = window.location.href
  }

  return <LoginContext.Provider value={{ login, logout, state }}>{props.children}</LoginContext.Provider>
})

export default LoginContext
