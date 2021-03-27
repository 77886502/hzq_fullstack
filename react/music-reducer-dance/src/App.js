import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      store is work 
    </Provider>
  )
}

export default App;