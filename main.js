async function getDivision(a, b) {
  let division = a / b;
  if (b === 0) {
    throw new Error("b phải khác 0");
  } else {
    return division;
  }
}

async function doIt() {
  try {
    let ketqua = await getDivision(10, 0);
    console.log(ketqua);
  } catch (err) {
    console.log(err);
  }
}
doIt();

async function doIt1() {
  try {
    let ketqua = await getDivision(100, 10);
    console.log(ketqua);
  } catch (err) {
    console.log(err);
    console.log(`=======================`);
  }
}
doIt1();

//tương đương với :

const promise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b != 0) {
        resolve(a / b);
      } else {
        reject(Error("b phải khác 0!!!!!!!!!"));
      }
    }, 5000);
  });
};

promise(10, 20)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject))
  .finally(console.log('Mình thích thì mình chạy đấy!!!'))

promise(2, 3)
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err);
  });

promise(102, 0)
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err);
  });
