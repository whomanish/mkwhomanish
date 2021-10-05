import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if(typeof window !== "undefined"){
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);