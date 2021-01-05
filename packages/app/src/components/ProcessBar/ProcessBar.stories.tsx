// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0"

import { ProcessBar, ProcessBarProps } from "./ProcessBar"

export default {
  title: "Example/ProcessBar",
  component: ProcessBar,
  argTypes: {},
} as Meta

const Template: Story<ProcessBarProps> = (args) => <ProcessBar {...args} />

export const Default = Template.bind({})
Default.args = {}
