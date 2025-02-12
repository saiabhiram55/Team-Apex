" use client";

import {
     Card,
     CardContent,
     CardHeader,
     CardFooter
 } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel : string;
    backButtonHref : string;
    showsocial? : boolean;
};

export const CardWrapper =({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showsocial
}: CardWrapperProps) =>{
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={ headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showsocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
        </Card>
    )
}