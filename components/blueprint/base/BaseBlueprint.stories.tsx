import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseBlueprint, { IBaseBlueprint } from './BaseBlueprint';
import { mockBaseBlueprintProps } from './BaseBlueprint.mocks';

export default {
    title: 'blueprints/BaseBlueprint', // usually folder structure
    component: BaseBlueprint,
    argTypes: {},
} as ComponentMeta<typeof BaseBlueprint>;

const Blueprint: ComponentStory<typeof BaseBlueprint> = (args) => (
    <BaseBlueprint {...args} />
);

export const Base = Blueprint.bind({});

Base.args = {
    ...mockBaseBlueprintProps.base,
} as IBaseBlueprint;