import React from "react";
import {
   AreaChart,
   Area,
   YAxis,
   XAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
   BarChart,
   Bar
   } from "recharts";
   class GrowthChart extends React.Component {

    data = [
      {
         name: "Jan 2018",
         "Student Success": 3432,
         "Platform Review": 2342
      },
      {
         name: "Feb 2019",
         "Student Success": 2342,
         "Platform Review": 7746
      },
      {
         name: "Mar 2020",
         "Student Success": 4565,
         "Platform Review": 2556
      },
      {
         name: "Apr 2021",
         "Student Success": 6654,
         "Platform Review": 4465
      },
      {
         name: "May 2022",
         "Student Success": 8765,
         "Platform Review": 5553
      }
   ];
    // function  UpdatedChart() {
      
     
      render() {
        // const backStyle={
        //   width:800,
        //   height:500
        // }
         return (
          // <ResponsiveContainer>
          <AreaChart
          // style={backStyle}
          //  sm={{width:200,
          //  height:200}}

          width={800}
          height={500}
             data={this.data}
             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
             </linearGradient>
             <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
             </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area
             type="monotone"
             dataKey="Student Success"
             stroke="#8884d8"
             fillOpacity={1}
             fill="url(#colorUv)"/>
          <Area
             type="monotone"
             dataKey="Platform Review"
             stroke="#82ca9d"
             fillOpacity={1}
             fill="url(#colorPv)"/>
          </AreaChart>
          
          // </ResponsiveContainer>
          
           
      );
   }
}
export default GrowthChart;



























// import React ,{PureComponent} from 'react'
// import {
//   AreaChart,
//   Area,
//   YAxis,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
//   } from "recharts";




// function UpdatedChart() {
//   const data = [
//     {
//       name: '2016',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
  
//     {
//       name: '2017',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: '2018',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: '2019',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: '2020',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: '2021',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: '2022',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
  
//   ];
//   return (
//     <>
//       <ResponsiveContainer  style={{width:'100%', height:'100%'}}>
//       <AreaChart
//         width={500}
//         height={400}
//         data={this.data}
//         margin={{
//           top:10,
//           right:30,
//           left:0,
//           bottom:0,
//         }}
//       >

//       <CartesianGrid horizontal='true' vertical=''  />
//       <XAxis dataKey="name"/>
//       <YAxis/>
//       <Area type='monotone' dataKey='uv' stroke='red' fill='green'/>

//       </AreaChart>
      
//       </ResponsiveContainer>
//     </>
//   )
// }

// export default UpdatedChart