
import './App.css';
import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';



function App() {
//   const mark = {10: ' ',
//   30: ' ',
//   100: " ",
//   500: ' ',
//   900: ' '}

// const [Data, setData] = React.useState(
//   {
//       left: "", 
//       right: "", 
      
//   }
// )
//   function handleChange(event){
// console.log(event)
//     setData(prevData => 
//                (  { ...prevData,
//                     left : event[0],
//                     right : event[1]})       
//     )
//   }

  // function handle(event){
  //   const {value} = event.target
  //   console.log(parseInt(value) )
  //       setData(prevData => {
  //         return {
  //                       ...prevData,
  //                       left : parseInt(value)
  //                   }
  //       })
  //     }

  // range={{ 'min': [100],
      // // '18%': [2500, 500],
      // // '28%': [10000, 1000],
      // // '48%': [20000, 2000],
      // // '58%': [40000, 5000],
      // // '68%': [100000, 10000],
      // // '78%': [200000, 50000],
      // // '88%': [400000, 100000],
      // 'max': [900000] }}

      // const [allMeme,setAllMeme] = useState([])
            // React.useEffect(() => {
            //  const [Data, setData] = React.useState(
            //     {
            //       left: 0, 
            //       right: 100, 
                  
            //   })
            // },[Data])

            

      const [Data, setData] = React.useState(
          {
              left: 0, 
              right: 100, 
              left1: 0, 
              right1: 200, 
              
          }
        )

        // const [Data1, setData1] = React.useState(
        //   {
        //       left: 0, 
        //       right: 200, 
              
        //   }
        // )

      // function handleChange(p,event){
       
      //   setData(prevData => (p==='topS'?({
      //     ...prevData,
      //     left: event[0],right:event[1],
          
      //   }):({...prevData,
      //     left1: event[0],right1:event[1],})))
      //     }


          function handleChange(l,r,event){
          
            setData((prevData) => ({
           
              ...prevData,
              [l]: event[0],[r]:event[1]
                  }))
              }

          // function handleleft(event){
           
          //     const {value} = event.target
             
          //         setData(prevData => 
          //           ({
          //                   ...prevData,
          //                   left : (value),
                          
          //             })
          //         )
          //       }


                // function handle(p,event){
         
                //   const {value} = event.target
                //       setData(prevData => 
                //         (p==="r"?({
                //                 ...prevData,
                //                 right : (value)
                //           }):p==='r1'?({...prevData,
                //             right1 : (value)}):p==='l1'?({...prevData,
                //               left1 : (value)}):({
                //             ...prevData,
                //             left : (value),
                          
                //       }))
                //       )
                //     }


                    function handle(p,event){
         
                      const {value} = event.target
                         setData(prevData=>({
                          ...prevData,
                          [p]: (value)
                         }))
                        }

                   
         

  return (
   
    <div>
<div className='mb-[100px]'><Nouislider 
      range={{ min: 0, max: 100 }}
      start={[Data.left,Data.right]}
      tooltips= {[true,true]}
      step ={2}
      onChange={(e) => handleChange('left','right',e)}
      connect
      /></div>




<input
className='border-[1px] rounded border-[black] mr-[50px]'
      type="number"
      placeholder={"SG$"+Data.left}
      value={Data.left}
      onChange={(e)=>handle('left',e)}
      />

<input
className='border-[1px] rounded border-[black] mr-[50px] mb-[100px]'
      type="number"
      placeholder={"SG$"+Data.right}
      value={Data.right}
      onChange={(e)=>handle('right',e)}
      />
      

      <div className='mb-[100px]'><Nouislider 
      range={{ min: 0, max: 200 }}
      start={[Data.left1,Data.right1]}
      tooltips= {[true,true]}
      step ={2}
      onChange={(e) => handleChange('left1','right1',e)}
      connect
      /></div>
      
     {/* /* <Sliders 
     range
     onChange={(v)=>handleChange(v)}
     min={0}
     max={1000}
     marks={mark}
     step={null}
     defaultValue={[30, 500]}
     value={[Data.left,Data.right]}
     allowCross={false}
     /> */}

{/* <select
                // value={Data.left}
                // onChange={handle}   
            >
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="900">900</option>
             
            </select> */}









<input
className='border-[1px] rounded border-[black] mr-[50px]'
      type="number"
      placeholder={"SG$"+Data.left1}
      value={Data.left1}
      onChange={(e)=>handle('left1',e)}
      />

<input
className='border-[1px] rounded border-[black] mr-[50px]'
      type="number"
      placeholder={"SG$"+Data.right1}
      value={Data.right1}
      onChange={(e)=>handle('right1',e)}
      />


{/* <input
      type="number"
      placeholder={"SG$"+values[1]}
      value={values[1]}
      onChange={handlemax}
      /> */}
         
    </div>
  );
}
export default App;
