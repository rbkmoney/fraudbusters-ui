import { NavItem } from './nav-item';

export class MenuModel {
    public static NAV_ITEMS: NavItem[] = [
        {
            displayName: 'Templates',
            iconName: 'business',
            roles: ['fraud-officer'],
            children: [
                {
                    displayName: 'List',
                    route: 'templates',
                    roles: ['fraud-officer'],
                },
                {
                    displayName: 'References',
                    route: 'references',
                    roles: ['fraud-officer'],
                },
            ],
        },
        {
            displayName: 'Groups',
            iconName: 'group_work',
            roles: ['fraud-officer'],
            children: [
                {
                    displayName: 'List',
                    route: 'groups',
                    roles: ['fraud-officer'],
                },
                {
                    displayName: 'References',
                    route: 'groups-reference',
                    roles: ['fraud-officer'],
                },
            ],
        },
        {
            displayName: 'Lists',
            iconName: 'list_alt',
            roles: ['fraud-officer', 'fraud-monitoring'],
            children: [
                {
                    displayName: 'White',
                    route: 'lists/white',
                    iconName: 'panorama_fish_eye',
                    roles: ['fraud-officer', 'fraud-monitoring'],
                },
                {
                    displayName: 'Black',
                    route: 'lists/black',
                    iconName: 'lens',
                    roles: ['fraud-officer', 'fraud-monitoring'],
                },
                {
                    displayName: 'Grey',
                    route: 'lists/grey',
                    iconName: 'tonality',
                    roles: ['fraud-officer', 'fraud-monitoring'],
                },
            ],
        },
        {
            displayName: 'Load fraud',
            iconName: 'publish',
            route: 'load/fraud',
            roles: ['fraud-officer'],
        },
        {
            displayName: 'Emulation template',
            iconName: 'accessibility_new',
            route: 'emulation/template',
            roles: ['fraud-officer', 'fraud-monitoring', 'fraud-support'],
        },
        {
            displayName: 'Audit',
            iconName: 'wysiwyg',
            route: 'audit',
            roles: ['fraud-officer', 'fraud-monitoring'],
        },
    ];
}
