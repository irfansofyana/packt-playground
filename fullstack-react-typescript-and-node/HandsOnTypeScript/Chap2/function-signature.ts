// it seems odd, but TS supports function signature as a type
// it can also act as a type for an object's properties

type Run = (miles: number) => boolean;

let runner: Run = function(miles: number): boolean {
	if (miles > 10) {
		return true;
	}

	return false;
}

console.log(runner(9));
