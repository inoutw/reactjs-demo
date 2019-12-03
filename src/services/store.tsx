import React, { Dispatch, useState, useEffect } from "react";

export interface StoreProps<T> {
  storeState: [T, Dispatch<T>];
}
interface WithStore<T> {
  <P>(Component: React.ComponentType<P & StoreProps<T>>): React.ComponentType<
    P
  >;
  getShareState(): T;
  setShareState: Func<T>;
  addListener(listener: Func<T>): void;
  removeListener(listener: Func<T>): void;
}

export function withStore<T extends object>(
  persistKey: string,
  defaultValue: T
): WithStore<T> {
  let persistValue = defaultValue;
  let value = localStorage.getItem(persistKey);
  if (value) {
    persistValue = JSON.parse(value);
  }

  const listeners = new Set<Func<T>>();
  const addListener = (listener: Func<T>) => listeners.add(listener);
  const removeListener = (listener: Func<T>) => listeners.delete(listener);
  const setStoreState: Func<T> = (value: T) => {
    localStorage.setItem(persistKey, JSON.stringify(value));
    persistValue = value;
    listeners.forEach(setValue => {
      setValue && setValue(value);
    });
    // console.warn('share state change', value);
  };

  function StoreComponent<P>(
    Component: React.ComponentType<P & StoreProps<T>>
  ) {
    const WithStoreComponent: React.FC<P> = props => {
      const [value, setValue] = useState(defaultValue);
      useEffect(() => {
        addListener(setValue);
        return () => removeListener(setValue);
      }, []);
      return (
        <Component {...props} storeState={[persistValue, setStoreState]} />
      );
    };
    return WithStoreComponent;
  }
  StoreComponent.setShareState = setStoreState;
  StoreComponent.addListener = addListener;
  StoreComponent.removeListener = removeListener;
  StoreComponent.getShareState = () => persistValue;
  return StoreComponent;
}
