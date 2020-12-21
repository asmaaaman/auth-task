import "./App.css";
import MyRoutes from "./Routing/route";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

function App() {
  console.log("storeeeeeeee", store);
  return (
    <Provider store={store}>
      <div className="App">
        <MyRoutes />
      </div>
    </Provider>
  );
}

export default App;
