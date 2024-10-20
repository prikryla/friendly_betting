'use server';

import { signOut } from '../../../auth';

export const handleLogout = async (): Promise<void> => {
    await signOut();
};
