class Company:
    def __init__(self, name, industry, location):
        self.name = name
        self.industry = industry
        self.location = location
        self.employees = []
    
    def hire_employee(self, employee):
        self.employees.append(employee)
        print(f"{employee.name} has been hired by {self.name}!")
    
    def fire_employee(self, employee):
        if employee in self.employees:
            self.employees.remove(employee)
            print(f"{employee.name} has been fired from {self.name}.")
        else:
            print(f"{employee.name} is not an employee of {self.name}.")
    
    def get_employees(self):
        employee_names = [emp.name for emp in self.employees]
        return employee_names
