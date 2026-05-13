import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const EXPONENT = 2.32;

function toValue(position: number): number {
	return 100 * (position / 100) ** EXPONENT;
}

function toPosition(value: number): number {
	return 100 * (value / 100) ** (1 / EXPONENT);
}

export function ExponentialSlider() {
	const [value, setValue] = useState(0);

	return (
		<div className="space-y-2">
			<Slider
				min={0}
				max={100}
				step={0.1}
				value={[toPosition(value)]}
				onValueChange={([pos]) => setValue(toValue(pos))}
			/>
			<p>Value: {value.toFixed(1)}</p>
		</div>
	);
}
