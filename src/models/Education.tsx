class EducationModel{
    Course : string;
    Semister: string;
    constructor(Course:string,Semister:string){
        this.Course = Course;
        this.Semister = Semister;
    }
}

let list1:Array<EducationModel> = [
    new EducationModel("Programming Fundamentals","1st"),
    new EducationModel("OOP","2nd"),
    new EducationModel("Data Structures","3rd"),
    new EducationModel("Data Base","5th"),
    new EducationModel("Artifical Intelligence","6th"),
    new EducationModel("DDR","7th"),
    new EducationModel("Devops","8th"),
]

export {EducationModel, list1}