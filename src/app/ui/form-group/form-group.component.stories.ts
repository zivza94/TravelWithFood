import { FormGroupComponent } from './form-group.component';

export default {
  title: 'FormGroupComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: FormGroupComponent,
  props: {
    placeholder: 'My Placeholder',
  },
});
