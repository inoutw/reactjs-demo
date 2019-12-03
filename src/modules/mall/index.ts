import OrderConfirm from './OrderConfirm'
import PayResult from './PayResult'
import ReceiverList from './ReceiverList'
import EditReceiver from './EditReceiver'
import InvoicePage from './InvoicePage'
import ShareWe from './Share-we'
// import Share from './Share'

const mallModule: Module = {
  name: 'mall',
  routes: [
    {
      name: '商品预售',
      path: '/good/pay/:kid',
      component: ShareWe,
    },
    // {
    //   name: '商品预售',
    //   path: '/good/share/:kid',
    //   component: Share,
    // },
    {
      name: '订单预览',
      path: '/good/pay/order',
      component: OrderConfirm,
    },
    {
      name: '支付结果',
      path: '/mall/pay-result',
      component: PayResult,
    },
    {
      name: '收货人列表',
      path: '/mall/receiver-list',
      component: ReceiverList,
    },
    {
      name: '编辑收货人',
      path: '/mall/edit-receiver',
      component: EditReceiver,
    },
    {
      name: '开发票',
      path: '/mall/invoice',
      component: InvoicePage,
    },
  ],
}
export default mallModule
