import React from 'react';
import HeaderMain from './../../component/Main/HeaderMain';
import InfoMain from './../../component/Main/InfoMain';
import ContentMain from './../../component/Main/ContentMain';

export default function indexCyberbugs() {
  return (
    <div>
      <div className="main">
        <h3>Cyber Board</h3>
        <HeaderMain />
        <InfoMain />
        <ContentMain />
      </div>
    </div>
  )
}
