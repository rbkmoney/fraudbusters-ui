export interface NavItem {
    displayName: string;
    active?: boolean;
    disabled?: boolean;
    iconName?: string;
    route?: string;
    children?: NavItem[];
    roles?: string[];
}
