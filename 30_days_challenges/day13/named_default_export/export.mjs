export const sum = (num1, num2) => {
    return num1 + num2;
}

export const multiply = (num1, num2) => {
    return num1 * num2;
}

export const sub = (num1, num2) => {
    return num1 - num2;
}

// 
const defaultExport = () => {
    console.log("default export function");
}

export default defaultExport;