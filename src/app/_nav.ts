import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    name: 'Recent Transactions',
    url: '/service-catalogue/recent-transactions',
    icon: 'icon-speedometer'
  },
  {
    name: 'Service Catalogue',
    url: '/service-catalogue/service-catalogue',
    icon: 'icon-speedometer'
  },
  {
    name: 'Payment Agreement',
    url: '/service-catalogue/payment-agreement',
    icon: 'icon-speedometer'
  },
  {
    name: 'PGA Registration',
    url: '/service-catalogue/pga-registration',
    icon: 'icon-speedometer'
  },
  {
    name: 'Company Details',
    url: '/service-catalogue/company-details',
    icon: 'icon-speedometer'
  },
  {
    name: 'Profile Setting',
    url: '/service-catalogue/pofile-setting',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'My Transactions'
  },
  {
    name: 'eVGM',
    url: '/evgm',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Quotations',
        url: '/evgm/quotations',
        icon: 'icon-puzzle'
      },
      {
        name: 'My Weighments',
        url: '/evgm/my-weighments',
        icon: 'icon-puzzle'
      },
      {
        name: 'Payment',
        url: '/evgm/payment',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Booking',
    url: '/booking',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Booking Service Provider',
        url: '/booking/booking-service-provider',
        icon: 'icon-puzzle'
      },
      {
        name: 'Container Booking List',
        url: '/booking/container-booking-list',
        icon: 'icon-puzzle'
      },
      {
        name: 'CRO',
        url: '/booking/cro',
        icon: 'icon-puzzle'
      },
      {
        name: 'Container Booking',
        url: '/booking/container-booking',
        icon: 'icon-puzzle'
      },
      {
        name: 'Shipping Instructions',
        url: '/booking/shipping-instructions',
        icon: 'icon-puzzle'
      },
      {
        name: 'Booking Rates',
        url: '/booking/booking-rates',
        icon: 'icon-puzzle'
      },
      {
        name: 'My Inquiries',
        url: '/booking/my-inquiries',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Transport',
    url: '/transport',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Search Transporter',
        url: '/transport/search-transporter',
        icon: 'icon-puzzle'
      },
      {
        name: 'My Request',
        url: '/transport/my-request',
        icon: 'icon-puzzle'
      },
      {
        name: 'Payment',
        url: '/transport/payment',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'CAF',
    url: '/caf',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'CAF',
        url: '/caf/caf',
        icon: 'icon-puzzle'
      },
      {
        name: 'Application History',
        url: '/caf/application-history',
        icon: 'icon-puzzle'
      },
    ]
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
