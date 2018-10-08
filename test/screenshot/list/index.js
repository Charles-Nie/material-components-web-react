import React from 'react';
import './index.scss';
import '../../../packages/list/index.scss';

import MaterialIcon from '../../../packages/material-icon';
import List from '../../../packages/list/index';
import {ListItem} from '../../../packages/list/index';

const ListScreenshotTest = () => {
  return (
    <div>
      <List twoLine>
        <ListItem
          tabIndex={0}
          primaryText='Photos'
          secondaryText='Jan 9, 2018'
          graphic={<MaterialIcon icon='folder'/>}
          meta={<MaterialIcon icon='info'/>}
        />
        <ListItem
          primaryText='Recipes'
          secondaryText='Jan 17, 2018'
          graphic={<MaterialIcon icon='folder'/>}
          meta={<MaterialIcon icon='info'/>}
        />
        <ListItem
          primaryText='Work'
          secondaryText='Jan 28, 2018'
          graphic={<MaterialIcon icon='folder'/>}
          meta={<MaterialIcon icon='info'/>}
        />
      </List>
    </div>
  );
};

export default ListScreenshotTest;
