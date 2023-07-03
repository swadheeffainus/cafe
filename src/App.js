import React from 'react';
import './App.css'

function App() {
  return (
    
    <div>
      <header>
        <h1 className='container'>Planet</h1>
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-67px'
        }}>
          <ul className='navbar'>
            <botton>
              <a style={{
                fontFamily: 'monospace',
                color: 'whitesmoke',
                // width: '100px',
                padding: '20px',
                fontSize: '120%',
                border:'none',
              }} href="/">Home</a>
            </botton>
            <botton>
              <a style={{
                fontFamily: 'monospace',
                color: 'whitesmoke',
                // width: '100px',
                fontSize: '120%',
                padding: '15px'
              }} href="/">Menu</a>
            </botton>
            <botton>
              <a style={{
                fontFamily: 'monospace',
                color: 'whitesmoke',
                // width: '100px',
                fontSize: '120%',
                padding: '15px'
              }} href="/">Event</a>
            </botton>
            <botton>
              <a style={{
                fontFamily: 'monospace',
                color: 'whitesmoke',
                // width: '100px',
                fontSize: '120%',
                padding: '15px'
              }} href="/">Contact</a>
            </botton>
          </ul>
        </nav>
      </header>
              
<div>               
  <svg style={{
   marginTop: '-35px'
  }} viewBox="0 0 500 500">
    <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
    <text width="100%" >
      <textPath style={{color:'white',
                              display:'flex',
                              justifyContent: 'center',  
                              marginTop: '300px',
                              fontFamily: 'monospace',
                              fontSize: '8px',
                              marginLeft: '3px'
                }} xlinkHref="#curve" startOffset="45%" >
        .c r a f t.
      </textPath>
    </text>
  </svg>
  <span style={{
    fontSize: '120px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-91.8%',
    color: 'white',
    fontFamily:'"Brush Script MT", cursive',
    marginLeft: '-2%'
  }}>Coffee</span>

  <span style={{
    color: 'white',
    fontFamily: 'math',
    fontSize: '50px',
    display: 'flex',
    justifyContent: 'center'
  }}><b>COFFEE SERVED RIGHT</b></span>
  <p className='about'>At our café, we are passionate about sourcing the finest coffee beans and using fresh, locally sourced ingredients for our pastries. Our skilled baristas craft each cup with care.</p>
</div>   
<div className='box'>      
    <button className='button'>Shop now</button>
</div>

<div className='box1'>      
    <button className='button1'>Read more</button>
</div> 
    </div>
    
  );
}



export default App;

