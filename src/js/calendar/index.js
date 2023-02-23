import { setDateApi } from '../search/index';
import Notiflix from 'notiflix';

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
  calendarBtn: document.querySelector('.form-container__icon-calendar'),
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

// функция для рендеринга календаря

const renderCalendar = () => {
  // получаем первый день месяца, последний день месяца, последний день предыдущего месяца

  const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay() - 1,
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateofMonth
    ).getDay(1),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = '';

  // добавляем элементы для дней предыдущего месяца

  for (let j = firstDayofMonth ; j > 0; j--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - j + 1}</li>`;
  }

  // добавляем элементы для дней текущего месяца

  for (let i = 1; i <= lastDateofMonth; i++) {
    const currentDateObj = new Date(currentYear, currentMonth, i);
    const isToday =
      i === today.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear();
    const isFuture = currentDateObj > today;
    liTag += `<li class="${isToday ? 'active' : ''} ${
      isFuture ? 'future' : ''
    }">${i}</li>`;
  }

  // добавляем элементы для дней следующего месяца

  for (let i = lastDayofMonth; i < 7; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  // выводим текущую дату и элементы календаря в HTML

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;

  // обработчик события по клику на день

  const dayChange = document.querySelector('.days');
  dayChange.addEventListener('click', e => {
    // проверяем, является ли элемент неактивным

    if (e.target.classList.contains('inactive')) {
      return;
    }

    // удаляем класс "active" у всех дней и добавляем его только выбранному дню

    [...e.currentTarget.children].forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');

    // получаем выбранную дату и выводим ее в инпут

    let selectedDay = e.target.textContent;
    if (selectedDay.length > 10) {
      return;
    }

    const selectedMonth = (currentMonth + 1).toString();
    selectedDate.value = `${selectedDay.padStart(
      2,
      '0'
    )}/${selectedMonth.padStart(2, '0')}/${currentYear}`;

    // отправляем выбранную дату на сервер
    handleSelectedBeginDate();
  });
};


// функция для отправки даты в Api

let errorDisplayed = false; // чтобы один раз выводилась ошибка на экран

const handleSelectedBeginDate = async () => {
  const selectedDay = document.querySelector('.days .active').textContent,
    selectedMonth = (currentMonth + 1).toString(),
    selectedYear = currentYear,
    selectedDateStr = `${selectedYear}-${selectedMonth}-${selectedDay.padStart(
      2,
      '0'
    )}`,
    selectedDateObj = new Date(selectedDateStr);

  try {
    if (selectedDateObj > today) {
      if (!errorDisplayed) {
        Notiflix.Notify.failure(`Invalid date. Select an earlier date `);
        errorDisplayed = true;
      }
      throw new Error(err);
    } else {
      setDateApi(`${selectedDateStr}`);
      document.querySelector('[data-modal]').classList.add('hidden');
      document.querySelector('.calendar-input').classList.remove('isActive');
      document
        .querySelector('.calendar__button-down')
        .classList.remove('switched');
      document
        .querySelector('.form-container__icon-calendar')
        .classList.remove('switchedColor');
      errorDisplayed = false;
    }
  } catch (err) {
    console.log(err);
  }
};

// отправляем на сервер сегодняшнюю дату при загрузке страницы

setDateApi(
  `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`
);

renderCalendar();

// функции для переключения года
const prevYearBtn = document.getElementById('prev-years');
const nextYearBtn = document.getElementById('next-years');

// обработчик события по клику на кнопку "предыдущий год"
prevYearBtn.addEventListener('click', () => {
  const prevYear = currentYear - 1;
  if (prevYear < today.getFullYear()) {
    currentYear = prevYear;
    today = new Date(currentYear, currentMonth, today.getDate());
    renderCalendar();
  }
});

// обработчик события по клику на кнопку "следующий год"
nextYearBtn.addEventListener('click', () => {
  const nextYear = currentYear + 1;
  if (nextYear <= new Date().getFullYear()) {
    currentYear = nextYear;
    today = new Date(currentYear, currentMonth, today.getDate());
    renderCalendar();
  } else {
    Notiflix.Notify.failure(`Next year is beyond the current year`);
  }
});

// переключатели месяцев

switchesMonth.forEach(switchMonth => {
  switchMonth.addEventListener('click', () => {
    const nextMonth =
      switchMonth.id === 'prev' ? currentMonth - 1 : currentMonth + 1;

    if (nextMonth < 0 || nextMonth > 11) {
      const nextYear = nextMonth < 0 ? currentYear - 1 : currentYear + 1;
      if (nextYear > new Date().getFullYear()) {
        Notiflix.Notify.failure(`Next month is beyond the current month`);
        return; // переключение запрещено
      }
      currentYear = nextYear;
      currentMonth = nextMonth < 0 ? 11 : 0;
    } else if (
      currentYear === new Date().getFullYear() &&
      nextMonth > new Date().getMonth()
    ) {
      Notiflix.Notify.failure(`Next month is beyond the current month`);
      return; // переключение запрещено
    } else {
      currentMonth = nextMonth;
    }
    renderCalendar();
  });
});