const names = [];

const addName = (name) => {
    names.push(name);
}

const clearNames = () => {
    names.splice(0, names.length)
}

export default names;
export { addName, clearNames };