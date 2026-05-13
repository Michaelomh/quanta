import { useState } from "react";
import { Slider } from "./ui/slider";

const SNAP_POINTS = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const SNAP_THRESHOLD = 8; // how close (in slider units) before snapping

function snapToNearest(value: number): number {
	for (const point of SNAP_POINTS) {
		if (Math.abs(value - point) <= SNAP_THRESHOLD) return point;
	}
	return value;
}

export function SnappingSlider() {
	const [value, setValue] = useState(0);

	return (
		<div className="space-y-2">
			<Slider
				className="h-10 **:data-[slot=slider-track]:h-10 **:data-[slot=slider-track]:rounded-xl **:data-[slot=slider-track]:border **:data-[slot=slider-track]:border-border **:data-[slot=slider-track]:bg-muted **:data-[slot=slider-track]:shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] **:data-[slot=slider-track]:ring-1 **:data-[slot=slider-track]:ring-background **:data-[slot=slider-track]:ring-inset **:data-[slot=slider-range]:h-full **:data-[slot=slider-range]:ml-0.5 **:data-[slot=slider-range]:mr-0.5 **:data-[slot=slider-range]:overflow-hidden **:data-[slot=slider-range]:rounded-lg **:data-[slot=slider-range]:border **:data-[slot=slider-range]:border-border **:data-[slot=slider-range]:bg-foreground **:data-[slot=slider-range]:shadow-xs **:data-[slot=slider-thumb]:h-7 **:data-[slot=slider-thumb]:w-[3px] **:data-[slot=slider-thumb]:rounded-xl **:data-[slot=slider-thumb]:border-0 **:data-[slot=slider-thumb]:bg-muted **:data-[slot=slider-thumb]:shadow-none **:data-[slot=slider-thumb]:cursor-ew-resize **:data-[slot=slider-thumb]:transform-[translateX(-8px)] **:data-[slot=slider-thumb]:ring-0 **:data-[slot=slider-thumb]:hover:ring-0 **:data-[slot=slider-thumb]:focus-visible:ring-0"
				min={0}
				max={1000}
				step={1}
				value={[value]}
				onValueChange={([val]) => setValue(snapToNearest(val))}
			/>
			<p>Value: {value}</p>
		</div>
	);
}
