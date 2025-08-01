"use client"

import { useState, useEffect, useCallback } from "react"
import "../styles/donate.css"

export default function Donate() {
  const [activeMethod, setActiveMethod] = useState("nepal")
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    document.body.className = theme + "-theme"
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }, [])

  const handleMethodChange = (method) => {
    setActiveMethod(method)
  }

  return (
    <div className="donate-container">
      <div className="donate-card">
        <h1 className="donate-title">Support my work</h1>
        <p className="donate-description">
          All the money donated will go toward maintaining server and supporting my works.
        </p>

        <div className="method-tabs">
          <button
            className={`method-tab-button ${activeMethod === "nepal" ? "active" : ""}`}
            onClick={() => handleMethodChange("nepal")}
          >
            Nepalese Method
          </button>
          <button
            className={`method-tab-button ${activeMethod === "international" ? "active" : ""}`}
            onClick={() => handleMethodChange("international")}
          >
            International Method
          </button>
        </div>

        <div className="method-content">
          {activeMethod === "nepal" && (
            <div className="nepal-method-section">
              <h3 className="content-heading">Scan to Donate (Nepal)</h3>
              <img
                src="QR.jpg"
                alt="QR Code for Donation"
                width={200}
                height={200}
                className="qr-code-image"
              />
              <p className="content-text">Scan the QR code above using your preferred mobile banking app in Nepal.</p>
            </div>
          )}

          {activeMethod === "international" && (
            <div className="international-method-section">
              <h3 className="content-heading">International Donation Options</h3>
              <p className="content-text">
                Thank you for your interest in supporting my work internationally. Please contact me directly for
                international donation methods.
              </p>
              <p className="content-text">
                Email:{" "}
                <a href="mailto:anupbhujel07@gmail.com" className="email-link">
                  anupbhujel07@gmail.com
                </a>
              </p>
              <div className="content-separator"></div>
              <p className="coming-soon-text">More international options coming soon!</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Theme Toggle Icon */}
      <button onClick={toggleTheme} className="theme-toggle-floating" aria-label="Toggle theme">
        {theme === "light" ? (
          <img src="moon.png" alt="Moon icon for dark mode" className="theme-icon" />
        ) : (
          <img src="sun.png" alt="Sun icon for light mode" className="theme-icon" />
        )}
      </button>
    </div>
  )
}
