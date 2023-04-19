import {useEffect} from 'react'
import { useLoaderData } from "react-router-dom"
import { getChannelById, mintAccess } from "../deApp"

export async function loader({params}) {
  console.log(params)
  const channel = await getChannelById(params.id)
  const joined = await mintAccess(channel)
  if(joined){
    return {joined, channel}
  } else{
    return {joined}
  }
}



export default function Chatbox() {
  const {joined, channel} = useLoaderData()


  return (
    <>
      <div id="chatbox">
        <h2>Chat Channel</h2>
        <div className="chat">
          {
            !joined ? (
              <p>Please purchese NFT to access chat</p>
            ) : (
              <div className="chatMessages">
                <p>Hoow mother fucker</p>
              </div>
            )
          }
        </div>
      </div>

      <form className={joined ? 'show-message-option' : 'hide-message-option'}>
        <input type="text"  placeholder={`Message `}  />

        <button type="submit">
          <i>📤</i>
        </button>
      </form>

    </>
  )

}