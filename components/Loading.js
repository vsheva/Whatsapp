import React from 'react';
import styled, { css } from 'styled-components';
import Circle from 'better-react-spinkit/dist/Circle';

const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loading;

const center = styled.div``;
