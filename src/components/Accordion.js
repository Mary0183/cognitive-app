import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">
          {
            <div>
              <ul>
                {children.nice.map((trait) => (
                  <li key={children}>{trait}</li>
                ))}
              </ul>
              <ul>
                {children.happy.map((trait) => (
                  <li key={children}>{trait}</li>
                ))}
              </ul>
              <ul>
                {children.brave.map((trait) => (
                  <li key={children}>{trait}</li>
                ))}
              </ul>
              <ul>
                {children.smart.map((trait) => (
                  <li key={children}>{trait}</li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Accordion;
