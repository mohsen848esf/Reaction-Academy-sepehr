import React from 'react';
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";

function PreRingLoader() {
    const override = css`
    display: block;
    margin: 100px auto;
  `;

    return (
        <div>
            <RingLoader
                color="#cca349"
                css={override}
                size={150}
                speedMultiplier={2}
            />
        </div>
    );
}

export default PreRingLoader;