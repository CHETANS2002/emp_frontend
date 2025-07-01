// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
// import axios from 'axios';

// import { toast } from 'react-toastify';

// function AddEmployee() {
//   const [formData, setFormData] = useState({ name: '', email: '', position: '' });
//   const [errors, setErrors] = useState({});
 
//   const navigate = useNavigate();

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.position.trim()) newErrors.position = 'Position is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (validate()) {
//       axios.post('http://localhost:3001/employees', formData).then(() => {
      
//         toast.success('Employee added successfully!');
//         navigate('/');
        
//       });
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} noValidate>
//       <FormGroup>
//         <Label>Name</Label>
//         <Input
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           invalid={!!errors.name}
//         />
//         <FormFeedback>{errors.name}</FormFeedback>
//       </FormGroup>

//       <FormGroup>
//         <Label>Email</Label>
//         <Input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           invalid={!!errors.email}
//         />
//         <FormFeedback>{errors.email}</FormFeedback>
//       </FormGroup>

//       <FormGroup>
//         <Label>Position</Label>
//         <Input
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           invalid={!!errors.position}
//         />
//         <FormFeedback>{errors.position}</FormFeedback>
//       </FormGroup>

//       <Button color="success">Add Employee</Button>
//     </Form>
//   );
// }

// export default AddEmployee;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddEmployee() {
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:3001/employees', formData).then(() => {
        toast.success('Employee added successfully!');
        navigate('/');
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-75 bg-light">
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <CardBody>
          <CardTitle tag="h4" className="text-center mb-4">
            Add Employee
          </CardTitle>

          <Form onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                invalid={!!errors.name}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="position">Position</Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                invalid={!!errors.position}
              />
              <FormFeedback>{errors.position}</FormFeedback>
            </FormGroup>

            <div className="d-grid mt-3">
              <Button color="dark" type="submit">
                Add Employee
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddEmployee;

