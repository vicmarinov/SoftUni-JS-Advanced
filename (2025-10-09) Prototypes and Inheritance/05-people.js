function solve () {
    class Employee {
        name;
        age;
        salary;
        tasks;

        constructor (name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work () {
            const currentTask = this.tasks.shift();
            console.log(currentTask);

            this.tasks.push(currentTask);
        }

        collectSalary () {
            const totalSalary = this.dividend ? this.salary + this.dividend : this.salary;
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor (name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee {
        constructor (name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`
            ];
        }
    }

    class Manager extends Employee {
        dividend;

        constructor (name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`
            ];
        }
    }

    return { Employee, Junior, Senior, Manager };
}

const classes = solve();

const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const senior = new classes.Senior('Alex', 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary();

const manager = new classes.Manager('Tom', 55); 

manager.salary = 15000;
manager.collectSalary();

manager.dividend = 2500;
manager.collectSalary();