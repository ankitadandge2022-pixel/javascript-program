let students = [
    { id: 1, name: "Ankita", marks: [85, 90, 78] },
    { id: 2, name: "Priya", marks: [65, 70, 60] },
    { id: 3, name: "Rahul", marks: [30, 40, 35] },
    { id: 4, name: "Sneha", marks: [95, 92, 98] }
];

function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}

function calculatePercentage(marks) {
    return calculateTotal(marks) / marks.length;
}

function calculateGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 75) {
        return "A";
    } else if (percentage >= 60) {
        return "B";
    } else if (percentage >= 35) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log("----- Student Report -----");

for (let student of students) {
    let total = calculateTotal(student.marks);
    let percentage = calculatePercentage(student.marks);
    let grade = calculateGrade(percentage);

    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Total Marks:", total);
    console.log("Percentage:", percentage.toFixed(2) + "%");
    console.log("Grade:", grade);
    console.log("----------------------");
}

// Find Topper
let topper = students[0];

for (let student of students) {
    if (
        calculatePercentage(student.marks) >
        calculatePercentage(topper.marks)
    ) {
        topper = student;
    }
}

console.log("Class Topper:", topper.name);

// Sort Students by Percentage
students.sort(
    (a, b) => calculatePercentage(b.marks) -
              calculatePercentage(a.marks)
);

console.log("Students in Merit Order:");

for (let student of students) {
    console.log(
        student.name + " - " +
        calculatePercentage(student.marks).toFixed(2) + "%"
    );
}