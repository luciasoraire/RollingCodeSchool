
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
    const ArrayEmpleado = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://www.clinicamoralesguerrero.com/wp-content/uploads/2019/12/Square-Shaped-Face.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://specials-images.forbesimg.com/imageserve/60aed8457da7cba25bf94d8e/416x416.jpg?background=000000&cropX1=0&cropX2=1080&cropY1=0&cropY2=1080" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://www.digicatapult.org.uk/wp-content/uploads/2021/11/DC_square_People_juergen-600x600-c-default.jpg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://www.fortisconstruction.com/images/uploads/people/_small-grid/arnel_cabais_headshot.jpg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://media1.popsugar-assets.com/files/thumbor/zW3aJI5czPVVf_MUXkVbt33aeaY/413x135:2516x2238/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/25/996/n/1922398/900df5365e55a5a005cbc4.29096210_/i/Hailee-Steinfeld.jpg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://static01.nyt.com/images/2022/05/19/opinion/firstpersonPromo/firstpersonPromo-mediumSquareAt3X.jpg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://i.pinimg.com/originals/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://focusforensics.com/wp-content/uploads/staff-clayton_mccall-square.jpg" },
      ]
  return (
    <section>
      <EmpleadoRow ArrayEmpleado={ArrayEmpleado}></EmpleadoRow>
    </section>
  );
};

export default EmpleadoList;