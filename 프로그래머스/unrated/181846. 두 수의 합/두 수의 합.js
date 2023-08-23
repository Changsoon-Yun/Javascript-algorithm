function solution(a, b) {
	var result = []
 
	var lenDif = a.length - b.length
	if(lenDif < 0) {
		a = a.padStart(b.length, '0')
	} else if(lenDif > 0) {
		b = b.padStart(a.length, '0')
	}
 
	var move = 0;
	for(var i=a.length; i>0; i--) {
		var sum = Number(a.slice(i-1, i)) + Number(b.slice(i-1, i)) + move
		if(sum >= 10) {
			if(i !== 1) {
				move = 1
				sum = sum.toString().slice(1)
			} else {
				sum = sum.toString()
			}
		} else {
			move = 0
			sum = sum.toString()
		}
		result.splice(0, 0, sum)
	}
	return result.join('')
}