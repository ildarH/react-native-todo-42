const realServer = {
    baseUrl: '',
    isEnabled: false
}
const fitebaseServer = {
    baseUrl: 'https://react-native-todo-app-42-default-rtdb.europe-west1.firebasedatabase.app/',
    isEnabled: true
}

export default realServer.isEnabled ? realServer.baseUrl : fitebaseServer.baseUrl;