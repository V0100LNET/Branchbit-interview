export interface TabEventInfo{
    indexTab: number
    nameTab: string
}

export interface TabEventInfoExternalLink {
    indexTab: number
    nameTab: string
}

export interface ModeDialogData<A> {
    mode: 'Create' | 'Update' | 'ViewInfo'
    data: A
}