import React from "react";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
          <div className="hero-text">
            <h2 className="hero-heading mb-3">
              A warm, nurturing space for early years learning.
            </h2>
            <p className="hero-subtext mb-4">
              At ABC Nursery, children explore, play, and grow in a safe,
              inclusive environment designed to support their curiosity and
              confidence.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary-abc">Book a visit</button>
              <button className="btn btn-outline-secondary-abc">
                View session times & fees
              </button>
            </div>
          </div>

          <div className="hero-visual text-center">
            {/* Placeholder for your 3D alphabet blocks image */}
            <div className="hero-blocks-placeholder">ABC</div>
            <p className="small mt-2">
              Playful learning through stories, songs, and exploration.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h3 className="section-heading">Caring staff</h3>
              <p>
                Our experienced team creates a gentle, supportive environment
                where every child feels seen, heard, and valued.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="section-heading">Play-based learning</h3>
              <p>
                We follow a play-led approach that encourages curiosity,
                creativity, and early independence.
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="section-heading">Safe & inclusive</h3>
              <p>
                Our setting is designed to be welcoming and accessible for all
                children and families.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
