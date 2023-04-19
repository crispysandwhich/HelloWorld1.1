
import { NavLink, Outlet, useLoaderData } from "react-router-dom"
import { ethers } from 'ethers';
import { useEffect, useState } from "react";

import { handleConnect } from "../deApp";

export async function loader(){
  const account = await handleConnect()
  return {account};
}

export default function Root() {
  const {account} = useLoaderData()



  useEffect(() => {
    
    window.ethereum.on('accountsChanged', async () => {
      window.location.reload()
    })
    

  },[])

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
          account ? (
            <p>{account.slice(0,6) + '...' + account.slice(38,42)}</p>
          ): (
            <p>Get Freaking Metamask</p>
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