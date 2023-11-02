const infoOpen = document.querySelectorAll('.info-open');
const plus = document.querySelectorAll('.plus-icon');
const minus = document.querySelectorAll('.minus-icon');

infoOpen.forEach((question, index) => {
  const plusBtn = plus[index];
  const minusBtn = minus[index];

  plusBtn.addEventListener('click', () => {
    question.style.display = 'inline-block';
    minusBtn.style.display = 'inline-block';
    plusBtn.style.display = 'none';

    infoOpen.forEach((q, i) => {
      if (i !== index) {
        q.style.display = 'none';
        minus[i].style.display = 'none';
        plus[i].style.display = 'inline-block';
      }
    });
  });

  minusBtn.addEventListener('click', () => {
    question.style.display = 'none';
    plusBtn.style.display = 'inline-block';
    minusBtn.style.display = 'none';
  });
});