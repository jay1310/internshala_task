import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';



function Table() {
  return (
<>
    <div className="row1">
    <div className="table1Holder">
      <table className="table1">
          <tr>
            <th colSpan={2} align='left'>
                Most Leads 
            </th>
          </tr>
        
        
            <tr            >
              <td >Name</td>
              <td align="right">abc</td>
            </tr>
            <tr            >
              <td >Pan</td>
              <td align="right">123</td>
            </tr>
            <tr            >
              <td >Address</td>
              <td align="right">noida</td>
            </tr>
            <tr            >
              <td >Phone</td>
              <td align="right">123</td>
            </tr>
            <tr            >
              <td>email</td>
              <td align="right">abc@test.com</td>
            </tr>
       
      </table>
      </div>

      <div className="table2Holder">
      <table className="table2">
          <tr>
            <th colSpan={2} align='left'>
                Types of income 
            </th>
          </tr>
        
            <tr>
              <td>
                  <label><input type="checkbox" /> Default Checkbox </label>   
              </td>
            </tr>
            <tr>
                <td>
                <label><input type="checkbox" checked/> Checked Checkbox </label>
                </td>
            </tr>
            <tr>
              <td>
                  <label><input type="checkbox"/> Default Checkbox </label>   
              </td>
            </tr>
            <tr>
                <td>
                <label><input type="checkbox" checked/> Checked Checkbox </label>
                </td>
            </tr>
            <tr>
              <td>
                  <label><input type="checkbox" /> Default Checkbox </label>   
              </td>
            </tr>
            <tr>
                <td>
                <label><input type="checkbox" checked/> Checked Checkbox </label>
                </td>
            </tr>
      </table>
      </div>
    </div>  

    {/* row 1 ends here  */}


<div className="row2">
<div className="table1Holder">
  <table className="table1 table3">
      <tr>
        <th colSpan={2} align='left'>
            Danger Zone
        </th>
      </tr>
      <tr>
        <td id="table3_td" colSpan={2} align='left'>
            Request For
        </td>
      </tr>
    
    
        <tr>
          <td >Transfer this account to another user or to an organization where you have the ability to create repositories.</td>
        </tr>
        <tr>
          <td >
              <button type='button'>abc</button>
              <button type='button'>abc1</button>
              <button type='button'>Meeting</button>
              <button type='button'>Doc Review</button>
          </td>
        </tr>
        
   
  </table>
  </div>

  <div className="table2Holder">
  <table className="table1 table4">
      <tr>
        <th colSpan={2} align='left'>
            Previous Meetings
        </th>
      </tr>
    
      <tr>
          <td >1</td>
          <td align="right">22 Feb, 2022</td>
        </tr>
        <tr>
          <td >2</td>
          <td align="right">26 Feb, 2022</td>
        </tr>
        <tr>
          <td >3</td>
          <td align="right">01 Mar, 2022</td>
        </tr>
        
  </table>
  </div>
</div>
</>
  );
}

export {Table};