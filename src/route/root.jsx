
import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import { ethers } from 'ethers';
import { useEffect, useState } from "react";


export async function loader(){
  
  
  

}




export default function Root() {


  const [user, setUser] = useState("")

  const handleConnect = async () => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    const account = ethers.utils.getAddress(accounts[0])
    setUser(account)
  }


  const loadBlockchainData = async () => {
    handleConnect()
    
    


  }

  useEffect(() => {
    loadBlockchainData()

    window.ethereum.on('accountsChanged', async () => {
      window.location.reload()
    })

  },[user])

  return (
    <>
      <header id="main__header">
        <h1>ghostieve v2</h1>
        <nav>
          <NavLink to="/app">Home</NavLink>
          <NavLink to="/app/user">About Me</NavLink>
          <NavLink to="/app/contact">Contact</NavLink>
        </nav>

        {
          user ? (
            <p>{user.slice(0,6) + '...' + user.slice(38,42)}</p>
          ): (
            <button onClick={handleConnect}>connect</button>
          )
        }

      </header>
      {/* Here we will be sending components */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  )

}