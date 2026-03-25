import FormResetPassword from "@/components/forms/FormResetPassword";

export default function ResetPasswordPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col justify-center items-center px-4 pb-8 md:px-8 rounded-xl backdrop-blur-3xl border bg-muted/20 pt-8">
                <FormResetPassword />
            </div>
        </div>
    );
}