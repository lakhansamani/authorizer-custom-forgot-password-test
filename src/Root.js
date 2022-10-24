import { BrowserRouter } from 'react-router-dom';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import App from './App';

export default function Root() {
	return (
		<BrowserRouter>
			<AuthorizerProvider
				config={{
					authorizerURL: 'http://localhost:8080',
					redirectURL: window.location.origin,
					clientID: '77ec056b-33fc-48da-89f5-f686f6a71f40',
				}}
			>
				<App />
			</AuthorizerProvider>
		</BrowserRouter>
	);
}
