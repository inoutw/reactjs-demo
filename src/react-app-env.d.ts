/// <reference types="react-scripts" />
declare type Func<T = {}> = (value?: T) => void;
declare type Listener<T> = (value: T) => void;
declare interface PageOptions {
  disableHeader?: boolean;
  wrapperClassName?: string;
}
declare interface PageComponent<T = any> {
  (props: RouteComponentProps<T>): ReactElement;
  options?: PageOptions;
}

// component: PageComponent    修改 路由组件既可以是  PageComponent类型的也可以是loadableCompent 类型的
declare interface Route {
  path: string;
  name: string;
  component: any;
}

declare interface Module {
  name: string;
  routes?: Route[];
}

declare type Api<P, R> = (p: P) => Promise<R>;
