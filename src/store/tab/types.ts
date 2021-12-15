export interface ITabReducer {
  tabs: Record<string, ITab>;
  currentTab: string;
}

export interface ITab {
  tabId: string;
  title: string;
  icon: 'home' | 'user';
}
