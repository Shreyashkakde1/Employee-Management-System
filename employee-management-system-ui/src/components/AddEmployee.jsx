import { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";


const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value  // Set the value of the property corresponding to e.target.name
    });
  };

  const saveEmployee = (e) =>{
    e.preventDefault();
  

    EmployeeService.saveEmployee(employee).then((response)=>{
      console.log(response);
      navigaye("/employeeList")
    }).catch((error)=>{
      console.log(error);
    })
    
    // EmployeeService.saveEmployee(employee).then((response)=>{
    //   console.log(response);
    // }).catch((error)=>{
    //   console.log(error);
    // })
  }

  const reset = (e) =>{
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  }

  return (
    <>
      <div className="flex max-w-2xl mx-auto border-b shadow">
        <div className="px-8 py-8">
          <div>
            <h1 className="text-2xl font-thin tracking-wider">
              Add New Employee
            </h1>
          </div>

          <div className="items-center justify-center w-full my-4 h-14">
            <label htmlFor="" className="block">
              First Name
            </label>
            <input
              className="px-2 py-2 mt-2 border"
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="items-center justify-center w-full my-4 h-14">
            <label htmlFor="" className="block">
              Last Name
            </label>
            <input
              className="px-2 py-2 mt-2 border"
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="items-center justify-center w-full my-4 h-14">
            <label htmlFor="" className="block">
              Email Address
            </label>
            <input
              className="px-2 py-2 mt-2 border"
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="items-center justify-center w-full pt-4 my-4 space-x-4 h-14">
            <button
              className="px-2 py-2 font-semibold text-white bg-green-400 rounded hover:bg-green-700"
              onClick={saveEmployee}
            >
              Save
            </button>
            <button className="px-2 py-2 font-semibold text-white bg-red-400 rounded hover:bg-red-700"
            onClick={reset}>
              Clear
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default AddEmployee;
