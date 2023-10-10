export const Textbox = ({
  label,
  onChange = null,
  value,
  className,
  readOnly = false,
  disabled = false,
}) => {
  return (
    <div className={className}>
      <div className="col-2">
        <label className="col-form-label">{label}</label>
      </div>
      <div className="col">
        <input
          type="moneda"
          id="inputMoneda"
          className="form-control"
          defaultValue={value ? value : ""}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
