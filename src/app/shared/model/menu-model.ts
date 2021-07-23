import { Roles } from '../../auth';
import { NavItem } from './nav-item';

export class MenuModel {
    public static NAV_ITEMS: NavItem[] = [
        {
            displayName: 'Templates',
            iconName: 'business',
            roles: [Roles.fraudOfficer],
            children: [
                {
                    displayName: 'List',
                    route: 'templates',
                    roles: [Roles.fraudOfficer],
                },
                {
                    displayName: 'References',
                    route: 'references',
                    roles: [Roles.fraudOfficer],
                },
                {
                    displayName: 'Default reference',
                    route: 'default-references',
                    roles: [Roles.fraudOfficer],
                },
            ],
        },
        {
            displayName: 'Groups',
            iconName: 'group_work',
            roles: [Roles.fraudOfficer],
            children: [
                {
                    displayName: 'List',
                    route: 'groups',
                    roles: [Roles.fraudOfficer],
                },
                {
                    displayName: 'References',
                    route: 'groups-reference',
                    roles: [Roles.fraudOfficer],
                },
            ],
        },
        {
            displayName: 'Lists',
            iconName: 'list_alt',
            roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
            children: [
                {
                    displayName: 'White',
                    route: 'lists/white',
                    iconName: 'panorama_fish_eye',
                    roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
                },
                {
                    displayName: 'Black',
                    route: 'lists/black',
                    iconName: 'lens',
                    roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
                },
                {
                    displayName: 'Grey',
                    route: 'lists/grey',
                    iconName: 'tonality',
                    roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
                },
            ],
        },
        {
            displayName: 'Load fraud',
            iconName: 'publish',
            route: 'load/fraud',
            roles: [Roles.fraudOfficer],
        },
        {
            displayName: 'Emulation template',
            iconName: 'accessibility_new',
            route: 'emulation/template',
            roles: [Roles.fraudOfficer, Roles.fraudMonitoring, Roles.fraudSupport],
        },
        {
            displayName: 'Historical data',
            iconName: 'history',
            route: 'historical-data/payments',
            roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
        },
        {
            displayName: 'Audit',
            iconName: 'wysiwyg',
            route: 'audit',
            roles: [Roles.fraudOfficer, Roles.fraudMonitoring],
        },
    ];
}
