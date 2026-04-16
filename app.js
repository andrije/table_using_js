const tableElement = document.getElementById('table')
const removeBtn = document.getElementById('remove')

const classes = [
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+'],
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+'],
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
    settings: [false, '+'],
  },

  // repeated entries
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+'],
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
    settings: [false, '+'],
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
    settings: [false, '+'],
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
    settings: [false, '+'],
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
    settings: [false, '+'],
  },
]

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

  if (classesFilter > classes.length / 2) {
    removeBtnForEach(false, '+')
  } else {
    removeBtnForEach(true, '-')
  }
  render()
}

function bgColor(index) {
  if (index % 2 === 0 && !classes[index].settings[0]) {
    return '#f8f7ff'
  } else if (classes[index].settings[0]) {
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
