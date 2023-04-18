import { Link, Outlet } from "react-router-dom";

import Astro from '../assets/images/thumbnail_Lonely dead astronaut.png'


export default function User() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
  };

  return (
    <div id="user">

      <div className="user__header">
        <div className='user__header__left'>
            <h2>Hi my name is <span>Lyub</span></h2>
            <div className='user__header__left_imageContainer'>
              <img src={Astro} alt="Basically a little version of me because i feel numb" />
            </div>
        </div>
        <div className='user__header__right'>

          <div className='user__header__right__favorites'>
            <h2>My Favorite sites</h2>
            <ol>
              <li>
                <a href="https://motherfuckingwebsite.com/" target="_blank" className="glitch">MFW</a>
              </li>
              <li>
                <a href="#" className="glitch">youtube before google intergration</a>
              </li>
              <li>
                <a href="https://thebestmotherfucking.website/" target='_blank' className="glitch">MFW2</a>
              </li>
            </ol>
          </div>

          <div className="user__header__right__about">
            <h2>About me</h2>
            <p>
              I am just a dude who is trying to make the most out of life. Been struggling to get situated with his girl for 3 years. Lost myself in the process with all the cancer and toxic bullshit that not only happenend between us and litteraly at work and home. I had setup myself up for coding, programming, hacking, and design. But honestly feel like I still have much to do and really feel like i lost a lot of time. I am a young awesome dude, who is looking for a mentor, looking for money, had mined bitcoin back in 2009 or 2010 on my old windows xp pc. Thanks to my dumbass while trying to add more ram to the pc it got currupt. Back in Highschool or middle school ended up buying over 150k doge for like 10 dollars back when doge was about .00000015 or when they used DOGE to setup that NASCAR stuff it was a while ago idk i was kinda of a baby ahaha, but where is the website? Where is that private key. I just want to KMS. But no worries, i had made some investments im looking forward to sharing and hopefully creating something nice. <strong>Stay tuned</strong>
            </p>
            <p>
              I had set myself up for coding, I had money, but with all the stress that had came from having an insecure girlfriend, a toxic or dramatic work environment, really mind fcked me and destoryed my mindset about myself, her and everyone else around me. Thanks to everyone around the only thing that accured was drama. Drowning in stupid shit no matter how many times I tried to prove myself lowkey just got to a point where I am ready to give up. Being followed home, stalked, and honestly looked at a different way. I hope to prove not only to you, but everyone who talked down on me, that life is a bitch, when you get too busy trying to ruin someone else life, something is going to happen where you will fall. 
            </p>
            <p>
              I know this is nothing cool, I need to get better in my designs and layout, better at creating a folder structure, better at programming. Just need to get less rusty. I had a plan that was going to be awesome, thought I would be able to manage it with my girl and turn her into my queen. Got so many thing I am working for thanks to the bullshit and stress litteraly lost my self. but i will rise from this and never let a female or her toxic group of individuals bring me down again. Wish i put my foot down sooner and maybe couldve have setup 2020 to be the best freaking year and maybe before the halving build some good apps and spread some knowledge but honestly feel numb inside and this world is evil. Built on lies and maniupulation, to break peoples dreams and spirits to force them into feeling like the only thing they can do to live is work for someone who will work them till they drop to the floor, having a replacement ready to take their misrable place and repeat the cycle. 
            </p>
            <p>
              I used to love and hate life, working towards trying to create a better environment for me and my friends. But feel like I have gotten so distance and disconnected, just watching how everyone treated me and what they would say to me just really showed me that people would say or do anything to trigger you to get a reaction out of you. But why.. I dont know. Feel like this world loves drama more than learning more about life or the things they are patient about. Feel like there are more people would would rather step all over you and call tell themselfs they are better than you than actually trying to also boost you up in life so you can also have chances to create something or bring something into this world that can potentially help someone else. Its just sad.
            </p>
            <p>
              I am tired of all this and really hope to be able to change this stupid world for the better. I am definitly going to struggle but hopefully make a change cause I hate what this world. Crazy to think life after school would be better than just staying in school. No wonder many people live in regret and just live to work instead of actually live. Its not hard to do something good, feel like the only hard part is how hard headed people are. Not saying I am not hard headed. Look at me I am not going to stop till I see my family, friends, and the people I care about in this world actually live instead of get suck into this stupid buisness manipulation tactics.
            </p>
            <p>
              Feel like I talked to much, if you read it dont read thats great, things will be updated soon, I have so much to do and so many things to catch up on. I am not yet the best as I can be, but the plan in session. Just gotta get myself a little more motivated instead of ready to die.
            </p>
          </div>

        </div>
      </div>

      <div className="tease">
        <h2>You wanna talk to me?</h2>
        <Link to={'/app/channel'}> Join some Channels </Link>
      </div>
      

      <div id="detail">
        <Outlet />
      </div>

    </div>
  );
}