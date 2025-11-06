// Subject.ts
namespace Subjects {
  // Teacher interface (should already exist in Teacher.ts)
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject class
  export class Subject {
    private _teacher!: Teacher; // instance attribute teacher

    // Setter method to set the teacher
    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }

    // Optional getter if you want to access the teacher
    get teacher(): Teacher {
      return this._teacher;
    }
  }
}
