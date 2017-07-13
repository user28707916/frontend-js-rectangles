function areIntersected(RectangleA, RectangleB) {
	if (RectangleA.left >= (RectangleB.width + RectangleB.left) ||
		RectangleB.left >= (RectangleA.width + RectangleA.left) ||
		RectangleA.top >= (RectangleB.top + RectangleB.height) ||
		RectangleB.top >= (RectangleA.top + RectangleA.height)
	)
		return false;
	return true;
}

function filterVisible(RectangleA, array) {
	return array.filter(function (func) {
		if (func.width !== 0 && func.height !== 0)
			return areIntersected(RectangleA, func);
		return false;
	});
}