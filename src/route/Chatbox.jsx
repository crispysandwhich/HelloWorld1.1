import { useLoaderData } from "react-router-dom"


export default function Chatbox() {


  return (
    <>
      <div id="chatbox">
        <h2>Chat Channel</h2>
        <p> what is life</p>
      </div>

      <form>
        <input type="text"  placeholder={`Message `}  />

        <button type="submit">
          <i>📤</i>
        </button>
      </form>

    </>
  )

}