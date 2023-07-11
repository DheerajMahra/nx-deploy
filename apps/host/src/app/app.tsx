import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/**@ts-ignore */
import { VersionLogger } from "@nx-deploy/version-logger";

const Shop = React.lazy(() => import('shop/Module'));

VersionLogger();

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Shop />
    </React.Suspense>
  );
}

export default App;
