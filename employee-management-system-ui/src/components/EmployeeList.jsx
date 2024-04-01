import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e,id)=>{
      e.preventDefault();
      EmployeeService.deleteEmployee(id)
      .then((res)=>{
        if(employees){
          setEmployees((prevElement)=>{
            return prevElement.filter((employee)=>employee.id !== id);  
          })
        }
      })
  }

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            className="px-6 py-2 font-semibold text-white rounded bg-slate-600"
            onClick={() => navigate("/addEmployee")}
          >
            Add Employee
          </button>
        </div>

        <div className="flex border shadow-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium tracking-wider text-left uppercase">
                  Employee Id
                </th>
                <th className="px-6 py-3 font-medium tracking-wider text-left uppercase">
                  First Name
                </th>
                <th className="px-6 py-3 font-medium tracking-wider text-left uppercase">
                  Last Name
                </th>
                <th className="px-6 py-3 font-medium tracking-wider text-left uppercase">
                  Email Id
                </th>
                <th className="px-6 py-3 font-medium tracking-wider text-right uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            {!loading && employees && (
              <tbody className="bg-white">
                {employees.map((employee) => (
                  <Employee key={employee.id} deleteEmployee={deleteEmployee} employee={employee} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;

// Write me a program to print 1000 employees
