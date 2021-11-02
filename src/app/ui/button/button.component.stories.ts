import { IStory } from '@storybook/angular';
import { GeneralModule } from '../general.module';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
};

export const primary = () =>
  ({
    moduleMetadata: {
      imports: [GeneralModule],
    },
    component: ButtonComponent,
    props: {
      title: 'Click Me!',
      onClick: () => {},
    },
    disabled: false,
  } as IStory);

export const secondary = () =>
  ({
    moduleMetadata: {
      imports: [],
    },
    component: ButtonComponent,
    props: {
      title: 'My button',
      onClick: () => {},
      disabled: true,
    },
  } as IStory);

export const disabled = () =>
  ({
    moduleMetadata: {
      imports: [],
    },
    component: ButtonComponent,
    props: {
      title: 'My button',
      onClick: () => {},
      disabled: true,
    },
  } as IStory);
