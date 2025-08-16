import OnBoadringScreen from "@/components/OnBoadringScreen";
import { useAuth } from "@/lib/ContextAppWrite";
import { Redirect } from "expo-router";

export default function Index() {
 const { session } = useAuth();
  return session ? (
    <Redirect href="/(protected)/Home" />
  ) : (
    <OnBoadringScreen/>
  );
}
