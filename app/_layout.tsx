import { tokenCache } from "@/cache";
import InitialLayout from "@/components/InitialLayout";
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publishabKey= process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishabKey){
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}
export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishabKey}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex :1, backgroundColor:"#000"}}>
            <InitialLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  
  );
}
