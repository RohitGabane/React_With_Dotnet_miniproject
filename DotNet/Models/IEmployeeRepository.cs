﻿using Microsoft.AspNetCore.Mvc;

namespace API_fatch.Models
{
    public interface IEmployeeRepository
    {
        Task<ActionResult<Employee>?> GetEmployee(int Id);
        Task<ActionResult<IEnumerable<Employee>>> GetAllEmployee();
        Task<ActionResult<Employee>> Add(Employee employee);
        Task<Employee> Update(int id, Employee employeeChanges);
        Task<Employee> Delete(int Id);
    }
}
