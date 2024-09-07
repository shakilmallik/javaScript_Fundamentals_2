const students = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 },
  ];
  
  const checkResults = (name) => {
    const student = students.find((student) => student.name === name);
    if (student) {
      console.log(
        student.marks > 90
          ? `Congratulations ${student.name}! You have cleared the exam.`
          : "Sorry ! You have not cleared the exam."
      );
    } else {
      console.log("Invalid User !!!");
    }
  };
  
  checkResults("Mithun");
  // OUTPUT: Congratulations Mithun! You have cleared the exam.
  
  checkResults("Prabir");
  // OUTPUT: Sorry ! You have not cleared the exam.
  
  checkResults("Mithun S");
  // OUTPUT: Invalid User !!!
  