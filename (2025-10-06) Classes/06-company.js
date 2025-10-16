class Company {
    departments;

    constructor () {
        this.departments = new Map();
    }

    addEmployee (name, salary, position, department) {
        for (const argument of [name, salary, position, department]) {
            if (argument === '' || argument === undefined || argument === null) {
                throw new Error('Invalid input!');
            }
        }

        if (salary < 0) throw new Error('Invalid input!');

        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }

        this.departments.get(department).push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment () {
        let bestDepartmentName, bestDepartmentAvgSalary = 0;

        for (const [department, employeesArr] of this.departments.entries()) {
            let sumOfSalaries = 0;

            employeesArr
                .forEach(employee => sumOfSalaries += employee.salary);
            
            const avgSalary = sumOfSalaries / employeesArr.length;

            if (avgSalary > bestDepartmentAvgSalary) {
                bestDepartmentName = department;
                bestDepartmentAvgSalary = avgSalary;
            }
        }

        let result = `Best Department is: ${bestDepartmentName}\n` +
            `Average salary: ${bestDepartmentAvgSalary.toFixed(2)}\n`;
        
        result += this.departments.get(bestDepartmentName)
            .slice()
            .sort((employeeA, employeeB) => {
                return employeeB.salary - employeeA.salary ||
                       employeeA.name.localeCompare(employeeB.name)
            })
            .map(employee => `${employee.name} ${employee.salary} ${employee.position}`)
            .join('\n');

        return result;
    }
}

const c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());