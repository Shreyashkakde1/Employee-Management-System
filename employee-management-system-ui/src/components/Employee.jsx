// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types';

const Employee = ({employee,deleteEmployee}) => {
  return (
    <tr key={employee.id}>
                    {" "}
                    {/* Make sure to add a unique key for each element in the array */}
                    <td className="px-6 py-4 text-left whitespace-nowrap">
                      {employee.id}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap">
                      {employee.firstName}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap">
                      {employee.lastName}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap">
                      {employee.emailId}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        className="px-4 text-indigo-600 hover:text-indigo-800"
                      >
                        Edit
                      </a>
                      <a
                        onClick={(e,id)=> deleteEmployee(e,employee.id)}
                        className="px-4 text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
  )
}


// Define propTypes for the Employee component
Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    emailId: PropTypes.string.isRequired,
  }).isRequired,
};


export default Employee