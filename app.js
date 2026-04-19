const tableElement = document.getElementById('table')
const removeBtn = document.getElementById('remove')
const addBtn = document.getElementById('add')
const deleteBtn = document.getElementById('delete')
const tableHead = document.getElementById('tableHead')
const tableContainer = document.getElementById('tableContainer')
const funBtn = document.getElementById('fun')

let classes = [
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+', false],
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+', false],
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
    settings: [false, '+', false],
  },

  // repeated entries
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+', false],
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+', false],
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
    settings: [false, '+', false],
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+', false],
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
    settings: [false, '+', false],
  },
]

addBtn.onclick = function () {
  const addNewRow = prompt('Введите элементы нового ряда таблицы через запятую')
  const newRowContent = addNewRow.split(/,\s*/)

  if (newRowContent.length != 5) {
    alert(
      'Убедитесь, что вы ввели все корректно. Кол-во элементов нового ряда должно быть равно 5',
    )
  } else {
    const newRowObject = {
      title: newRowContent[0],
      category: newRowContent[1],
      time: newRowContent[2],
      instructor: newRowContent[3],
      capacity: newRowContent[4],
      settings: [false, '+'],
    }
    classes.push(newRowObject)
    if (classes.length == 1) {
      removeBtn.textContent = '+'
    }
    render()
  }
}

deleteBtn.onclick = function () {
  if (classes.filter((item) => item.settings[0] !== false).length == 0) {
    alert('Ни один элемент не выбран')
  } else {
    classes = classes.filter((item) => item.settings[0] !== true)
    render()
  }
}

removeBtn.onclick = function () {
  const classesFilter = classes.filter(
    (item) => item.settings[0] === true,
  ).length

  function removeBtnForEach(enabled, symb) {
    classes.forEach((item) => {
      item.settings[0] = enabled
      item.settings[1] = symb
      removeBtn.textContent = symb
    })
  }

  classesFilter > classes.length / 2
    ? (removeBtnForEach(false, '+'),
      classes.forEach((item) => (item.settings[2] = false)))
    : removeBtnForEach(true, '-')
  render()
}

funBtn.onclick = function () {
  if (
    classes.filter((item) => item.settings[2] !== false).length ==
    classes.filter((item) => item.settings[0] !== false).length
  ) {
    for (let i = 0; i < classes.length; i++) {
      classes[i].settings[2] = false
    }
  } else {
    for (let i = 0; i < classes.length; i++) {
      if (classes[i].settings[0] && !classes[i].settings[2]) {
        classes[i].settings[2] = true
      }
    }
  }
  render()
}

function bgColor(index) {
  const settings0 = classes[index].settings[0]
  const settings2 = classes[index].settings[2]

  if (index % 2 === 0 && !settings0) {
    return '#f8f7ff'
  } else if (settings2 && settings0) {
    return 'red'
  } else if (settings0) {
    return 'rgb(252, 249, 82)'
  }
  return 'white'
}

function render() {
  tableElement.innerHTML = ''
  for (let i = 0; i < classes.length; i++) {
    tableElement.insertAdjacentHTML(
      'beforeend',
      getTemplate(classes[i], i, classes[i].settings[1]),
    )
  }
  let empty = document.getElementById('empty')
  if (classes.length == 0) {
    tableHead.style.display = 'none'
    if (!empty) {
      empty = document.createElement('p')
      empty.id = 'empty'
      empty.textContent = 'Таблица пуста'
      tableContainer.prepend(empty)
    }
  } else {
    if (empty) empty.remove()
    tableHead.style.display = ''
  }
}

tableElement.onclick = function (event) {
  const index = parseInt(event.target.dataset.index)
  const type = event.target.dataset.type

  const classesFilter = classes.filter(
    (item) => item.settings[0] === true,
  ).length

  if (type === 'btn' && classes[index].settings[0]) {
    classes[index].settings[0] = false
    classes[index].settings[1] = '+'
    classes[index].settings[2] = false
  } else if (type === 'btn' && !classes[index].settings[0]) {
    classes[index].settings[0] = true
    classes[index].settings[1] = '-'
  }

  // if (classesFilter > classes.length / 2) {
  //   removeBtn.textContent = '-'
  // } else {
  //   removeBtn.textContent = '+'
  // }

  classesFilter > classes.length / 2
    ? (removeBtn.textContent = '-')
    : (removeBtn.textContent = '+')

  render()
}

render()

function getTemplate(tr, index, symb) {
  return `
    <tr data-index="${index}" style="background-color:${bgColor(index)}">
      <td>${tr.title}</td>
      <td>${tr.category}</td>
      <td>${tr.time}</td>
      <td>${tr.instructor}</td>
      <td>${tr.capacity}</td>
      <td><button data-index="${index}" data-type="btn">${symb}</button></td>
    </tr>
  `
}
