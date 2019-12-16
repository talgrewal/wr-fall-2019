import * as AddCalendarEvent from 'react-native-add-calendar-event';
import {TouchableOpacity, Text} from 'react-native-gesture-handler';

export default CalendarButton = ({event}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        addToCalendar(event);
      }}>
      <Text style={styles.buttonText}>Add to my calendar</Text>
    </TouchableOpacity>
  );
};

addToCalendar = event => {
  const eventConfig = {
    title: event.title,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    notes: event.description,
  };
  AddCalendarEvent.presentEventCreatingDialog(eventConfig)
    .then(eventInfo => {
      console.warn(JSON.stringify(eventInfo));
    })
    .catch(error => {
      console.warn(error);
    });
};
