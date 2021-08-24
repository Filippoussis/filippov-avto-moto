import React, {useState} from 'react';
import Tabs from './tabs/tabs';
import Specifications from './specifications/specification';
import Reviews from './reviews/reviews';
import Contacts from './contacts/contacts';

import {TabsName} from '../../../const';

import './more-info.scss';

function MoreInfo() {

  const [activeTab, setActiveTab] = useState(TabsName.SPECIFICATIONS);
  const handleClickTab = (label) => setActiveTab(label);

  const switchTab = (tab) => {
    switch(tab) {
      case TabsName.SPECIFICATIONS:
        return <Specifications />;
      case TabsName.REVIEWS:
        return <Reviews />;
      case TabsName.CONTACTS:
        return <Contacts />;
      default:
        break;
    }
  };

  return (
    <div className="more-info">
      <Tabs activeTab={activeTab} onClickTab={handleClickTab} />
      {switchTab(activeTab)}
    </div>
  );
}

export default MoreInfo;
