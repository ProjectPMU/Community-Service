import React from 'react';
// Import shared styles :D
import '../components/Default.css';
import twitter from'./image/twitter.png'
import youtube from'./image/youtube.png'
import discord from'./image/discord.png'
import twitch from'./image/twitch.png'
import reddit from'./image/reddit.png'

function Footer()
{
    return (
        <footer className="footer">
            <div classname="social-link">
                <a href="#home" target="_blank" rel="noopener noreferrer" className="twitter-link left-footer footer-image"><img src={twitter} alt="Twitter"/></a>
                <a href="#home" target="_blank" rel="noopener noreferrer" className="youtube-link footer-image"><img src={youtube} alt="Youtube"/></a>
                <a href="https://discord.gg/pmu" target="_blank" rel="noopener noreferrer" className="discord-link footer-image"><img src={discord} alt="Discord"/></a>
                <a href="#home" target="_blank" rel="noopener noreferrer" className="twitch-link footer-image"><img src={twitch} alt="Twitch"/></a>
                <a href="#home" target="_blank" rel="noopener noreferrer" className="reddit-link right-footer footer-image"><img src={reddit} alt="Reddit"/></a>
            </div>
        </footer>
    )
}

export default Footer;