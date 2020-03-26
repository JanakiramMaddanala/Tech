var frames = Array.from(window.frames);
console.log(frames);

for(const frame of Array.from(window.frames)){
	console.log(frame.name)
}