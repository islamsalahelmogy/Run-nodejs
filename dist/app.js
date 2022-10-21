"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_manager_1 = __importDefault(require("./modules/student.manager"));
const StudentA = new student_manager_1.default({
    name: 'Mahmoud Ahmed',
    age: 25,
    hobbies: [
        { name: 'Programming', description: 'I love programming' },
        { name: 'Reading', description: 'I love reading' },
    ]
});
StudentA.setStudentName('Mahmoud Ahmed Mahmoud');
const StudentFirstHobbyDescription = StudentA.getStudentName();
console.log(StudentFirstHobbyDescription);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdGQUFxRDtBQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLHlCQUFhLENBQUM7SUFDakMsSUFBSSxFQUFFLGVBQWU7SUFDckIsR0FBRyxFQUFFLEVBQUU7SUFDUCxPQUFPLEVBQUU7UUFDUCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFO1FBQzFELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUU7S0FDbkQ7Q0FDRixDQUFDLENBQUE7QUFFRixRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFaEQsTUFBTSw0QkFBNEIsR0FBRyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7QUFFOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBIn0=