// history.js
import createHistory from 'history/createBrowserHistory';
import { store } from './index';
const history = createHistory();

// const dispatch = useDispatch();
const location = history.location;

// Clear the error message after page change

history.listen(newLocation => {
  if (location.pathName !== newLocation.pathName) {
    store.dispatch({ type: 'API_SUCCESS' });
  }
});

export default history;
