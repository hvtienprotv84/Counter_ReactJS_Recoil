import { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'
import {
  RecoilRoot,
  atom,

  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './App.css';




function App() {
  const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

        }} >

        <Card style={{
          padding: 20,
          border: "3px",
          borderColor: "black",
          borderStyle: "dashed",
          borderRadius: "10px",
          marginTop: "20px",
        }}>
          <Typography variant='h4' display={"flex"} justifyContent={"center"} fontWeight={"bold"}>Counter - Bộ Đếm - ReactJS - Recoil</Typography>


          <br />
          <CounterComponent />
          <Buttons />
        </Card>

      <div className='container_logo'>
        <img id='img1' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'/> 
        <img id='img2' src='https://www.recoiljs.cn/img/wordmark.png'/>
      </div>

      </div>
    </RecoilRoot>


  )
}

function Buttons() {
  return <div style={
    {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "30px",
    }
  }>

    <Decrease />
    <Reset />
    <Increase />


  </div>
}


function Increase() {
  const [count, setCount] = useRecoilState(countState);
  return <div>
    <Button class="shadow__btn" variant='contained' onClick={() => {
      setCount(existingCount => existingCount + 1)
    }}>+ Tăng</Button>

  </div>

}


function Decrease() {
  const [count, setCount] = useRecoilState(countState);
  return <div>
    <Button class="shadow__btn" variant='contained' onClick={() => {
      setCount(existingCount => existingCount - 1)
    }}>– Giảm</Button>
  </div>


}

function Reset() {
  const [count, setCount] = useRecoilState(countState);

  const resetCount = () => {
    setCount(0); // Set count to 0
  }; 
  return <div>
    <Button class="shadow__btn" variant='contained' onClick={resetCount}>⟳ Reset</Button>
  </div>

}


function CounterComponent() {

  const count = useRecoilValue(countState);
  return <div>
    <Typography variant='h3' textAlign={"center"} fontWeight={"bold"}>
      {count}
    </Typography>

  </div>


}

const countState = atom({
  key: 'countState',
  default: 0,
});
export default App
