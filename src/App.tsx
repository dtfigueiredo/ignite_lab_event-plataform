import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import { client } from './lib/apollo'
import { MyRouter } from './MyRouter'

export function App() {
	return (
		<>
			{/* PROVIDER CONTEXT PARA O APOLLO */}
			<ApolloProvider client={client}>
				{/* PROVIDER CONTEXT PARA O ROUTERDOM */}
				<BrowserRouter>
					<MyRouter />
				</BrowserRouter>
			</ApolloProvider>
		</>
	)
}
