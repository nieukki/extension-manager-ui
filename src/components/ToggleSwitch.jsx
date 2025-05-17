export const ToggleSwitch = ({ id, isActive, onToggle }) => {
  return (
    <label htmlFor={id} className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="sr-only peer"
        checked={isActive}
        onChange={() => onToggle(Number(id))}
      />
      <div
        role="checkbox"
        tabIndex={1}
        className="relative w-11 h-6 bg-neutral-3 rounded-full peer dark:bg-neutral-6 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-7 focus:outline-2 focus:outline-offset-2 focus:outline-red-7"
      ></div>
    </label>
  );
};
