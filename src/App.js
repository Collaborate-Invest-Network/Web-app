import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import createAppStore from "./redux/store";
import axios from "axios";
import CommonLoading from "./components/loader/CommonLoading";
//import { useLocation } from "react-router-dom";

const ErrorComponent = ({ errorMessage }) => (
  <div className="text-red-500 font-bold text-center">{errorMessage}</div>
);

const App = () => {
  //const location = useLocation();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const checkServerStatus = async () => {
  //     try {
  //       await axios.get("/server-status");
  //     } catch (err) {
  //       setError("Server is down. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkServerStatus();
  // }, []);

  // Asynchronously initialize the Redux store, including data fetching and authentication,
  // while displaying a loading indicator. Making sure that the store is initialized with credentials and data before rendering the app.

  useEffect(() => {
    const initializeStore = async () => {
      try {
        const appStore = await createAppStore();
        setStore(appStore);
      } catch (err) {
        setError(`Error initializing the app: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    initializeStore();
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      {loading && <CommonLoading />}
      {error && <ErrorComponent errorMessage={error} />}
      {store && !loading && !error && (
        <Provider store={store}>
          <Login />
        </Provider>
      )}
    </div>

  );
};

export default App;

