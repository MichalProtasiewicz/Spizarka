import React from 'react';
import ModalContext from 'context';

const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <ModalContext.Consumer>
        {(context) => <Component {...props} modalContext={context} />}
      </ModalContext.Consumer>
    );
  };
};

export default withContext;
