import React from 'react';
import { Link } from '@reach/router';

import './TabLink.scss';

const TabLink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => ({
        className: isCurrent ? 'active tab' : 'inactive tab',
      })}
    >
      <p className="link-text">
        {props.children}
      </p>
    </Link>
  );
  
};

export default TabLink;