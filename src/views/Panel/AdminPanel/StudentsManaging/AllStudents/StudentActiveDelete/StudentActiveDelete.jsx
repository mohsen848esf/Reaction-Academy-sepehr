import React from 'react';
import StudentDelete from './StudentDelete/StudentDelete';
import SudentActiveDeactive from './StudentActiveDeactive/StudentActiveDeactive';

const StudentActiveDelete = (props) => {
  const { _id, isActive } = props.cell.row.original;
  return (
    <div>
      <SudentActiveDeactive
        studentId={_id}
        studentStatus={isActive}
        setAllData={props.setAllData}
      />
      <StudentDelete
        studentId={_id}
        setAllData={props.setAllData}
      />
    </div>
  );
}

export default StudentActiveDelete;
