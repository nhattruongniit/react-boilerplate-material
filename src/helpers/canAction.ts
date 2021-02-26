import { AbilityBuilder, Ability } from '@casl/ability';
import store from 'stores';

function defineAbilitiesFor(type: string) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  switch (type) {
    case 'ADMIN':
      can(['create', 'update', 'view', 'delete'], 'all');
      break;
    case 'LEAD':
      // menu
      can('view', 'menu-add-product');

      // router
      can('view', 'page-add-proudct');

      // action
      can('create', 'product');
      break;
    case 'GUEST':
      cannot(['create', 'update', 'view', 'delete'], 'all');
      break;
  }
  return build();
}

const canAction = (action: string, resource: string) => {
  // eslint-disable-next-line prefer-destructuring
  const abilities = defineAbilitiesFor('LEAD');
  return abilities.can(action, resource);
};

export default canAction;
