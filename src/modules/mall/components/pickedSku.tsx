import { withStore } from 'services/store'

export const withPickedSku = withStore('pickedSku', {} as any)
export const usePickedSku = withPickedSku.getShareState
