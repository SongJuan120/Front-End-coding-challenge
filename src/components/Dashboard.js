import React, { useState } from "react"
import { Button } from "react-bootstrap"
import Products from "./Products"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [setError] = useState("")
  const { logout } = useAuth()
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
      <div className="d-flex flex-row justify-content-end" style={{marginBottom : "20px"}}>
        <Button variant="danger" onClick={handleLogout}>
          Log Out
        </Button> 
      </div>   
      <Products></Products>
    </div> 
      
         
    </>
  )
}
