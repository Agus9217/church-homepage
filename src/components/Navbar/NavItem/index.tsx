interface NavItemInterface {
  label: string,
  href: string
}

export const NAV_ITEM: NavItemInterface[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Nosotros',
    href: '/nosotros'
  },
  {
    label: 'Ministerios',
    href: '/ministerios'
  },
  {
    label: 'Contactos',
    href: '/contactos'
  }
]
