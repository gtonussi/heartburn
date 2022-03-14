import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "components"

export default {
  title: "Heartburn/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...args}>Button Component</Button>
)

export const Primary = Template.bind({})
Primary.args = {
  buttonType: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  buttonType: "secondary",
}

export const Square = Template.bind({})
Square.args = {
  borderRadius: "square",
}

export const Round = Template.bind({})
Round.args = {
  borderRadius: "round",
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
