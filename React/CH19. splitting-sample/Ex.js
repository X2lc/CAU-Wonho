const SplitMe = React.lazy(() => import('./SplitMe')); 
import React, { Suspense } from 'react';

(...)
<Suspense fallback={<div>loading...</div>}>
    <SplitMe />
</Suspense> 