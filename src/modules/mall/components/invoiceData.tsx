import { withStore } from 'services/store'
import { MyInvoice } from 'api/order'

export const withInvoiceResult = withStore('invoiceResult', {} as MyInvoice)
export const useInvoiceResult = withInvoiceResult.getShareState
