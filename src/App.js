import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
 
    <div className='cardBox'>
    </div>
    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='gray' >
  <SideBar/>
  </GridItem>
  <GridItem colSpan={4} bg='gray' >
  <Navbar/>
  </GridItem>
  <GridItem className='posters' colSpan={4} >
    <Content/>
  </GridItem>
</Grid>
    </>

  );
}

export default App;
