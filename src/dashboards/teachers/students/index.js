import React from 'react'
import styled from "styled-components";
import TrChart from '../TrChart';
import TrInfo from '../TrInfo';
import { teacherData } from '../../../dummyData';
import { Table } from './studentTable';


const Home =styled.div`
    flex: 4;
`

const HomeWidgets=styled.div`
    display: flex;
    margin: 20px;
`
function Index() {
  return (
    <>

        <Home>
           <TrInfo/>
            <TrChart data = {teacherData} title="class Performance" grid dataKey="Courses"/> 
      
        </Home>
        <HomeWidgets>
          {/* <Widget /> */}
         
       </HomeWidgets> 
        <Table />

    </>
  )
}

export default Index

// import React from 'react'
// import { Table } from './studentTable'

// const Index = () => {
//   return (
//     <div>
//       <Table />
//     </div>
//   )
// }

// export default Index