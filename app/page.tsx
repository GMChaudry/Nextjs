// pages/index.js
import Link from 'next/link';

export default function Home() {
    return (
        <div >
            <h1 style={{backgroundColor:'purple'}}>Home Page</h1>
            <nav>
                <ul>
                    <li><Link style={{backgroundColor:'orange',fontFamily:"fantasy",fontSize:"30px"}} href="/about">About</Link></li>
                    <li><Link style={{backgroundColor:'orange',fontFamily:"fantasy",fontSize:"30px"}} href="/contact">Contact</Link></li>
                    <li><Link style={{backgroundColor:'orange',fontFamily:"fantasy",fontSize:"30px"}} href="/services">Services</Link></li>
                </ul>
            </nav>
        </div>
    );
}
