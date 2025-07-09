/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #222;
    border-radius: 20px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <div css={containerStyle}>
      <p>Emotion</p>
      <button>FIGHT</button>
    </div>
  );
};
