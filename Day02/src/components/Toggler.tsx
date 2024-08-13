import "./Toggler.css";

export default function Toggler({ onToggleChange }: any) {
  const handleToggle = (event: any) => {
    onToggleChange(event.target.checked);
  };
  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input
          value="1"
          id="color_mode"
          name="color_mode"
          type="checkbox"
          onChange={handleToggle}
        />
        <label
          className="btn-color-mode-switch-inner"
          data-off="Monthly"
          data-on="Annually"
          htmlFor="color_mode"
        />
      </label>
    </div>
  );
}
