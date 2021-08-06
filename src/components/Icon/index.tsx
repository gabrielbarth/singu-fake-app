

import React from 'react';
import { FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';

import { EIconPack } from '../../constants/enums/EIconPack';

type IconComponentProps = {
    pack?: string;
    name: React.ComponentProps<typeof FontAwesome5>['name'] |
    React.ComponentProps<typeof FontAwesome>['name'] |
    React.ComponentProps<typeof Entypo>['name'];
    color?: string;
    size?: number;
    focused?: boolean;
};

const Icon = ({ pack, name, color, focused, size = 25}: IconComponentProps) => {
    const iconStyle = {
        marginBottom: focused ? 0 : -10 
    };

    if (pack == EIconPack.ENTYPO)
        return <Entypo size={size} name={name} focused={focused} color={color} style={iconStyle} />;

    if (pack == EIconPack.FONT_AWESOME)
        return <FontAwesome size={size} name={name} focused={focused} color={color} style={iconStyle} />;

    return <FontAwesome5 size={size} name={name} focused={focused} color={color}  style={iconStyle} />;
}

export { Icon };