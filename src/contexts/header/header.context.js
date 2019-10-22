import { createContext } from 'react';

const HeaderContext = createContext({
  hidden: false,
  toggleHidden: () => {}
});

export default HeaderContext;
