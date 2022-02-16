import { useEffect, useState } from "react"

type SearchUrlInitState = {
    [key in string]?: number | string | number[] | string[]
}
export const useSearchUrl = (initState?: SearchUrlInitState) => {
    const [params, setParams] = useState<SearchUrlInitState>()

    useEffect(() => {
        setParams(initState);
        return () => {
        }
    }, [])

}