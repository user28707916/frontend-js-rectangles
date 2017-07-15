function areIntersected(rectangleA, rectangleB) {
	if (rectangleA.left >= (rectangleB.width + rectangleB.left) ||
		rectangleB.left >= (rectangleA.width + rectangleA.left) ||
		rectangleA.top >= (rectangleB.top + rectangleB.height) ||
		rectangleB.top >= (rectangleA.top + rectangleA.height)
	)
		return false;
	return true;
}

function filterVisible(rectangleA, array) {
	return array.filter(function (angle) {
		if (angle.width !== 0 && angle.height !== 0)
			return areIntersected(rectangleA, angle);
		return false;
	});
}
