import React from 'react';

const Welcome = () => {
  return (
<div>
    <h1 data-testid="welcome-header">Welcome</h1>
    <p> Welcome to the My Body Back app </p>
    <img src="#"/><p>This icon will take you to the "Support & Techniques" section </p>
    <img src="#"/><p>This icon will take you to the "Feeling Overwhelmed" section </p>
    <img src="#"/><p>This icon will take you to the "My Appointment" section </p>
</div>
  )
}

export default Welcome;