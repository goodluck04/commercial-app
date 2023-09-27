import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";        

const Home = () => {
  return (
    <>
        <div className="home" id='home'>
        <main>
            <h1>Hagstar</h1>
            <p>Solution to all your moderm problem</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt='Graphics' />
        
        <div>
            <p>
                We are your one only solution to the tech problems
                you face
                every day. we are leading tech company whose aim is to 
                increase the
                problem solving ability in children.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
    <div>
        <h1>Who we are ?</h1>
        <p>
            elkgeeiorgnreirnfiwnfweio winfwien inefi nijwnifew onion 
            wofwk nwonfowdmiojwio jwnffi nwiefnwein n inwnwjn ino nav
            wnfjwn kjnwon nwnolnkwnown wjrroi knok owl m
             nwofn own 
             wpo pwmo wo lnwoeweojfwewkfnowfkwnfownowklnwonwof ownwknfweknfkn kjnwon
             nwon onon onwowjnfo nwiefnweinmwownfownonwnwinew
             wofwofnwnono nonipjwkljowwenknfefnpew
             weefmlmwlm;qempqmwmwlmelmw
             w;fwlflfwknfkwfnkw
        </p>
    </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={ {animationDelay: "0.1s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={ {animationDelay: "0.3s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={ {animationDelay: "0.5s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={ {animationDelay: "0.7s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>

    
  )
}

export default Home