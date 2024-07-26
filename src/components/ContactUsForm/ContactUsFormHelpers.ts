// formHelpers.ts
interface FormValues {
    userName: string;
    userEmail: string;
    userMessage: string;
    userSummary: string;
}

export const onSubmit = async (values: FormValues): Promise<void> => {
    console.log(values);
    // Handle form submission logic here
};

export const required = (value: string): string | undefined => (value ? undefined : 'Required');

export const validateEmail = (value: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : 'Invalid email address';
};
