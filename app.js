const tableElement = document.getElementById('table')

const classes = [
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
  },

  // repeated entries
  {
    title: 'Like a butterfly',
    category: 'Boxing',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
  },
  {
    title: 'Mind & Body',
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Adam Stewart',
    capacity: 15,
  },
  {
    title: 'Crit Cardio',
    category: 'Gym',
    time: '9:00 AM - 10:00 AM',
    instructor: 'Aaron Chapman',
    capacity: 10,
  },
  {
    title: 'Wheel Pose Full Posture',
    category: 'Yoga',
    time: '7:00 AM - 8:30 AM',
    instructor: 'Donna Wilson',
    capacity: 15,
  },
  {
    title: "Playful Dancer's Flow",
    category: 'Yoga',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Donna Wilson',
    capacity: 10,
  },
  {
    title: 'Zumba Dance',
    category: 'Dance',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Donna Wilson',
    capacity: 20,
  },
  {
    title: 'Cardio Blast',
    category: 'Gym',
    time: '5:00 PM - 7:00 PM',
    instructor: 'Randy Porter',
    capacity: 10,
  },
  {
    title: 'Pilates Reformer',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 10,
  },
  {
    title: 'Supple Spine and Shoulders',
    category: 'Yoga',
    time: '6:30 AM - 8:00 AM',
    instructor: 'Randy Porter',
    capacity: 15,
  },
  {
    title: 'Yoga for Divas',
    category: 'Yoga',
    time: '9:00 AM - 11:00 AM',
    instructor: 'Donna Wilson',
    capacity: 20,
  },
  {
    title: 'Virtual Cycle',
    category: 'Gym',
    time: '8:00 AM - 9:00 AM',
    instructor: 'Randy Porter',
    capacity: 20,
  },
]

function render() {
  for (let i = 0; i < classes.length; i++) {
    tableElement.insertAdjacentHTML('beforeend', getTemplate(classes[i], i))
  }
}

render()

function getTemplate(tr, index) {
  return `
    <tr data-index="${index}" style="background-color:${index % 2 === 0 ? '#f8f7ff' : 'white'}">
      <td>${tr.title}</td>
      <td>${tr.category}</td>
      <td>${tr.time}</td>
      <td>${tr.instructor}</td>
      <td>${tr.capacity}</td>
    </tr>
  `
}
