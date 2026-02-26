class A{
    static count=0;

    constructor(){
        A.count++;
    }

    countObject(){
        console.log(A.count);
    }

}
let a=new A();
a.countObject();

let b=new A();
b.countObject();

// class A{
//     static count=0;

//     constructor(){
//         A.countObject();
//     }

//     static countObject(){
//        this.count++;
//     }
//     static printStudentCount(){
//         console.log(this.count);
//     }

// }
// let a=new A();
// A.printStudentCount();

// let b=new A();
// A.printStudentCount();