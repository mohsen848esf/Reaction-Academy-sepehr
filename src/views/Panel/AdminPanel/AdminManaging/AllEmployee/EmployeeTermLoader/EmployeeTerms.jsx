import React from 'react';
import EmployeeTermsModal from './EmployeeTermsModal/EmployeeTermsModal';

const EmployeeTerms = (props) => {
  const {_id, terms ,role} = props.cell.row.original;
  return (
    <div>
      <EmployeeTermsModal
        employeeId={_id}
        employeeTerms={terms}
        employeeRole={role}
      />
    </div>
  );
}

export default EmployeeTerms;
