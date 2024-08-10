import { createContext, useContext, useState } from 'react';
import { AuthStateInterface } from '../interfaces/auth.interface';

type AuthContextProps = {
	authState?: {
		value: AuthStateInterface;
		setValue: (value: AuthStateInterface) => void;
	};
	onLogout?: () => Promise<any>;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [authState, setAuthState] = useState<AuthStateInterface>({
		authenticated: true,
		token: null,
	});

	const value: AuthContextProps = {
		authState: {
			value: authState,
			setValue: setAuthState,
		},
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
	return useContext(AuthContext);
};
export { AuthContextProvider, useAuthContext };
