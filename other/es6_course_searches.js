let courses = [ 
    { 
        CourseId: "PROG100", 
        Title: "Introduction to HTML/CSS/Git", 
        Location: "Classroom 7", 
        StartDate: "09/08/22", 
        Fee: "100.00", 
    }, 
    { 
        CourseId: "PROG200", 
        Title: "Introduction to JavaScript", 
        Location: "Classroom 9", 
        StartDate: "11/22/22", 
        Fee: "350.00", 
    }, 
    { 
        CourseId: "PROG300", 
        Title: "Introduction to Java", 
        Location: "Classroom 1", 
        StartDate: "01/09/23", 
        Fee: "50.00", 
    }, 
    { 
        CourseId: "PROG400", 
        Title: "Introduction to SQL and Databases", 
        Location: "Classroom 7", 
        StartDate: "03/16/23", 
        Fee: "50.00", 
    }, 
    {
        CourseId: "PROJ500", 
        Title: "Introduction to Angular", 
        Location: "Classroom 1", 
        StartDate: "04/25/23", 
        Fee: "50.00", 
    } 
]; 

 //  When does the PROG200 course start? 
 const PROG200CourseStart = courses.find(courses => courses.CourseId === "PROG200");
 console.log(PROG200CourseStart.StartDate);

//  What is the title of the PROJ500 course? 
const PROJ500CourseStart = courses.find(courses => courses.CourseId === "PROJ500");
console.log(PROJ500CourseStart.Title);

//  What are the titles of the courses that cost $50 or less? 
let cheapCourses = courses.filter(courses => courses.Fee <= parseInt("50.00"));
cheapCourses.forEach(courses => {
    console.log(courses.Title + " - $" + courses.Fee);
})

//  What  classes meet in "Classroom 1"? 
let class1 = courses.filter(course => course.Location === ("Classroom 1"));
class1.forEach(courses => {
    console.log(courses.CourseId + " - " + courses.Title);
})
