import "./styles.css";

import uuid from "./utilities/uuid";
import { percentFrom } from "./utilities/percentage";
import ordinal from "./utilities/ordinal";
import roundPrecision from "./utilities/roundPrecision";

const demos = {
  ordinal: { selector: "#ordinals" },
  roundPrecision: { selector: "#round-precision" },
  percentage: { selector: "#percentage-of" },
  uuid: { selector: "#uuid" }
};

// select demo div
Object.keys(demos).map(
  k => (demos[k].el = document.querySelector(demos[k].selector))
);

demos.ordinal.el.innerHTML = `
 <fieldset>
    <legend>ordinal(Number)</legend>
    <p><code>ordinal(1)</code> returns ${ordinal(1)}</p>
    <p><code>ordinal(2)</code> returns ${ordinal(2)}</p>
    <p><code>ordinal(3)</code> returns ${ordinal(3)}</p>
    <p><code>ordinal(4)</code> returns ${ordinal(4)}</p>
    <p><code>ordinal(11)</code> returns ${ordinal(11)}</p>
    <p><code>ordinal(50)</code> returns ${ordinal(50)}</p>
    <p><code>ordinal(0)</code> returns ${ordinal(0)}</p> 
 </fieldset>
`;

demos.roundPrecision.el.innerHTML = `
  <fieldset>
    <legend>roundPrecision(number, decimals)</legend>
    <p><code>roundPrecision(7.578947368421053,2)</code> returns ${roundPrecision(
      7.578947368421053,
      2
    )}</p>
  </fieldset>
`;

demos.percentage.el.innerHTML = `
  <fieldset>
    <legend>percentFrom(of, from)</legend>
    <p><code>percentFrom(50, 100)</code> returns ${percentFrom(50, 100)}</p>
    <p><code>percentFrom(5, 100)</code> returns ${percentFrom(5, 300)}</p>
  </fieldset>
`;

demos.uuid.el.innerHTML = `
  <fieldset>
    <legend>uuid()</legend>
    <p><code>uuid()</code> returns ${uuid()}</p>
    <p><code>uuid()</code> returns ${uuid()}</p>
    <p><code>uuid()</code> returns ${uuid()}</p>
  </fieldset>
`;
