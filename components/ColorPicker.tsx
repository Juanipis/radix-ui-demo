import React from "react";
import { useCssLibPreference } from "./CssLibPreference";
import * as RadioGroup from "@radix-ui/react-radio-group";

const AccentColorPicker = () => {
  const { accentColor, setAccentColor } = useCssLibPreference();

  const changeAccentColor = (value: string) => {
    console.log("Changing accent color to", value); // Log the color change
    setAccentColor(value); // Correctly call setAccentColor
  };

  return (
    <RadioGroup.Root value={accentColor} onValueChange={changeAccentColor}>
      <RadioGroup.Item value="crimson" id="crimson" className="accent-radio">
        <RadioGroup.Indicator />
        Crimson
      </RadioGroup.Item>
      <RadioGroup.Item value="blue" id="blue" className="accent-radio">
        <RadioGroup.Indicator />
        Blue
      </RadioGroup.Item>
      <RadioGroup.Item value="green" id="green" className="accent-radio">
        <RadioGroup.Indicator />
        Green
      </RadioGroup.Item>
      {/* Style or customize your radio buttons as needed */}
    </RadioGroup.Root>
  );
};

export default AccentColorPicker;
