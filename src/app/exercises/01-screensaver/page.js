import Link from "next/link";
import React from "react";

function ScreenSaverIndex() {
  return (
    <main>
      <p>Choose your color</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">Blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/green">Green</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndex;
