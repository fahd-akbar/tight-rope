console.log('hello');

// Check the README for instructions:
export function maxArea(height: number[]): number {
    // Your code below:
    var maximumArea = 0;

    if (!isValidInput(height)) {
        throw new Error("Height input is invalid.");
    }

    for (var i = 0; i < height.length; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var area = calculateArea(height[i], height[j], j - i);

            if (area > maximumArea) {
                maximumArea = area;
            }
        }
    }

    return maximumArea;
}

function calculateArea(height1: number, height2: number, distance: number): number {
    const maxHeight = Math.min(height1, height2);
    return maxHeight * distance;
}

function isValidInput(height: number[]): boolean {

    // check number of buildings
    const n = height.length;
    if (n < 2 || n > 105) return false;

    // check height of buildings
    const invalidHeight = height.filter(i => (i < 0 || i > 104)).length > 0;
    if (invalidHeight) return false;


    return true;
}