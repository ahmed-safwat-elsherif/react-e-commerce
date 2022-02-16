import React from 'react'
type LazyWrapperProps = {
    children: React.LazyExoticComponent<() => JSX.Element> | React.ReactNode
    loading?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal
}
const Loading = () => <h1>loading ...</h1>

function LazyWrapper({ children, loading }: LazyWrapperProps): JSX.Element {
    return (
        <React.Suspense fallback={loading || <Loading />}>
            {children}
        </React.Suspense>
    )
}
export default LazyWrapper