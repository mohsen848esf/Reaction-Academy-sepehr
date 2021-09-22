import React from 'react';
import StudentTermsModal from './StudentTermsModal/StudentTermsModal';

const StudentTerms = (props) => {
  const {_id, terms} = props.cell.row.original;
  return (
    <div>
      <StudentTermsModal
        studentId={_id}
        studentTerms={terms}
      />
    </div>
  );
}

export default StudentTerms;
