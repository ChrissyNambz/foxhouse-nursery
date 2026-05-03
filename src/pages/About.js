import React from "react";

function About() {
  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-centre g-5">
            <div className="col-md-6 text-centre">
              <div className="about-image-placeholder"></div>
            </div>

            <div className="col-md-6">
              <h2 className="section-heading mb-3">About Foxhouse Nursery</h2>
              <p>
                Foxhouse Nursery is a warm, community‑focused early years
                setting where children learn through play, exploration, and
                creativity. Our team is dedicated to creating a safe, nurturing
                environment where every child feels valued and supported.
              </p>
              <p>
                Founded with the belief that early childhood is a magical time,
                Foxhouse encourages curiosity, confidence, and joyful learning
                through hands‑on activities, storytelling, and outdoor play.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
