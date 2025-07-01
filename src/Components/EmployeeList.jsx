import { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios.get('https://emp-backend-k6jw.onrender.com/employees')
      .then(res => setEmployees(res.data));
  };

  const handleDelete = (id) => {
    axios.delete(`https://emp-backend-k6jw.onrender.com/employees/${id}`).then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
      toast.success('Employee deleted successfully!');
    });
  };

  return (
    <div>
     <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
              <td>
                <Link to={`/edit/${emp.id}`}>
                  <Button color="dark" size="sm" className="me-2">Edit</Button>
                </Link>
                <Button color="danger" size="sm" onClick={() => handleDelete(emp.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeList;
