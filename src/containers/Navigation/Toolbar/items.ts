import { RouteComponentProps } from "react-router-dom";

export const getItems = (props: RouteComponentProps) => [
    { className: 'hidden-selected' },
    {
      className:
        props.history.location.pathname === '/home'
          ? 'p-tabmenuitem p-highlight'
          : 'p-tabmenuitem',
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => props.history.push('/home'),
    },
    {
      className:
        props.history.location.pathname === '/courses'
          ? 'p-tabmenuitem p-highlight'
          : 'p-tabmenuitem',
      label: 'Courses',
      icon: 'pi pi-fw pi-calendar',
      command: () => props.history.push('/courses'),
    },
  ]