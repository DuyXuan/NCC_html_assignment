const menu = document.querySelector(".menu");
const shortMenu = document.querySelector(".short-menu");
const menuBtn = document.querySelector(".header-icon");
const subMenu = document.querySelector(".sub-menu");
menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 1270) {
    subMenu.style.display = "block";
    document.querySelector(".main-content").style.opacity = "0.5";
  } else {
    menu.classList.toggle("showMenu");
    shortMenu.classList.toggle("show-short-menu");
    document.querySelector(".main-content").classList.toggle("move-content");
  }
});
document.querySelector(".sub-menu-icon").addEventListener("click", (e) => {
  subMenu.style.display = "none";
  document.querySelector(".main-content").style.opacity = "1";
});

// let students = [
//   { id: 1, name: "tran van a", className: ".net", classId: 11 },
//   { id: 2, name: "tran van b", className: ".net", classId: 11 },
//   { id: 3, name: "tran van c", className: "angular", classId: 12 },
//   { id: 4, name: "tran van d", className: "angular", classId: 12 },
//   { id: 5, name: "tran van e", className: "java", classId: 13 },
//   { id: 6, name: "tran van f", className: "java", classId: 13 },
//   { id: 7, name: "tran van g", className: "java", classId: 13 },
//   { id: 8, name: "tran van h", className: "test", classId: 14 },
//   { id: 9, name: "tran van i", className: "test", classId: 14 },
//   { id: 10, name: "tran van j", className: "test", classId: 14 },
// ];
// let studentGroupByClasses = [
//   ...new Set(
//     students.map((item) => {
//       return item.classId;
//     })
//   ),
// ].map((classId) => {
//   return {
//     classId: classId,
//     className: students.find((s) => s.classId === classId).className,
//     students: [
//       ...students.filter((student) => {
//         return student.classId == classId;
//       }),
//     ],
//   };
// });
// console.log(studentGroupByClasses);
