import React from 'react';
import EmployeeDelete from './EmployeeDelete/EmployeeDelete';
import EmployeeActiveDeactive from './EmployeeActiveDeactive/EmployeeActiveDeactive';

const EmployeeActiveDelete = (props) => {
  const { _id, isActive } = props.cell.row.original;
  return (
    <div>
      <EmployeeActiveDeactive
        EmployeeId={_id}
        EmployeeStatus={isActive}
        setAllData={props.setAllData}
      />
      <EmployeeDelete
        EmployeeId={_id}
        setAllData={props.setAllData}
      />
    </div>
  );
}

export default EmployeeActiveDelete;
