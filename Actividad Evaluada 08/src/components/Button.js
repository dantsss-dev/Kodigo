export const Button = ({ label, onClick, className }) => {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};
