"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentManager {
    constructor(student) {
        this.student = student;
    }
    getStudentName() {
        return this.student.name;
    }
    setStudentName(name) {
        this.student.name = name;
    }
    getStudentAge() {
        return this.student.age;
    }
    setStudentAge(age) {
        this.student.age = age;
    }
    getStudentHobbies() {
        return this.student.hobbies || [];
    }
    setStudentHobbies(hobbies) {
        this.student.hobbies = hobbies;
    }
}
exports.default = StudentManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvc3R1ZGVudC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBb0JBLE1BQU0sY0FBYztJQUdoQixZQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzFCLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtJQUM1QixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQzVCLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQTtJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0lBQzFCLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ2xDLENBQUM7Q0FDSjtBQUdELGtCQUFlLGNBQWMsQ0FBQSJ9