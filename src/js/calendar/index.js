const daysTag = document.querySelector('.days'),
  currentDate = document.querySelector('.current-date'),
  switchesMonth = document.querySelectorAll('.calendar-icons span'),
  selectedDate = document.getElementById('input-picker');

let today = new Date(),
  currentMonth = today.getMonth(),
  currentYear = today.getFullYear();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const calendar = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('body'),
  modal: document.querySelector('[data-modal]'),
  inputField: document.querySelector('.calendar-input'),
  toggleBtn: document.querySelector('.calendar__button-down'),
  calendarBtn: document.querySelector('.calendar__button'),
};

// обработчик события по клику на инпут

calendar.openModalBtn.addEventListener('click', toggleCalendar);

function toggleCalendar() {
  const { modal, inputField, toggleBtn, calendarBtn } = calendar;

  modal.classList.toggle('hidden');
  inputField.classList.toggle('isActive');
  toggleBtn.classList.toggle('switched');
  calendarBtn.classList.toggle('switchedColor');
}

// обработчик события по клику вне календаря

document.addEventListener('click', hideModals);

function hideModals(e) {
  const { modal, inputField, toggleBtn, calendarBtn } = calendar;
  if (e.target.closest('.calendar-form')) return;
  if (inputField.classList.contains('isActive')) {
    modal.classList.add('hidden');
    inputField.classList.remove('isActive');
    toggleBtn.classList.remove('switched');
    calendarBtn.classList.remove('switchedColor');
  }
}

const renderCalendar = () => {
  const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const lastDayofMonth = new Date(
    currentYear,
    currentMonth,
    lastDateofMonth
  ).getDay();
  const lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = '';
  for (let j = firstDayofMonth - 1; j > 0; j--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - j + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    const isToday =
      i === today.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear();
    liTag += `<li class="${isToday ? 'active' : ''}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;

  const dayChange = document.querySelector('.days');
  dayChange.addEventListener('click', e => {
    [...e.currentTarget.children].forEach(item => {
      item.classList.remove('active');
    });

    e.target.classList.add('active');
    let selectedDay = e.target.textContent;

    if (selectedDay.length > 10) {
      return;
    }

    const selectedMonth = (currentMonth + 1).toString();
    selectedDate.value = `${selectedDay.padStart(
      2,
      '0'
    )}/${selectedMonth.padStart(2, '0')}/${currentYear}`;

    document.querySelector('[data-modal]').classList.add('hidden');
    document.querySelector('.calendar-input').classList.remove('isActive');
    document
      .querySelector('.calendar__button-down')
      .classList.remove('switched');
    document
      .querySelector('.calendar__button')
      .classList.remove('switchedColor');
  });
};

// переключатели месяцев

switchesMonth.forEach(switchMonth => {
  switchMonth.addEventListener('click', handleMonthSwitch);
});

function handleMonthSwitch() {
  const isPrevious = this.id === 'prev';
  const monthOffset = isPrevious ? -1 : 1;

  currentMonth += monthOffset;

  if (currentMonth < 0 || currentMonth > 11) {
    const currentDate = new Date();
    today = new Date(currentYear, currentMonth, currentDate.getDate());
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
  } else {
    today = new Date();
  }

  renderCalendar();

  const dayCells = document.querySelectorAll('.calendar-day');
  dayCells.forEach(dayCell => {
    if (dayCell.textContent === today.getDate().toString()) {
      dayCell.classList.add('active');
    } else {
      dayCell.classList.remove('active');
    }
  });
}

renderCalendar();