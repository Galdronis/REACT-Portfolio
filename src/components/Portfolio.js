import React from 'react';
import travel from '../assets/Travel.png'
import quiz from '../assets/Quiz.png'
import command from '../assets/Command.png'
import momentum from '../assets/Momentum.png'
import password from '../assets/Password.png'
import note from '../assets/Note.png'
import '../styles/Portfolio.css'

function Portfolio() {
    return (
        <div id='projects'>
            <div>
                <img style={{width: 800, height: 500}} src={travel} alt='A screenshot of the landing page of the travel guide I made!'></img>
                <p>This is a travel guide for Columbus Ohio that I and three others made together! Found here is a link to the application.</p>
                <a href='https://galdronis.github.io/Travel-Guide'>Travel Guide</a>
                <br></br>
                <a href='https://github.com/Galdronis/Travel-Guide'>Repo for the guide</a>
                </div>
            <div>
                <img style={{width: 1000, height: 500}} src={quiz}></img>
                <p>This is a short little quiz I made very early in my coding journey entirely in Javascript! I hope you know your music terms!</p>
                <a href='https://galdronis.github.io/Music-quiz/'>Here is the quiz itself!</a>
                <br></br>
                <a href='https://github.com/Galdronis/Music-quiz'>And here is the code!</a>
            </div>
            <div>
                <img style={{width: 800, height: 500}} src={command}></img>
                <p>Pictured here is a short command line application I built using Inquirer prompts. This application creates quality READMEs and was very useful throughout my class.</p>
                <a href='https://github.com/Galdronis/README-Generator'>Here is the code for the application.</a>
                <br></br>
                <a href='https://www.youtube.com/watch?v=4NGEaOq7wn8'>And here is a video of me demonstrating it!</a>
            </div>
            <div>
                <img style={{width: 1000, height: 500}} src={momentum}></img>
                <p>Pictured here is another of the larger applications I have had the pleasure to work on. A short project for school entitled Momentum! It functions as a central repository for any and all notes and textbooks that could be scattered across various websites for online students.</p>
                <a href='https://github.com/Galdronis/Momentum'>Here is the code for Momentum.</a>
                <br></br>
                <a href='https://momentum-initial.herokuapp.com'>And here is the deployed application!</a>
            </div>
            <div>
                <img style={{width: 1000, height: 500}} src={password}></img>
                <p>Another piece of work from early in my development as a web developer, this is a short password generating algorithm. After being asked a few prompts about what constraints you want, say hello to a new password!</p>
                <a href='https://github.com/Galdronis/Password-generator'>Here is the code for it.</a>
                <br></br>
                <a href='https://galdronis.github.io/Password-generator/'>And here is the deployed application.</a>
            </div>
            <div>
                <img style={{width: 1000, height: 500}} src={note}></img>
                <p>This is a small application that allows you to write notes onto a page and save them for later! For this application, I was given broken starter code and I refactored it into a functioning note taking app!</p>
                <a href='https://github.com/Galdronis/Taker-of-Notes'></a>
                <br></br>
                <a href='https://galdronis.github.io/Taker-of-Notes'></a>
            </div>
        </div>
    )
}


export default Portfolio