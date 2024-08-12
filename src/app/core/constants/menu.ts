import { MenuItem } from "../models/menu.model";

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Usuarios',
      separator: false,
      icon: 'user',
      items: [
        {
          label: 'Agregar',
          route: '/inicio/usuarios',
        },
        {
          label: 'Listado',
          route: '/inicio/usuarios/listar',
        },
      ],
    },
    {
      group: 'Roles',
      separator: false,
      icon: 'team',
      items: [
        {
          label: 'Agregar',
          route: '/inicio/roles/',
        },
        {
            label: 'Listado',
            route: '/inicio/roles/listar'
        }
      ],
    },
  ];
}