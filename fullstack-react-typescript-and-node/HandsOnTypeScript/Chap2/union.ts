// other type similar to intersection is union
// instead of merging, we are using them in an "or" fashion, where it's type or another

let unionObj: null | {name: string} = null;

unionObj = {
	name: 'jon',
}

console.log(unionObj);
