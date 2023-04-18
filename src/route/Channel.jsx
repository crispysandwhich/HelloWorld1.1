import {useState} from 'react'
import { Outlet, Link } from "react-router-dom"



export default function Channel() {

  const channelHandler = async (channel) => {
    console.log(`the channel ID = ${channel}`)

    // Calls smart contract to check if channel id matches the data in smart contract

    // If user has already joined the channel it will send them to the chatbox 
    // If not it will create a transaction and then send them to the chatbox

    return redirect(`/app/user/channel/${channel}`)
  }

  return (
    <section id="server">
      <div id="channel">
        <h2>Channels</h2>

        <div className='channel-parms'>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>

        <nav>
          <ul>
            <li>
              <Link href={`/app/channel/1`}>General</Link>
            </li>
            <li>
              <Link href={`/app/channel/2`}>intro</Link>
            </li>
            <li>
              <Link href={`/app/channel/3`}>jobs</Link>
            </li>
          </ul>
        </nav>

      </div>
      <div id="detail">
        <Outlet />
      </div>
    </section>
  )
}