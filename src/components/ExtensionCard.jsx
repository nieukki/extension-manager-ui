import { ToggleSwitch } from "./ToggleSwitch";

export const ExtensionCard = ({
  logo,
  name,
  description,
  isActive,
  id,
  onToggle,
  handleDeleteCard,
}) => {
  return (
    <div className="w-full border border-neutral-1 rounded-2xl bg-neutral-0 dark:bg-neutral-8 p-4 flex flex-col gap-10 ">
      <div className="flex flex-row gap-x-4">
        <img src={logo} alt="JAKIES ZDJECIE" />
        <div>
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-base text-neutral-6 dark:text-neutral-3">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button
          onClick={() => handleDeleteCard(id)}
          className="px-4 py-1 border border-neutral-3 rounded-2xl cursor-pointer font-semibold hover:bg-red-7 hover:border-red-7 hover:text-neutral-0 focus:outline-2 focus:outline-offset-2 focus:outline-red-7 dark:focus:bg-neutral-6 dark:hover:text-neutral-8"
        >
          Remove
        </button>
        <ToggleSwitch id={id} isActive={isActive} onToggle={onToggle} />
      </div>
    </div>
  );
};
