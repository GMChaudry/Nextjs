import Link from 'next/link';


export default function Services() {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{
        backgroundColor: "green", 
        color: "white", /* White text */
        padding: "15px", /* Adds spacing inside the header */
        borderRadius: "8px", /* Rounded corners */
      }}>
        Services
      </h1>
      <ul style={{ listStyleType: "none", padding: 0, margin: "20px 0" }}>
        <li style={{ margin: "10px 0" }}> {/* Adds space between list items */}
          <Link style={{
            backgroundColor: "blue", 
            color: "white", /* White text */
            padding: "10px 15px", /* Adds padding inside the link */
            borderRadius: "5px", /* Rounded corners */
            textDecoration: "none", /* Removes underline */
            display: "inline-block", /* Makes the links behave like buttons */
          }} href="/services/app-development">
            App Development
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link style={{
            backgroundColor: "blue", 
            color: "white", 
            padding: "10px 15px", 
            borderRadius: "5px", 
            textDecoration: "none", 
            display: "inline-block",
          }} href="/services/Website-development">
            Web Development
          </Link>
        </li>
      </ul>
    </div>
  );
};
