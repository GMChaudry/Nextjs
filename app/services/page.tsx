import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <h1 style={{backgroundColor:"green"}}> Services</h1>
      <ul>
        <li><Link style={{backgroundColor:"blue"}} href="/services/Service1">service 1</Link> </li>
      </ul>
    </div>
  );
};