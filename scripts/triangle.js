function calculateTriangleArea(){
    const triBaseInput = document.getElementById('tri-base');
    const triBaseText = triBaseInput.value;
    const base = parseFloat(triBaseText)
    console.log(base)

    const triHeightInput = document.getElementById('tri-height');
    const triHeightText = triHeightInput.value;
    const height = parseFloat(triHeightText)
    console.log(height);

    const area = 0.5 * base * height;
    console.log("The area of the triangle is: " + area);
    // display output
    const triangleAreaSpan = document.getElementById('tri-area');
    triangleAreaSpan.innerText = area;

}