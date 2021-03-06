// import Timeline from 'react-calendar-timeline/lib'
import React from "react"
// make sure you include the timeline stylesheet or the timeline will not be styled
// import 'react-calendar-timeline/lib/Timeline.css'
// import moment from 'moment'
const Patientschedule = props => (
 <div className="patienttime">

const groups = [{ id: 1, title: 'Patient id1' }, { id: 2, title: 'Patient id2' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'X Ray',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

export const Booking = () => {
    return (
// ReactDOM.render(
  <div>
    Rendered by react!
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  </div>);
};
</div>
);
//   document.getElementById('root')

export default Patientschedule;