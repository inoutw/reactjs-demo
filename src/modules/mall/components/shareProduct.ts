import { withStore } from 'services/store'

export const withShareProduct = withStore('shareProduct', {} as any)
export const useShareProduct = withShareProduct.getShareState
