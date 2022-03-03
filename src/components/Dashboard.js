import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Products from "./Products"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div className="d-flex flex-column w-100">
      <div className="d-flex flex-row justify-content-end">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> 
      </div>   
      <Products></Products>
    </div> 
      
         
    </>
  )
}
