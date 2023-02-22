import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>



const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>


export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    AllCaps: false // true: capitalizar toda la palabra
}

export const AllCaps = Template.bind({});
AllCaps.args ={
    size: 'normal',
    AllCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args ={
    size: 'normal',
    color: 'text-secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'text-tertiary'
}


// CustomFontColor
// fontColor: 

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
fontColor: '#5517ac'

}