import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../../components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { ZodError, type ZodIssue } from "zod";
import { useAuth } from "../../context/AuthContext";
import { emailSchema, passSchema } from "../../validations/authValidations";
import { toast } from "sonner";

interface AuthErrorType {
  emailError: string | null | ZodError;
  passwordError: string | null | ZodError;
}

export default function SignIn() {
  const [errors, setErrors] = useState<AuthErrorType>({
    emailError: null,
    passwordError: null,
  });
  const formatError = (err: string | null | ZodError | undefined) => {
    if (!err) return null;
    if (typeof err === "string") return err;
    if (err instanceof ZodError) {
      return err.issues.map((e: ZodIssue) => e.message).join(" ");
    }
    return String(err);
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const { signin, session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate("/home");
    }
  }, [session, navigate]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //clear errors
    setErrors(() => ({ emailError: "", passwordError: "" }));

    //validations

    const emailCheck = emailSchema.safeParse(email);
    const passwordCheck = passSchema.safeParse(password);

    if (emailCheck.error) {
      setErrors((prev) => ({ ...prev, emailError: emailCheck.error }));
      return;
    }
    if (passwordCheck.error) {
      setErrors((prev) => ({ ...prev, passwordError: passwordCheck.error }));
      return;
    }

    //signup
    const response = await signin({ email, password });
    if (response.error) {
      toast.error(response.error || "An unknown error occured");
    }
    if (response.success) {
      toast.success("SignIn successful");
      navigate("/home");
    }
  };

  
  return (
    <div>
      <Card className="py-4 sm:py-6 gap-3 sm:gap-6">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold text-center">Welcome back</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandler}>
            <FieldGroup>
              <Field>
                <Button
                  variant={"secondary"}
                  type="button"
                  className="py-3 h-auto rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or
              </FieldSeparator>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  autoComplete="username"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                {formatError(errors.emailError) && (
                  <FieldDescription className="text-sm text-red-600 mt-1">
                    {formatError(errors.emailError)}
                  </FieldDescription>
                )}

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {formatError(errors.passwordError) && (
                    <FieldDescription className="text-sm text-red-600 mt-1 sm:col-span-2">
                      {formatError(errors.passwordError)}
                    </FieldDescription>
                  )}
                </Field>
                <Field>
                  <Button type="submit">Create Account</Button>
                </Field>

                <FieldDescription className="text-center">
                  Don't have an account yet? <Link to="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link to="#">Terms of Service</Link> and{" "}
        <Link to="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
