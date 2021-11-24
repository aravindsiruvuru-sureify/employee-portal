/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TabContext = React.createContext();

const Tabs = ({ children, className, activeTabIndex = null }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabIndex || 0);

  useEffect(() => {
    if (activeTabIndex) setSelectedTab(activeTabIndex);
  }, [activeTabIndex]);

  const value = React.useMemo(() => [selectedTab, setSelectedTab], [
    selectedTab,
    activeTabIndex,
  ]);
  return (
    <TabContext.Provider value={value}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};

const useToggleContext = () => {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error(
      `Tab compound components cannot be rendered outside the Tab component`
    );
  }
  return context;
};

const TabLabel = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const TabsHead = ({ children, getActiveTab = () => {}, ...rest }) => {
  const [activeTab, setActiveTab] = useToggleContext();
  const tabs = React.Children.map(children, (child, index) => {
    if (child.type.target?.name === TabLabel.name) {
      return React.cloneElement(child, {
        onClick: () => {
          setActiveTab(index);
          getActiveTab(index);
        },
        isActive: activeTab === index,
      });
    }
    return child;
  });
  return <div {...rest}>{tabs}</div>;
};

const TabContent = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const TabsBody = ({ children, ...rest }) => {
  const [activeTab] = useToggleContext();
  const selectedTab = React.Children.toArray(children)[activeTab];
  return <div {...rest}>{selectedTab}</div>;
};

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
  className: '',
};

Tabs.TabLabel = TabLabel;
Tabs.TabsHead = TabsHead;
Tabs.TabContent = TabContent;
Tabs.TabsBody = TabsBody;

export default Tabs;
