import {useState} from 'react'
import { Outlet, Link, useLoaderData, Form, redirect } from "react-router-dom"

// Smart Contract DB format
import {getChannels, createChannel} from '../deApp'

export async function loader(){
  const channels = await getChannels()
  return {channels};
}

export async function action({request, params}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let result = await createChannel(updates.channelName, updates.channelCost)
  console.log(result)
  return redirect(`/app/channel/${result.length}`)
}



export default function Channel() {
  const {channels} = useLoaderData()


  return (
    <section id="server">
      <div id="channel">
        <h2>Channels</h2>

        <div className='channel-parms'>

          <Form method="post">
            <input name="channelName" placeholder="Channel Name"/>
            <input type="number" name="channelCost" placeholder="cost in eth"/>
            <button type="submit">New</button>
          </Form>
        </div>

        <nav>

          {
            channels.length ? (
              <ul>
                {channels.map((channel) =>(
                  <li key={channel.id}>
                    <Link to={`/app/channel/${channel.id}`} >
                      {channel.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ): (
              <p>No channels</p>
            )
          }


          {/* <ul>
            <li>
              <Link href={`/app/channel/1`}>General</Link>
            </li>
            <li>
              <Link href={`/app/channel/2`}>intro</Link>
            </li>
            <li>
              <Link href={`/app/channel/3`}>jobs</Link>
            </li>
          </ul> */}
        </nav>

      </div>
      <div id="detail">
        <Outlet />
      </div>
    </section>
  )
}