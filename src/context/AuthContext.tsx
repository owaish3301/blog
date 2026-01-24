/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState, useContext } from "react";

import supabase from "../lib/supabse";
import type { Session } from "@supabase/supabase-js";

interface AuthContextType {
  loading: boolean;
  session: null | Session;
  signup: ({
    email,
    password,
  }: authInputs) => Promise<{ success: boolean; error?: string }>;
  signin: ({
    email,
    password,
  }: authInputs) => Promise<{ success: boolean; error?: string }>;
  signout: () => Promise<{ success: boolean; error?: string }>;
}

type authInputs = {
  email: string;
  password: string;
};

const AuthContext = createContext<null | AuthContextType>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // console.log(session);

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const signup = async ({ email, password }: authInputs) => {
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      console.log(data);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch {
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  const signin = async ({ email, password }: authInputs) => {
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data);
      if (error) return { success: false, error: error.message };
      return { success: true };
    } catch {
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  const signout = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signOut();
      if (error) return { success: false, error: error.message };
      return { success: true };
    } catch {
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, session, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export { AuthProvider, AuthContext, useAuth };
