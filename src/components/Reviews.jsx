import React, { useEffect } from "react";
import "../styles/Reviews.css";

export default function Reviews() {
  useEffect(() => {
    updateCounts();
  }, []);

  function updateCounts() {
    const counts = document.querySelectorAll(".large-text");
    counts.forEach((count) => {
      const initialValue = parseInt(count.textContent);
      count.textContent = "0";
      const targetValue = initialValue;
      const increment = targetValue / 100; // Change 100 to adjust animation speed
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        count.textContent = Math.round(currentValue);
        if (currentValue >= targetValue) {
          count.textContent = targetValue;
          clearInterval(interval);
        }
      }, 20); // Change 20 to adjust interval speed
    });
  }

  return (
    <section className="container about" id="about">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3.5rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem", // Adding space between items
          }}
          id="about-items"
        >
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">650+</p>
              <p className="small-text">
                Projects <br /> Completed
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">10+</p>
              <p className="small-text">
                Years of <br /> experience
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">300+</p>
              <p className="small-text">
                Happy <br /> Clients
              </p>
            </div>
          </div>
          <div className="about-item">
            <div className="abt-text">
              <p className="large-text">400+</p>
              <p className="small-text">
                Customer <br /> reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
