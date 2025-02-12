import {cn} from "@/lib/utils";
import { Button } from "@/components/ui/button";

function LoginButton({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function Home() {
  return (
   <>
   <main className="flex h-full flex-col bg-purple-500 item-center justify-center ">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md"
          )}>
          🔏 Auth
        </h1>
        <p className="text-white text-lg">
          A simple authetication service
        </p>
       <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
       </div>
      </div>
   </main>
   </>
  );
}
