import React from 'react'

  function EmployeeList(props) {

    console.log(props);
  return (
    <div>EmployeeList</div>
  )
}

export default React.memo(EmployeeList);