import { withStore } from 'services/store'
import { OrderReceivingAddressVO } from 'api/order'

export const withDefaultReceiver = withStore('defaultReceiver', {} as OrderReceivingAddressVO)
export const useDefaultReceiver = withDefaultReceiver.getShareState
