class Student {
    constructor(enrollment, name, exams, grades) {
        this._examsGrades = Array();
        this._worksGrades = Array();
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = exams;
        this.worksGrades = grades;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length !== 4) {
            throw new Error('A pessoa precisa ter 4 notas de prova');
        }
        this._examsGrades = value;
    }
    get worksGrades() {
        return this._worksGrades;
    }
    set worksGrades(value) {
        if (value.length !== 2) {
            throw new Error('A pessoa precisa ter 2 notas de trabalho');
        }
        this._worksGrades = value;
    }
    sumGrades() {
        console.log(this.examsGrades, this._examsGrades);
        return [...this.examsGrades, ...this.worksGrades].reduce((acc, curr) => curr += acc);
    }
    sumAverage() {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.worksGrades.length;
        return Math.round(sumGrades / divider);
    }
}
const student1 = new Student('1234', 'Guilherme Leite', [5, 6, 7, 8], [8, 9]);
console.log(student1);
console.log('Soma das notas: ', student1.sumGrades());
console.log('Média das notas: ', student1.sumAverage());
const student2 = new Student('2345', 'Luana Muniz', [3, 9, 8, 9], [10, 10]);
console.log(student2);
console.log('Soma das notas: ', student2.sumGrades());
console.log('Média das notas: ', student2.sumAverage());
