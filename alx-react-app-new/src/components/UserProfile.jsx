// src/components/UserProfile.jsx
import React from "react";

function UserProfile(props) {
    return (
        <div
            style={{
                border: "1px solid gray",
                borderRadius: "8px",
                padding: "15px",
                margin: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
            <p>
                Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
            </p>
            <p style={{ fontStyle: "italic", color: "#555" }}>{props.bio}</p>
        </div>
    );
}

export default UserProfile;


