import React from "react";
import style from "./LOSS.module.css";
export default function LOSS() {
    return (
      <section className={style.LOSS}>
        <div>
                <h1 className={style.LOSS__h1}>We ❤ open source</h1>
          <p className={style.LOSS__p}>
            At npm, Inc., we're proud to dedicate teams of full-time employees
            to operating the npm Registry, enhancing the CLI, improving
            JavaScript security, and other projects that support and nurture a
            vibrant open source community.
          </p>
        </div>
      </section>
    );
}