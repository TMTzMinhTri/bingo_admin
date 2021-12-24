import * as React from 'react';
import { Tabs } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentTab, selectListTabs } from '@/store/tab/selector';
import { tabActions } from '@/store/tab';
import { Box } from '@mui/system';
import { modalActions } from '@/store/modal';
import { ModalOptions } from '@/store/modal/types';
import { Tab, TabPanel, TabTitle } from '@/components';
import { tabComponents } from '@/constants/tabs';

export default function Index() {
  const dispatch = useDispatch();
  const tabs = useSelector(selectListTabs);
  const currentTab = useSelector(selectCurrentTab);

  const showModal = () => {
    const config: ModalOptions = {};
    dispatch(modalActions.open(config));
  };

  const handleChangeTab = (e: React.SyntheticEvent<Element, Event>, value: string) => {
    dispatch(tabActions.changeTab(value));
  };

  const renderTabElement = React.useMemo(() => {
    return tabs.map((tab) => (
      <Tab
        key={`tab-${tab.tabType}-${tab.tabId}`}
        disableTouchRipple
        disableRipple
        label={<TabTitle item={tab} />}
        title={tab.title}
        value={tab.tabId}
      />
    ));
  }, [tabs]);

  const renderTabPanelContent = React.useMemo(() => {
    return tabs.map((tab, index) => {
      const Component = tabComponents[tab.tabType];
      return (
        <TabPanel value={tab.tabId} index={index} key={tab.tabId}>
          <Component />
        </TabPanel>
      );
    });
  }, [tabs]);

  return (
    <Box>
      <Tabs variant="scrollable" scrollButtons allowScrollButtonsMobile value={currentTab} onChange={handleChangeTab}>
        {renderTabElement}
      </Tabs>
      {renderTabPanelContent}
    </Box>
  );
}
