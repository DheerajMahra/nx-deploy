import * as React from 'react';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Shop />
      <Cart />
    </React.Suspense>
  );
}

export default App;
