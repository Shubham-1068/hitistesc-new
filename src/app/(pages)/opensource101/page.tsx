'use client';

import { useEffect } from 'react';
import RegistrationForm from '@/components/RegistrationForm';
import Decorations from '@/components/ui/home/Decorations';

export default function RegisterPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <div className="">
            <Decorations />
            <div className="mt-16 md:mt-24 relative md:left-10">
                <RegistrationForm />
            </div>
        </div>
    );
}
