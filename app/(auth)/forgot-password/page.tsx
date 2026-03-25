import FormForgotPassword from "@/components/forms/FormForgotPassword";

export default function ForgotPasswordPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center px-4 pb-8 md:px-8 rounded-xl backdrop-blur-3xl border bg-muted/20 pt-8">
                <FormForgotPassword />
            </div>
        </div>
    );
}   