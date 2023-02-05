const Lessons = () => {
  return (
    <section className="p-10" id="lessons" data-scroll-spy>
      <div className="divider__content">
        <p className="divider__text">Horarios</p>
      </div>
      <p className="paragraph">
        Ya se pueden realizar las inscripciones acercándote al gimnasio o
        poniéndote en contacto.
      </p>
      <table
        id="lessons-table"
        className="border-spacing-1 border-collapse bg-pink-500 rounded overflow-hidden max-w-[800px] w-full mx-auto relative shadow-[0_0_10px_rgba(0,0,0,0.25)]"
      >
        <thead>
          <tr className="pl-2 h-14 bg-pink-500 text-base text-slate-200 border-b border-solid border-gray-500">
            <th className="pl-2 text-center">Días</th>
            <th className="pl-2 text-center">Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-12 border-b border-solid border-gray-500">
            <td className="text-center">H</td>
            <td className="text-center">H</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Lessons;

// tbody tr:last-child {
//   border: 0;
// }
