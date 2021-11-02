import _ from "lodash";
import { Alert } from "react-native";
import { httpErrorMessages } from "./httpErrorMessages";

const alertErrorFromHttpCall = (err, title) => {
  if (!err.response) {
    return Alert.alert('Desculpe', 'Um erro inseperado occorreu',  [{ text: 'OK' }]);
  }

  const { status, data } = err.response;

  return Alert.alert(title || 'Desculpe', _.get(data, 'message', httpErrorMessages[status]),  [{ text: 'OK' }]);
}

export { alertErrorFromHttpCall }
