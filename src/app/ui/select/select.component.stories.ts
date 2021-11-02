import { GeneralModule } from '../general.module';
import { SelectComponent } from './select.component';

export default {
  title: 'SelectComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GeneralModule],
  },
  component: SelectComponent,
  props: {
    chips: [
      {
        title: 'AB',
        data: {},
      },
      {
        title: 'BC',
        data: {},
      },
      {
        title: 'CD',
        data: {},
      },
    ],
    selectedChips: [
      {
        title: 'AB',
        data: {},
      },
      {
        title: 'CD',
        data: {},
      },
    ],
  },
});
