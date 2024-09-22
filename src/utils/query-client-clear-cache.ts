import { QueryKey } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'

export const queryClientClearCache = (queryKey?: QueryKey) => {
	queryClient.removeQueries({ queryKey })
}
