// pages/index.js
import Link from 'next/link';



export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f4f4f9', height: '100vh' }}>
            <h1 style={{ backgroundColor: 'purple', color: 'white', padding: '20px', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Home Page</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, margin: '20px 0', display: 'flex', gap: '20px' }}>
                    <li>
                        <Link href="/about" style={{ backgroundColor: 'orange', padding: '10px 20px', fontFamily: 'fantasy', fontSize: '24px', textDecoration: 'none', color: '#fff', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact" style={{ backgroundColor: 'orange', padding: '10px 20px', fontFamily: 'fantasy', fontSize: '24px', textDecoration: 'none', color: '#fff', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/services" style={{ backgroundColor: 'orange', padding: '10px 20px', fontFamily: 'fantasy', fontSize: '24px', textDecoration: 'none', color: '#fff', borderRadius: '5px', transition: 'background-color 0.3s ease' }}>Services</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
