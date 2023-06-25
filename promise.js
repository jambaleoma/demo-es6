// Description: Promise example

// PROMISE
export const p1  = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Simple promise'), 2000);
});

p1.then(
    data => console.log(data),
    error => console.log(error)
);

//PROMISE CHAINING
export const p2  = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Simple promise'), 2000);
});

p2.then(
    (sp) =>  new Promise((resolve, reject) => {
        setTimeout(() => resolve(sp + ' + Chaining promise'), 1000);
    }),
    error => console.log(error)
).then(
    data => console.log(data),
    error => console.log(error)
);

// ERROR HANDLING IN CHAINING
export const p3  = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Simple promise'), 2000);
});

p3.then(
    (sp) =>  new Promise((resolve, reject) => {
        setTimeout(() => resolve(sp + ' + Error Handling promise'), 2000);
    }),
).then(
    data => console.log(data),
).catch(
    err => console.log(err)
);