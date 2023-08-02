import React from 'react';

const ThingsToCarry = () => (


  
  <div style={containerStyle}>
    <br/>
    <br/>
    <br/>
    <h5 style={titleStyle}>Things To Carry</h5>
    <h6 style={subTitleStyle}>Gears</h6>
    <ul style={listStyle}>
      <li>A rucksack bag and a day pack</li>
      <li>3-litre water bladder or water bottle</li>
    </ul>
    <h6 style={subTitleStyle}>Clothes</h6>
    <ul style={listStyle}>
      <li>A sun cap and a woolen cap</li>
      <li>UV protected sunglasses</li>
      <li>One cotton long sleeves and 2 short sleeve t-shirt</li>
      <li>1 fleece jacket</li>
      <li>1 heavy Thick jacket/down jacket</li>
      <li>1 pair of gloves</li>
      <li>At least 2 long pants (trek pants and cargo pants are favorable)</li>
      <li>4 sets of undergarments</li>
      <li>2 pair of socks</li>
      <li>A small towel</li>
      <li>A rain jacket or a poncho</li>
    </ul>
    <h6 style={subTitleStyle}>Footwear</h6>
    <ul style={listStyle}>
      <li>Above-the-ankle waterproof and breathable hiking boots with good grip</li>
      <li>Flip flops/sandals</li>
    </ul>
    <h6 style={subTitleStyle}>Medication</h6>
    <ul style={listStyle}>
      <li>Glucose powder</li>
      <li>Medicines for headaches, diarrhea, motion sickness</li>
      <li>Dettol</li>
      <li>Bandages</li>
      <li>Cotton</li>
    </ul>
    <h6 style={subTitleStyle}>Personal Accessories</h6>
    <ul style={listStyle}>
      <li>Toothpaste, toothbrush</li>
      <li>Paper soap, or sanitizer</li>
      <li>Sunscreen minimum of SPF40, lip balm, cold creams</li>
      <li>Body spray</li>
      <li>LED torch light</li>
    </ul>
  </div>
);

const containerStyle = {
  marginBottom: '20px',
  marginTop: '20px',
  padding: '20px',
  border: '1px solid #ccc',
};

const titleStyle = {
  fontSize: '23px',
  marginBottom: '10px',
  paddingBottom:"10px",
  paddingTop:"10px",
  paddingLeft:"10px",
  borderBottom: '1px solid #ccc',
  backgroundColor: '#A5D1E1',
};

const subTitleStyle = {
  fontSize: '20px',
  marginTop: '15px',
  marginBottom: '10px',
};

const listStyle = {
  listStyleType: 'disc',
  marginLeft: '20px',
  fontSize: '16px',
};
export {  ThingsToCarry };
