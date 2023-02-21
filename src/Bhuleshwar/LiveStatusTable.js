// Vision UI Dashboard PRO React examples
import DataTable from "examples/Tables/DataTable";

import React from 'react'

function LiveStatusTable() {
  return (
   
    <div >
        <DataTable
  table={{
    columns: [
      { Header: "name", accessor: "name" },
      { Header: "Bay1", accessor: "bay1" },
      { Header: "Bay2", accessor: "bay2" },
      { Header: "Bay3", accessor: "bay3" },
      { Header: "Bay4", accessor: "bay4" },
      { Header: "Bay5", accessor: "bay5" },
      { Header: "Bay6", accessor: "bay6" },
      { Header: "Bay7", accessor: "bay7" },
      { Header: "Bay8", accessor: "bay8" },

    ],
    rows: [
      {
        name: "Target",
        bay8: "2",
        bay6: "4",
        bay7: 42,
        bay2: "45",
        bay3: "67",
        bay1:"4",
        bay4:"6",
        bay5:"7",
      },
      {
        name: "Loaded",
        bay8: "2",
        bay6: "4",
        bay7: 42,
        bay2: "45",
        bay3: "67",
        bay1:"4",
        bay4:"6",
        bay5:"7",
      },
      {
        name: "Projection",
        bay8: "2",
        bay6: "4",
        bay7: 42,
        bay2: "45",
        bay3: "67",
        bay1:"4",
        bay4:"6",
        bay5:"7",
      },
      
    ]
  }}
/>

    
    </div>
  )
}

export default LiveStatusTable