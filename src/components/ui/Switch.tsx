import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({ checked: controlledChecked, onChange, className = "" }: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    const newValue = !checked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <label
      className={`relative inline-block w-[4em] h-[2.2em] rounded-[30px] shadow-md text-[17px] ring-1 ring-border ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="opacity-0 w-0 h-0"
      />
      <span
        className={`absolute cursor-pointer inset-0 rounded-[30px] overflow-hidden transition-all duration-400 
          ${checked ? "bg-primary" : "bg-muted-foreground"}
          before:absolute before:content-[''] before:h-[1.2em] before:w-[1.2em] before:rounded-[20px] 
          before:left-[0.5em] before:bottom-[0.5em] before:transition-all before:duration-400
          before:[transition-timing-function:cubic-bezier(0.81,-0.04,0.38,1.5)]
          ${checked 
            ? "before:translate-x-[1.8em] before:shadow-[inset_15px_-4px_0px_15px_var(--accent)]" 
            : "before:shadow-[inset_8px_-4px_0px_0px_var(--card)]"
          }`}
      >
        {/* Stars */}
        <div
          className={`absolute bg-foreground rounded-full w-[5px] h-[5px] left-[2.5em] top-[0.5em] transition-all duration-400
            ${checked ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`absolute bg-foreground rounded-full w-[5px] h-[5px] left-[2.2em] top-[1.2em] transition-all duration-400
            ${checked ? "opacity-0" : "opacity-100"}`}
        />
        <div
          className={`absolute bg-foreground rounded-full w-[5px] h-[5px] left-[3em] top-[0.9em] transition-all duration-400
            ${checked ? "opacity-0" : "opacity-100"}`}
        />
        
        {/* Cloud */}
        <svg
          viewBox="0 0 16 16"
          className={`w-[3.5em] absolute bottom-[-1.4em] left-[-1.1em] transition-all duration-400
            ${checked ? "opacity-100" : "opacity-0"}`}
        >
          <path
            transform="matrix(.77976 0 0 .78395-299.99-418.63)"
            className="fill-card"
            d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
          />
        </svg>
      </span>
    </label>
  );
}

export default Switch;
