const EmpleadoAvatar = (props) => {
  return (
    <div>
      <img
        src={props.empleado.pic}
        alt={props.empleado.fullName}
      />
    </div>
  );
};

export default EmpleadoAvatar;