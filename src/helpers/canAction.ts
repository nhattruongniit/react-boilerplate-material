import { AbilityBuilder, Ability } from '@casl/ability';

// configs
import { USER_ROLE } from 'configs';

function defineAbilitiesFor(type: string) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  switch (type) {
    case USER_ROLE.ADMIN:
      can(['create', 'update', 'view', 'delete'], 'all');
      break;
    case USER_ROLE.LEAD:
      // menu
      can('view', 'menu-add-product');

      // action
      can('create', 'product');
      break;
    case USER_ROLE.GUEST:
      cannot(['create', 'update', 'view', 'delete'], 'all');
      break;
  }
  return build();
}

const canAction = (action: string, resource: string) => {
  const abilities = defineAbilitiesFor(USER_ROLE.LEAD);
  return abilities.can(action, resource);
};

export default canAction;
