import iziToast from "izitoast";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const delayInput = form.elements.delay;
    const state = form.elements.state.value;
    const delay = parseInt(delayInput.value, 10);

    delayInput.value = "";

    if (isNaN(delay) || delay < 0) {
      iziToast.error({
        title: "Error",
        message: "Please enter a valid delay in milliseconds.",
        position: 'topRight',
      });
      return;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
            title: "✅ Success",
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
        });
      })
      .catch((delay) => {
        iziToast.error({
            title: "❌ Error",
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
        });
      });
  });
});
