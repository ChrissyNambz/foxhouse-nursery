import React from "react";

function Footer() {
  return (
    <footer className="mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0 small">
          © {new Date().getFullYear()} ABC Nursery. All rights reserved.
        </p>
        <p className="mb-0 small">Designed & built by Christine Nambatya.</p>
      </div>
    </footer>
  );
}

export default Footer;
