// Calculate grade function
$("#calculate").click(function calculateGrade() {
    // make calculations
    var assignments = parseFloat($("#assignments").val()) * 0.5;
    var group_projects = parseFloat($("#group_projects").val()) * 0.1;
    var quizzes = parseFloat($("#quizzes").val()) * 0.1;
    var midterm_exam = parseFloat($("#midterm_exam").val()) * 0.1;
    var final_exam = parseFloat($("#final_exam").val()) * 0.1;
    var intex = parseFloat($("#intex").val()) * 0.1;

    var total = assignments + group_projects + quizzes + midterm_exam + final_exam + intex;

    var grade = ""

    // Assign letter grade based on total
    if (total >= 94) {
        grade = "A"
    }
    else if (total >= 90) {
        grade = "A-"
    }
    else if (total >= 87) {
        grade = "B+"
    }
    else if (total >= 84) {
        grade = "B"
    }
    else if (total >= 80) {
        grade = "B-"
    }
    else if (total >= 77) {
        grade = "C+"
    }
    else if (total >= 74) {
        grade = "C"
    }
    else if (total >= 70) {
        grade = "C-"
    }
    else if (total >= 67) {
        grade = "D+"
    }
    else if (total >= 64) {
        grade = "D"
    }
    else if (total >= 60) {
        grade = "D-"
    }
    else {
        grade = "E"
    }

    // put back in html
    $("#total").html("Final Grade: " + total + "%")
    $("#result").html(grade);
})