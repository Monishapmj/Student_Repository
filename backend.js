const attendancelist=[];
function markAttendance(name) {
    attendancelist.push(name);
    console.log(`${name} is marked present.`);
}   
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const StudentName = this.student.value.trim();
    if (StudentName) {
        markAttendance(StudentName);
        alert(`${StudentName} attendance marked!`);
        console.log("Current attendance list:", attendancelist);
        this.reset();
    }
});